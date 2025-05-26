import { useEffect, useState } from "react";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

import Footer from "../Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <ModalWithForm />
      <Footer />
      <ItemModal />
    </div>
  );
}

export default App;
