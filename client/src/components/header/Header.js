import './Header.css'

const Header = () => {

    return(
        <>
        <section className="section-1">
        <div className='hsec1-div1'>
        <h1 className="sec-1-div-1-h2">
            Online  Service<br></br> Finder
        </h1>
        <p className="sec-1-div-1-p">
        Find the right service, right now by connecting <br></br> with top-rated professionals in your area.
        </p>
        <div className="buttons"> <a href="/FindService"><button >Find a Worker</button></a> <a href="/BecomeProvider"><button className="button2"> Become a Worker </button></a></div>
        </div>
        <div className='hsec1-div2'>
            <img className='sec2-img' src='https://aonetheme.com/latest-service-finder/wp-content/uploads/2020/05/cleaning-1-2.png'></img>
        </div>
    </section>
        </>
    );
}

export default Header;