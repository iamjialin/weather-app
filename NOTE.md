# STEPS

## Step 1:

### Responsibility-Based Componentization

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

主页面背景图给的是错的啊啊啊啊啊