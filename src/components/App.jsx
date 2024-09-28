
import Header from "../layout/Header/Header";
import { useState } from "react";
import Modal from "./ui/Modal/Modal";
import ModalMenu from "./common/ModalMenu/ModalMenu";
import Footer from "../layout/Footer/Footer";
import { Toaster } from "react-hot-toast";
import About from "sections/About/About";
import Electricity from "sections/Electricity/Electricity";
import Cases from "sections/Cases/Cases";
import Faq from "sections/Faq/Faq";
import ContactUs from "sections/ContactUs/ContactUs";
import Hero from "sections/Hero/Hero";


export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (<>

    <Header setModalOpen={setModalOpen} modalOpen={modalOpen} />
    <main>
      <Hero />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <ContactUs />
    </main>

    <Footer />
    {modalOpen && (
      <Modal onClose={() => setModalOpen(false)}>
        <ModalMenu onClose={() => setModalOpen(false)} />
      </Modal>
    )}
    <Toaster position="top-right" reverseOrder={false} />
  </>
  );
};
