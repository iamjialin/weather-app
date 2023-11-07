import icon from 'assets/meta-icons/humidity.svg'

const Humidity =()=>{
    return(
        <div>
            <img className="mx-auto" src={icon} alt="humidity icon" />
            <p>75%</p>
        </div>
    )
}

export default Humidity;