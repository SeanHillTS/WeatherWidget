import{Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'tempUnit'
})

export class TempUnitPipe implements PipeTransform{
    transform(tempUnit: number, unitType: string){
        if(unitType == 'celcius'){
            tempUnit = (tempUnit -32) * 0.5556;
        }

        return tempUnit;
        }
    }
}