import './Footer.css'
const Footer = () => {

    return(
        <>
        <section className="dfooter" >
        <div  className="dfooteru">
            <div className="footer-sec">
                <p className="footer-sec-hp"> <a className="footer-sec-h">Company</a></p>
                <p className="footer-sec-pp"> <a href="/About" className="footer-sec-p">About Us</a></p>
                <p className="footer-sec-pp"> <a href="/About" className="footer-sec-p">Leadership</a></p>
                
               

            </div>
            <div className="footer-sec">
                <p className="footer-sec-hp"><a className="footer-sec-h">Login</a></p>
                <p className="footer-sec-pp"> <a href="/workerlogin" className="footer-sec-p">Worker Login</a>
                </p>
                <p className="footer-sec-pp"> <a href="/admin" className="footer-sec-p">Admin Login</a>
                </p>
                
                
                

            </div>
            <div className="footer-sec">
                <p className="footer-sec-hp"> <a className="footer-sec-h">Community</a></p>
                <p className="footer-sec-pp"> <a href="#" className="footer-sec-p">Blog</a></p>
                
                <p className="footer-sec-pp"> <a href="/ContactUs" className="footer-sec-p">Complain / Feedback
                        </a></p>

            </div>
            <div className="footer-sec">
                <p className="footer-sec-hp"> <a className="footer-sec-h">Contact</a></p>
                <p className="footer-sec-pp"> <a className="footer-sec-p"> Online Service Finder</a></p>
                <p className="footer-sec-pp"> <a className="footer-sec-p"><strong> Email: </strong> email@osfpk.com</a></p>
                
            </div>
        </div>
        <div className="footerl">
            <a className="footer-sec-pl"> © 2023 OSF Pakistan </a>
            <p><a href=" #" className="footer-sec-pl"> All Rights Reserved </a>
            </p>
            
            
        </div>

    </section>
        </>
    );
}

export default Footer;