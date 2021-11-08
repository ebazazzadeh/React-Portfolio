import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contacts from './components/Contacts';

function App() {
  return (
    // in React we can return one container so we need one empty container to put every container on it
    <>
      <Navbar />
      {/* <Header/> */}
      <AboutMe />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
