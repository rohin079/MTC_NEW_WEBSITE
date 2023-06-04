import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 20,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <main>
        <div className="container">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
