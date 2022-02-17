import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  _rating: number;
  stars: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set rating(rating: number){
    this._rating = rating;
    let j = Math.floor(this._rating);
    console.log("j = " + j);
    for(let i=0;i<j;i++){
      this.stars[i] = i;
    }
  }

}
