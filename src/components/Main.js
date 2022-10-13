import About from '../components/About';
import Services from '../components/Services';
import News from '../components/News';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

function Main() {
  return (
    <>
      <main>
        <Services />
        <About />
        <Gallery />
        <News />
        <Contact />
      </main>
    </>
  );
}
export default Main;
