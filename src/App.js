import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import BlogDetails from './BlogDetails'
import Notfound from './Notfound'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//root component, all other components go here

function App() {
  return (

    //router component for handling ract side rendering
    <Router>
          <div className="App">
          <Navbar></Navbar>
          <div className="content">

             {/*switch component to allow switching components inside */}
            <Switch>
              <Route exact path = "/">
                <Home></Home>
              </Route>

              <Route exact path = "/create">
                  <Create>

                  </Create>
              </Route>

              <Route exact path = "/blogs/:id">
                  <BlogDetails>

                  </BlogDetails>
              </Route>

              <Route>
                <Notfound>

                </Notfound>
              </Route>
            </Switch>
          </div>
        </div>

    </Router>


  );
}

export default App;