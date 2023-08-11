import "./App.css";
import Main from "./Components/Main";
import Philosophy from "./Components/Philosophy";
import Header from "./Components/Header";
import Quote from "./Components/Quote";

export default function Home() {
  return (
    <>
      <Header className="container" />
      <Philosophy />
      <Main />
      <Quote />
    </>
  );
}
