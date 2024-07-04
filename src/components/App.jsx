import styled from "styled-components";

import Header from "./Header/Header";
import { useRef, useState } from "react";
import Modal from "./Modal/Modal";
import ModalMenu from "./ModalMenu/ModalMenu";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";
import { Toaster } from "react-hot-toast";



const Container = styled.div`
  padding: 36px 20px 24px 20px;
  @media (min-width: 768px) {
    padding: 36px 30px 40px 30px
;  }
 @media (min-width: 1280px) {
    padding: 24px 100px 40px 100px
;  }
`;

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const mainRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToMain = () => {
    mainRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <Header setModalOpen={setModalOpen} modalOpen={modalOpen} scrollToContact={scrollToContact} />
      <MainContent mainRef={mainRef} scrollToContact={scrollToContact} contactRef={contactRef} />
      <Footer scrollToMain={scrollToMain} />
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <ModalMenu />
        </Modal>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
