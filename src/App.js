 
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./pages/home";
import GuestRoute from "./components/guestRoute";
import Login from "./pages/login";
import Register from "./pages/register";
function App() {
  return (
    <Router>
               
    <Switch>
                  
      <Route exact path='/' element={<ProtectedRoute>
        <Home />
      </ProtectedRoute>} />

      <Route exact path='/login' element={<GuestRoute>
          <Login />
        </GuestRoute>} />
        <Route exact path='/register' element={<GuestRoute>
          <Register />
        </GuestRoute>} />
    </Switch>
    </Router>
  );
}

export default App;
