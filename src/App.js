import './App.css';
import Glasses from './Component/BaiTap2/Glasses';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Header from './Pages/Header/Header';
import BaiTap1 from "./Component/DivComponent/BaiTap1";
import BaiTap1Home from "./Component/BaiTap1/BaiTap1Home";
import ShowRoomCard from "./Component/ShowRoomcCar/ShowRoomCard";
import Parent from "./Component/props/Parent";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/baitap2" component={Glasses}/>
        <Route path="/baitap1home" component={BaiTap1Home}/>
        <Route path="/baitap1" component={BaiTap1}/>
        <Route path="/showroomcard" component={ShowRoomCard}/>
        <Route path="/parent" component={Parent}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
