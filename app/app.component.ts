import {Component} from '@angular/core';

 @Component({
     moduleId : module.id,
     selector: 'my-app',
     template: `<div class="container">
                    <div class="col-xs-3">
                        <weather-widget></weather-widget>
                    </div>
                </div>`
 })
 export class AppComponent{}