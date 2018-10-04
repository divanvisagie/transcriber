import * as React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "../css/App.css"
import ReactGA from "react-ga"
import Transcript from "./Transcript"
import Upload from "./Upload"
import createHistory from "history/createBrowserHistory"
import "@material/react-top-app-bar/dist/top-app-bar.css"
import "@material/react-material-icon/dist/material-icon.css"
import MaterialIcon from "@material/react-material-icon"
import TopAppBar from "@material/react-top-app-bar"

ReactGA.initialize(process.env.GOOGLE_ANALYTICS_PROPERTY_ID, {
  debug: process.env.NODE_ENV === "development",
})

const history = createHistory()
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
})

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopAppBar title="Transkribering" navigationIcon={<MaterialIcon icon="menu" onClick={() => console.log("click")} />} actionItems={[<MaterialIcon key="item" icon="bookmark" />]} />
          <Switch>
            <Route exact={true} path="/" component={Upload} />
            <Route path="/transcripts/:id" component={Transcript} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
