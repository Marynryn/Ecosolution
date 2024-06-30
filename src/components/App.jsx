import styled from "styled-components";

import Header from "./Header/Header";
import { useState } from "react";
import Modal from "./Modal/Modal";



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
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <Container>
      <Header setModalOpen={setModalOpen} modalOpen={modalOpen} />
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          {/* <ModalMenu /> */}
        </Modal>
      )}
    </Container>
  );
};
