import BlogList from "../BlogList/BlogList";
import ContactUs from "../contactUs/ContactUs";
import Feature from "../Feature/Feature";
import Login from "../Login/Login";
import Newslatter from "../Newsletter/Newslatter";
import SignUpForm from "../Signup/SignUpForm";
import Banner from "./banner";
import MainBanner from "./MainBanner";
import Team from "./team";
import Trends from "./trends";

export default function Homepage() {
  return (
    <div>
      <MainBanner/>
      <Banner />
      <Feature/>
      <BlogList/>
      <Trends />
      <Team />
      <Newslatter/>
      <ContactUs />
      {/* <Login/> */}
      {/* <SignUpForm/> */}
    </div>
  );
}
