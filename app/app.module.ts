import { WeatherComponent } from './weather-widget/component/weather.component';
import { AppComponent } from './app.component';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

//The decorator
@NgModule({
    imports:[ BrowserModule ],
    //Declarations are self-defined components in ypur app
    declarations: [ AppComponent, WeatherComponent ],
    //Bootstrap to the root
    bootstrap: [AppComponent]
})

export class AppModule{};