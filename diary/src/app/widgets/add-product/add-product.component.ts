import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  @Output() addItemToList = new EventEmitter<any>()
  constructor() { }
  test=3;
  ngOnInit() {}
  addItem(){
    
    this.addItemToList.emit({name:"Product"+this.test, description:"Description"+this.test});
    this.test++;
  }
}
