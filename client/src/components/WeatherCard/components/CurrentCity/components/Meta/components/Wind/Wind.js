import icon from 'assets/meta-icons/wind_speed.svg'

const Wind = ({windSpeed})=>{
    return (
        <div>
            <img className="mx-auto" src={icon} alt="wind icon" />
            <p>{windSpeed}km/h</p>
        </div>
    )
}

export default Wind;