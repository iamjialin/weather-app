import './App.css';
import WeatherCard from 'components/WeatherCard';
import BackgroundImage from 'components/BackgroundImage';
import backgroundImage from './assets/backgrounds/background.png'


function App() {
  return(

    <BackgroundImage className={"bg-no-repeat bg-right-bottom w-[1440px] mx-auto h-[900px] p-28"} src={backgroundImage} linearGradient={"linear-gradient(to bottom right, #89A2F0, #6558DF)"} >
      <WeatherCard />
    </BackgroundImage>

  )
}

export default App;
