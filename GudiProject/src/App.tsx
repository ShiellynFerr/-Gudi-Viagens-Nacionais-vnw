import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ImageHover from "./components/ImageHover";
import SectionAbout from "./components/Section-about";
import SectionBenefit from "./components/Section-benefit";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Home />
        {/* <SectionAbout />
         <ImageHover/>
         <SectionBenefit /> */}
      </div>
    </>
  );
}

export default App;
