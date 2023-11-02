import './App.css';
import WeatherCard from 'components/WeatherCard';
import BackgroundImage from 'components/BackgroundImage';
import backgroundImage from './assets/backgrounds/background.png'


function App() {
  return(

    <BackgroundImage className={"bg-no-repeat bg-cover bg-center flex items-center justify-center h-screen"} src={backgroundImage}>
      <WeatherCard />
    </BackgroundImage>

  )
}

export default App;
