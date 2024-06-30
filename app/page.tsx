import Image from "next/image";
// import Home from "./pages/Home";
import About from "./pages/About"
// import Services from "./pages/Services";
import Header from "./header";
import "./page.css"

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Header/>
      {/* <Home/> */}
      <About/>
      {/* <Services/> */}
    </main>
  );
}
