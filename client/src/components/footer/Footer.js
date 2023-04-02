import './Footer.css'
const Footer = () => {

    return(
        <>
        <section className="dfooter" >
        <div  className="dfooteru">
            <div className="footer-sec">
                <p className="footer-sec-hp"> <a className="footer-sec-h">Company</a></p>
                <p className="footer-sec-pp"> <a href="#" className="footer-sec-p">About Us</a></p>
                <p className="footer-sec-pp"> <a href="#" className="footer-sec-p">Leadership</a></p>
                <p className="footer-sec-pp"> <a href="#" className="footer-sec-p">Press Room</a>
                </p>
               

            </div>
            <div className="footer-sec">
                <p className="footer-sec-hp"><a className="footer-sec-h">Service & Support</a></p>
                <p className="footer-sec-pp"> <a href="#" className="footer-sec-p">Resources</a>
                </p>
                <p className="footer-sec-pp"> <a href="#" className="footer-sec-p">Contact Us</a>
                </p>
                <p className="footer-sec-pp"> <a href="#" className="footer-sec-p">30-Day Evaluation Period</a></p>
                
                

            </div>
            <div className="footer-sec">
                <p className="footer-sec-hp"> <a className="footer-sec-h">Community</a></p>
                <p className="footer-sec-pp"> <a href="#" className="footer-sec-p">Blog</a></p>
                <p className="footer-sec-pp"> <a href="#" className="footer-sec-p">Refer a
                        Friend</a></p>
                <p className="footer-sec-pp"> <a href="#" className="footer-sec-p">OSF for
                        Everyone</a></p>

            </div>
            <div className="footer-sec">
                <p className="footer-sec-hp"> <a className="footer-sec-h">Contact</a></p>
                <p className="footer-sec-pp"> <a className="footer-sec-p"> Online Service Finder</a></p>
                <p className="footer-sec-pp"> <a className="footer-sec-p"><strong> Email: </strong> info@osfpk.com</a></p>
                <p className="footer-sec-pp"> <a className="footer-sec-p"><strong>Sales: </strong> +92 334 509 3027</a></p>
            </div>
        </div>
        <div className="footerl">
            <a className="footer-sec-pl"> © 2022 OSF Pakistan </a>
            <p><a href=" #" className="footer-sec-pl"> Terms and Conditions </a>
            </p>
            <p> <a href=" #" className="footer-sec-pl"> Privacy Policy </a></p>
            <p> <a href="#" className="footer-sec-pl"> EULA</a></p>
        </div>

    </section>
        </>
    );
}

export default Footer;