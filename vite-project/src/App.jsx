// app.jsx
import "./App.css";
import Navigator from "./routes/Routes";
import { Navbar } from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
     <Navbar/>
    <Navigator/>
    </div>
  );
}

export default App;
