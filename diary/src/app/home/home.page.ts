import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data = [
    {
    name: "Product 1",
    description: "Description 1"
    },
    {
      name: "Product2",
      description: "Description2"
      }
    ];
  constructor() {}

  ngOnInit() {}

  test(event:any){
    this.data.push(event)
  }
}
