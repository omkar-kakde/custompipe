import { Pipe, PipeTransform } from '@angular/core';
import { Iplaers } from '../model/data';

@Pipe({
  name: 'filterplayers'
})
export class FilterplayersPipe implements PipeTransform {

  transform(value: Iplaers[], serchtext : string): Iplaers[] {
     if(!value){
      return []
     }
     if(!serchtext){
      return value
     }
      let filesArray= value.filter(plyobj => {
         return plyobj.country.toLowerCase().startsWith(serchtext)
      })
  return filesArray
  }

}
