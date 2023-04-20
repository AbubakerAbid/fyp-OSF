import Navbar from "../../components/navbar/Navbar";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import Order from "./../../components/order/order";

const Orders = () =>{
    return (
        <>
       <Navbar />
       <Breadcrumb title="My Orders" />
       <Order />
       <Footer />
        </>
    );
}

export default Orders;