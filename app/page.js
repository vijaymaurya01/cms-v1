import Image from "next/image";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Banner/header";
import Footer from "./components/Footer/footer";
import Homepage from "./components/Homepage/page";
import UserNavbar from "./components/Navbar/usernavbar";
import Testnavbar from "./components/Navbar/testnavbar";
import Nav2 from "./components/Navbar/Nav2";


export default function Home() {
  return (
   <div >
   {/* <Navbar/> */}
   <Testnavbar/>
       {/* <Header/> */}

    {/* <Nav2/> */}
    <main className="container mx-auto p-6">
        <Homepage/>
      </main>
    <Footer/>
   </div>
  );
}
