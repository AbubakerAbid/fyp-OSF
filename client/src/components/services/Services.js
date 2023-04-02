import './Services.css'
const Services = (props) => {
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="Service-Pic" className="card__img"></img>
                <div className="card__info">
                    <h3 className="card__title">{props.sname}</h3>
                    <a href={props.link}>
                        <button className='service-btn'>Find Now</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Services;