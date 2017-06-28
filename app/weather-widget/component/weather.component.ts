import { WeatherService } from './../service/weather.service';
import { Component } from '@angular/core';
@Component({
    moduleId : module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls:[
        'weather.component.css'
    ],
    providers: [WeatherService]
})

export class WeatherComponent{
    constructor(private service: WeatherService){

    }
}