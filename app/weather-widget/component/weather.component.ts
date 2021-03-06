import { Weather } from './../model/weather';
import { WeatherService } from './../service/weather.service';
import { Component, OnInit } from '@angular/core';

declare var Skycons: any;

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: [
        'weather.component.css'
    ],
    providers: [WeatherService]
})

export class WeatherComponent implements OnInit {
    pos: Position;
    weatherData = new Weather(null, null, null, null, null);
    currentSpeedUnit = 'kph';
    currentTempUnit = 'fahrenheit';
    currentLocation:String;
    icons = new Skycons({"color": "#FFF"});
    constructor(private service: WeatherService) {

    }

    ngOnInit() {
        this.getCurrentLocation();
    }

    getCurrentLocation() {
        this.service.getCurrentLocation().subscribe(pos => {
            this.pos = pos;
            this.getCurrentWeather();
            this.getLocationName();
        },
            err => {
                console.error(err);
            });
    }

    getCurrentWeather() {
        this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude)
            .subscribe(
            weather => {
                this.weatherData.temp = weather["currently"]["temperature"];
                this.weatherData.summary = weather["currently"]["summary"];
                this.weatherData.wind = weather["currently"]["windSpeed"];
                this.weatherData.humidity = weather["currently"]["humidity"];
                this.weatherData.icon = weather["currently"]["icon"];
                this.setIcon();
            },
            err => {
                console.error(err);
            });
    }

    getLocationName(){
        this.service.getLocationName(this.pos.coords.latitude, this.pos.coords.longitude)
        .subscribe(location =>{
            this.currentLocation = location["results"][1]["formatted_address"];
        },
        err => {
            console.error(err);
        });
    }

    toggleUnits(){
        this.toggleSpeedUnit();
        this.toggleTempUnit();
    }

    toggleSpeedUnit(){
        switch(this.currentSpeedUnit){
            case "kph":
            this.currentSpeedUnit = "mph";
            break;
            case "mph":
            this.currentSpeedUnit = "kph";
            break;
        }
    }

    toggleTempUnit(){
        switch(this.currentTempUnit){
            case "fahrenheit":
            this.currentTempUnit = "celsius";
            break;
            case "celsius":
            this.currentTempUnit = "fahrenheit";
            break;
        }
    }

    setIcon(){
        this.icons.add("icon", this.weatherData.icon);
        this.icons.play();
    }
}