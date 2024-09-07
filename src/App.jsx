import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Collections from "./components/Collections";
import Products from "./components/Products";
import Middle from "./components/MidlleAnonce";
import OurBest from "./components/OurBest";
import MailList from "./components/MailList";
import Fotter from "./components/Fotter";
import Service from "./components/Service";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Loading />
      <Navigation />
      <Header />
      <Collections />

      <Products />
      <Middle />

      <OurBest />
      <Service />

      <Fotter />
    </>
  );
}

export default App;
