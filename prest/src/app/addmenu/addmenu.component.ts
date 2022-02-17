import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {

  menuItem:MenuItem = new MenuItem();
  hasSubmit = false;
  responseText= "";

  constructor(private datarestu:DataService) { }

  ngOnInit(): void {
  }

  /*onSubmit(){
    this.hasSubmit = true;
    console.log(JSON.stringify(this.menuItem));
  }
*/
    onSubmit(){
      this.hasSubmit = true;

      this.datarestu.addMenu(this.menuItem).subscribe(
        (data)=> this.responseText = JSON.stringify(data),
        (error)=> this.responseText=error
        
      )
    }

}
