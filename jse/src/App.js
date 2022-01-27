import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import HomePage from "./components/HomePage";
import Favourites from "./components/Favourites";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
