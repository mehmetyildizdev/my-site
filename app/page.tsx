import Image from "next/image";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Current from "./components/Current";
import Me from "./components/Me";

export default function Home() {
  return (
    <section>
      <Main />
      <Me />
      <Current />
    </section>
  );
}
