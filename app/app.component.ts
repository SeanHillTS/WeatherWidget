import {
    Component
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<div class="container">
                    <div class="col-xs-3">
                        <weather-widget></weather-widget>
                    </div>
                </div>`,
    styles: [`
    .container{
        padding-top:5rem;
    }
    `]
})
export class AppComponent {}