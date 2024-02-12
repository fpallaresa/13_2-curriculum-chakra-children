import "./App.css";
import Knowledge from "./components/Knowledge/Knowledge";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  
  
  return (

    <div className="App">
      <Header></Header>
      <Contact></Contact>
      <About></About>
      <Projects></Projects>
      <Knowledge></Knowledge>
    </div>
    
  );
}

export default App;
