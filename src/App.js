import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDescription from "./pages/MovieDescription";
import Bookmark from "./pages/Bookmark";

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          
          <Route path="/movies/:id" render={() => <MovieDescription />} />
          <Route path="/favorites" exact component={Bookmark} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
