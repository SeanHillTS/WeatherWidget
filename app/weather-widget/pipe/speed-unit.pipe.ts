import{Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'speedUnit'
})

export class SpeedUnitPipe implements PipeTransform{
    transform(speed: number, unitType: string){
        if(unitType == 'mph'){
            speed *= 1.6;
        }

        return speed + unitType;
        }
    }
}