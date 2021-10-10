import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthPorvider from './Context/AuthPorvider';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <div className="container">
      <AuthPorvider>
      <BrowserRouter>
     <Header></Header>
      <Switch>
    <Route exact path='/'>
        <Home></Home>
    </Route>
    <Route  path='/home'>
        <Home></Home>
    </Route>
    <Route  path='/login'>
        <Login></Login>
    </Route>
    <Route  path='/register'>
        <Register></Register>
    </Route>
    <PrivateRoute  path='/shipping'>
       <Shipping></Shipping>
    </PrivateRoute>
    <PrivateRoute  path='/placeorder'>
       <PlaceOrder></PlaceOrder>
    </PrivateRoute>
      </Switch>
      
      </BrowserRouter>

      </AuthPorvider>
      </div>
    </div>
  );
}

export default App;
