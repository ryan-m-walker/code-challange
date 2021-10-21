import styled from "@emotion/styled"
import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Layout } from "./Layout"
import { useGiphy } from "./useGiphy"
import { debounce } from "lodash"

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

export function Trending() {
  const [search, setSearch] = useState("")
  const [inputValue, setInputValue] = useState("")

  const url = search.length ? "/gifs/search" : "/gifs/trending"
  const { data, isLoading, error } = useGiphy(url, {
    limit: 10,
    q: search,
  })

  const callback = useCallback(
    debounce((value) => {
      setSearch(value)
    }, 400),
    []
  )

  function renderContent() {
    if (isLoading) {
      return <p>Loading...</p>
    }

    if (error) {
      console.error(error)
      return <p>Error fetching gifs</p>
    }

    return (
      <Ul>
        {data.data.map((gif) => {
          return (
            <li key={gif.id}>
              <Link to={`/gif/${gif.id}`}>
                <img src={gif.images.downsized.url} alt={gif.title} />
              </Link>
            </li>
          )
        })}
      </Ul>
    )
  }

  return (
    <Layout>
      <main>
        <h1>Trending GIFs:</h1>
        <form>
          <label htmlFor="search">Search:</label>
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              callback(e.target.value)
            }}
            type="text"
            name="search"
            id="search"
          />
        </form>
        {renderContent()}
      </main>
    </Layout>
  )
}
