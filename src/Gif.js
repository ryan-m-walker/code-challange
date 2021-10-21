import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { Layout } from "./Layout"
import { useGiphy } from "./useGiphy"

export function Gif(props) {
  const params = useParams()
  const { data, isLoading, error } = useGiphy(`/gifs/${params.id}`)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    console.error(error)
    return <p>Error fetching GIF</p>
  }

  return (
    <Layout>
      <main>
        <Link to="/">Back to Trending</Link>
        <h2>{data.data.title}</h2>
        <img src={data.data.images.original.url} alt={data.data.title} />
        <p>
          Posted By:{" "}
          <a target="_blank" href={data.data.user.profile_url}>
            {data.data.user.display_name}
          </a>
        </p>
      </main>
    </Layout>
  )
}
