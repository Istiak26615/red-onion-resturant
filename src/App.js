import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from './Component/Banner/Banner';
import Foods from './Component/Foods/Foods';
import Footer from './Component/Footer/Footer';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';
import Breakfast from './Component/Breakfast/Breakfast';
import FoodDetails from './Component/FoodDetails/FoodDetails';




function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
             
             <Banner></Banner>
             <Foods></Foods>
             <Footer></Footer>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/details/:id">
            <FoodDetails></FoodDetails>
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
