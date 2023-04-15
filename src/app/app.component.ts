import { Component } from '@angular/core';
import { Ifiles, Iplaers } from './shared/model/data';
import { cricketers } from './shared/const/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title =  

  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro eum saepe nam nobis, adipisci autem. Iure minus tempora excepturi repellendus!"

    searchByValue ! : string;
    filesArray : Array<Ifiles> =[
    {
        name:  "form-16",
        size : 22555626,
        type: 'pdf'

    },{
      name:  "salary slips",
      size :  89755225 ,
      type: 'pdf'

  },
  {
    name:  "TDC",
    size : 89755225,
    type: 'pdf'
  }


]

 playersArray : Iplaers[]  = cricketers;

}
