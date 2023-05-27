import Navbar from "../../components/navbar/Navbar";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import Aboutus from "./../../components/aboutus/Aboutus";
import Howworks from "./../../components/how-works/Howworks";
import Leaders from "../../components/leaders/Leaders";
const About = () =>{
    return (
        <>
       <Navbar />
       <Breadcrumb title="About Us" />
       <Aboutus />
       <Howworks />
       <Leaders />
       <Footer />
        </>
    );
}

export default About;