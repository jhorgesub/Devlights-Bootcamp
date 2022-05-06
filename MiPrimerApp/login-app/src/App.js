import './App.css';
import { Login } from './components/Login/Login';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Login />
  );
}

export default App;
