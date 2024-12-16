import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";



const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <div className="flex flex-col items-center justify-center">
        <p className="text-center">And finally a small touch... maybe you want to have a look at the gift i made for you last year...</p>
        <p>Click on 👉<a href="https://nidhiodabday.tiiny.site/" target="_blank">nidhiodabday1</a></p>

        </div>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;