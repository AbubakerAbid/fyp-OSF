import Navbar from "./../../components/navbar/Navbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import Services from './../../components/services/Services';
import Sdata from './../../components/services/Sdata';
import './find-service.css'
const FindService = () =>{
    return (
        <>
       <Navbar />
       <Breadcrumb title="Find a Service" />
       <h2 className='Find-Service-Header'>Select Service You Need</h2>
    

        

       {Sdata.map((val) => {
        return (
            <Services 
                imgsrc={val.imgscr} 
                sname={val.sname} 
                link={val.link}
            />
            
        );
    })}

       <Footer />
        </>
    );
}

export default FindService;