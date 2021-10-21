import logo from "./logo.svg"
import "./App.css"
import { useGiphy } from "./useGiphy"
import { Route, Switch } from "react-router"
import { Trending } from "./Trending"
import { Gif } from "./Gif"

function App() {
  return (
    <Switch>
      <Route path="/gif/:id">
        <Gif />
      </Route>
      <Route path="/" exact>
        <Trending />
      </Route>
      <Route>
        <h2>404 Not Found</h2>
      </Route>
    </Switch>
  )
}

export default App
