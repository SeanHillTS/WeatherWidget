import { TempUnitPipe } from './weather-widget/pipe/temp-unit.pipe.1';
import { SpeedUnitPipe } from './weather-widget/pipe/speed-unit.pipe';
import { WeatherComponent } from './weather-widget/component/weather.component';
import { AppComponent } from './app.component';
import {JsonpModule, HttpModule} from '@angular/http'

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

//The decorator
@NgModule({
    imports:[ BrowserModule,JsonpModule, HttpModule ],
    //Declarations are self-defined components in ypur app
    declarations: [ AppComponent, WeatherComponent, SpeedUnitPipe, TempUnitPipe ],
    //Bootstrap to the root
    bootstrap: [AppComponent]
})

export class AppModule{};

