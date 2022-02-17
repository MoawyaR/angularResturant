import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
menu :any=[]
errorMessage:string;
  constructor(private datarestu:DataService) { }

  ngOnInit(): void {
   // this.menu = this.datarestu.getmen();
   this.datarestu.getMenuSromServer().subscribe(
     (menu:any)=> this.menu=menu,
     (error: any) => this.errorMessage = error
     
   )
  }

}
