import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {

  


  return (
    <Router>
      <div className="App">
        <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
