import { Router } from "./Router";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetch_news } from "./redux/actions/createActions";

function App() {
  return (
    <div className="pages-container">
      <Router />
    </div>
  );
}

export default App;
