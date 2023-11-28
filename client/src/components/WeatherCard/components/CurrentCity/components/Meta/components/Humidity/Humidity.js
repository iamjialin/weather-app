import icon from 'assets/meta-icons/humidity.svg'

const Humidity =({humidity})=>{
    return(
        <div>
            <img className="mx-auto" src={icon} alt="humidity icon" />
            <p>{humidity}%</p>
        </div>
    )
}

export default Humidity;