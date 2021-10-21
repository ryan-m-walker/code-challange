import { useFetch } from "./useFetch"
import { GIPHPY_API_URL, API_KEY } from "./constants"

export function useGiphy(path, args = {}) {
  const mergedArgs = {
    ...args,
    api_key: API_KEY,
  }

  const queryString = Object.entries(mergedArgs).reduce((acc, [key, value]) => {
    acc += `${key}=${value}&`
    return acc
  }, "?")

  return useFetch(`${GIPHPY_API_URL}${path}${queryString}`)
}
