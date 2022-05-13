import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/LandingPage.css"
import Intro from "./components/Intro" ;
import Trending from "./components/Trending" ;
import Horor from "./components/Horor" ;

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
      <NavigationBar />
      <Intro />
      </div>
      {/*end*/}

      { /* Trending part */}
      <div className="trending">
        <Trending />
      </div>

      <diV className="horor">
        <Horor />
      </diV>
    </div>
  );
}

export default App;
