import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
