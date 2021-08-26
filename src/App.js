import { Navbar } from "./componets/Navbar"
import {  BrowserRouter ,  Switch,  Route} from "react-router-dom"
import { Claims } from "./componets/Claims";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
          <Route path="/claims">
            <Claims />
          </Route>
          
      </Switch>
    </BrowserRouter>
  )
}

export default App
