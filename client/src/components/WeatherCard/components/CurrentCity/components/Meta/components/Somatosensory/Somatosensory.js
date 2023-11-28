import icon from 'assets/meta-icons/Somatosensory_temperature.svg'

const Somatosensory = ({somatosensory})=>{
    return(
        <div>
            <img className="mx-auto" src={icon} alt="Somatosensory icon" />
            <p>{somatosensory}&deg;</p>
        </div>
    )
}

export default Somatosensory;