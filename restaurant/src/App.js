import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* import { useState } from 'react'; */

//component
import Navbar from "./components/Navbar/Navbar";
import CartItem from "./components/Screens/cartPage/CartPage";
import HomeScreen from "./components/homeScreen/HomeScreen";
import FoodScreen from "./components/Screens/foodPage/FoodPage";

function App() {

  /* const [toggle, setToggle] = useState(false); */

  return (
    <div className="App">
      <Router>
        <Navbar /* click={() => setToggle(true)} */ />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={FoodScreen} />
          <Route exact path="/cart" component={CartItem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;