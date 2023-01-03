import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ImageHover from "./components/ImageHover";
import SectionAbout from "./components/Section-about";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Home />
        <SectionAbout />
         <ImageHover/>
      </div>
    </>
  );
}

export default App;
