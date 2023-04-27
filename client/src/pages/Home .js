import './Home.css'
import Navbar from '../components/navbar/Navbar';
import Header from './../components/header/Header';
import Footer from './../components/footer/Footer';
import Services from './../components/services/Services';
import Aboutus from './../components/aboutus/Aboutus';
import Howworks from './../components/how-works/Howworks';
import Joinus from './../components/join-us/Joinus';
import Sdata from './../components/services/Sdata';
import Tdata from './../components/services/trending';

const Home = () =>{
    return (
        <>
       <Navbar />
       <Header />
       <Aboutus />
       <h2 className='Service-Headers'>Most Demanding Services</h2>
       {Sdata.map((val) => {
        return (
            <Services 
                imgsrc={val.imgscr} 
                sname={val.sname} 
                link={val.link}
            />
        );
    })}
       
       <h2 className='Service-Headers'>Trending Services</h2>
       {Tdata.map((val) => {
        return (
            <Services 
                imgsrc={val.imgscr} 
                sname={val.sname} 
                link={val.link}
            />
        );
    })}
    <Howworks />
       <Joinus />
       <Footer />
       
        </>
    );
}

export default Home;