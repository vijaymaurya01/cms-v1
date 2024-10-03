import BlogList from "../BlogList/BlogList";
import ContactUs from "../contactUs/ContactUs";
import Feature from "../Feature/Feature";
import Newslatter from "../Newsletter/Newslatter";
import Banner from "./banner";
import Jumborton from "./jumborton";
import MainBanner from "./MainBanner";
import Team from "./team";
import Trends from "./trends";
import Image from "next/image";

export default function Homepage() {
  return (
    <div>
      <MainBanner/>
      {/* <Jumborton /> */}
      <Banner />
      <Feature/>
      <BlogList/>
      <Trends />
      <Team />
      <Newslatter/>
      <ContactUs />
    </div>
  );
}
