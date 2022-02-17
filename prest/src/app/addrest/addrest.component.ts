import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { restItem } from '../restItem';

@Component({
  selector: 'app-addrest',
  templateUrl: './addrest.component.html',
  styleUrls: ['./addrest.component.css']
})

export class AddrestComponent implements OnInit {

  restaurant:restItem = new restItem();
  hasSubmit = false;
  responseText="";
  selectedImage :File;

  constructor(private datarestu:DataService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.hasSubmit = true;
   // const fd =new FormData();
    //fd.append('image',this.selectedImage,this.selectedImage.name)
   // console.log(JSON.stringify(this.restaurant));
   this.datarestu.addRestu(this.restaurant).subscribe(
    (data)=> this.responseText = JSON.stringify(data),
    (error)=> this.responseText=error
   )
  }

  /*onSelectedImage(event:any) {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage)
  }*/

  onFileSelected(event:any){
    this.selectedImage = <File>event.target.files[0];
    
  }

}
