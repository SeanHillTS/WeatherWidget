import { Weather } from './../model/weather';
import { WeatherService } from './../service/weather.service';
import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: [
        'weather.component.css'
    ],
    providers: [WeatherService]
})

export class WeatherComponent {
    pos: Position;
    weatherData = new Weather(null, null, null, null, null);

    constructor(private service: WeatherService) {
        this.service.getCurrentLocation().subscribe(pos => {
            this.pos = pos;

            this.service.getCurrentWeather(pos.coords.latitude, pos.coords.longitude)
                .subscribe(
                weather => {
                    console.log(weather);
                },
                err => {
                    console.error(err);
                });

        },
            err => {
                console.error(err);
            });


    }
}