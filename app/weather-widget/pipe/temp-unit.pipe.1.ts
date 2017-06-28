import{Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'tempUnit'
})

export class TempUnitPipe implements PipeTransform{
    transform(temp: number, unitType: string){
        if(unitType == 'celsius'){
            temp = (temp -32) * 0.5556;
        }

        return temp;
        }
    }
}