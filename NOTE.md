# STEPS

## Step 1:

### Break the UI into a component hierarchy: Responsibility-Based Componentization

- App
    - WeatherCard
        - CurrentCity
            - BackgroundImage
            - Date
            - Name
            - Temperature
            - TemperatureRange
            - WeatherIcon
            - Meta
                - Humidity
                - Wind
                - AirQuality
                - Somatosensory
        - Forecast
            - DaysOfWeek[]
                - Name
                - Date
                - WeatherIcon
                - TemperatureRange
        - SearchBar
            - Input
            - Button
        - OtherCities
            - Cities[]
                - BackgroundImage
                - WeatherIcon
                - Name
                - TemperatureRange
    - BackgroundImage
### Look for reptitive components

- WeatherIcon
- TemperatureRange
- Name
- Date
- BackgroundImage

### Global Assets

- font
- background image
- weather icons

## Step 2: Build a static version in React

### Reusable components
### Current City
### Forecast
### Search Bar
### Other Cities

## Step 3 & 4: Identify the minimal (but complete) representation of UI state and where it should live

### Every UI change should trigger a state change
### Every API call should have its useEffect function
### Identify where each piece of state lives and lift it up to the closest common ancestor
### Use debug button to check UI changes when needed