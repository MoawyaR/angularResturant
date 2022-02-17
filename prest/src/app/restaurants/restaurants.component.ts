import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { restItem } from '../restItem';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  
  // _restu : restItem;

  restitem:any =[];
  errorMessage:string;
  constructor(private datarestu:DataService) { }

  ngOnInit(){
   // this.restitem = this.datarestu.getRestu();
   this.datarestu.getRestuSromServer().subscribe(
    (restu:any)=> this.restitem=restu,
    (error: any) => this.errorMessage = error
   )
   }

  /*@Input()
  set restu(restu:restItem){
    this._restu = restu;
  }*/

  
}