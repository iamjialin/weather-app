import './App.css';
import WeatherCard from 'components/WeatherCard';
import BackgroundImage from 'components/BackgroundImage';
import backgroundImage from './assets/backgrounds/bg.png'


function App() {
  return(

    <BackgroundImage className={"bg-no-repeat bg-right-bottom w-[1440px] mx-auto py-36 px-28"} src={backgroundImage.src} linearGradient={"linear-gradient(to bottom right, #89A2F0, #6558DF)"} >
      <WeatherCard />
    </BackgroundImage>

  )
}

export default App;
