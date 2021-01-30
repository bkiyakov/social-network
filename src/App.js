import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MenuBar from "./Components/MenuBar/MenuBar";
import Profile from "./Components/Profile/Profile";
import Messenger from './Components/Messenger/Messenger'
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MenuBar />
        <div className="content">
          <Route exact path={["/", "/profile"]} component={Profile}/>
          <Route path="/messenger" component={Messenger}/>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
