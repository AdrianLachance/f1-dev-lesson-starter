import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public top3: any = [
    {
      "name": 'Red bull',
      "points": 504,
    }, 
  
    {
      "name": 'Williams',
      "points": 439
    },

    {
      "name": 'Ferrari',
      "points": 315
    }
  ];

  public bot7: any = [
    {
      "name": 'mercedes',
      "points": 273,
    }, 
  
    {
      "name": 'mclaren',
      "points": 217
    },

    {
      "name": 'toro rosso',
      "points": 121
    },

    {
      "name": 'renault',
      "points": 106
    },

    {
      "name": 'haas',
      "points": 61
    },

    {
      "name": 'alfa romeo',
      "points": 49
    },

    {
      "name": 'racing point',
      "points": 36
    },
  ];

}
