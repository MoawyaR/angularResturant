import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from './menu-item';
import { restItem } from './restItem';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string="http://localhost:4200/api/menu";
  urlrestu:string="http://localhost:4200/api/restu";

  
  
 /* restuItem = [

    {title:"rayan",cuisines:"null",lat:200,lng:305,image:"assets/images/ryan.jpg",rate:7.5},
    {title:"dayaa",cuisines:"null",lat:200,lng:305,image:"assets/images/dyaa.jpg",rate:7.5},
    {title:"OJ",cuisines:"null",lat:200,lng:305,image:"assets/images/oj.jpg",rate:7.5},
    {title:"al-am saleh",cuisines:"null",lat:200,lng:305,image:"assets/images/3mslah.png",rate:7.5},
    {title:"KFC",cuisines:"null",lat:200,lng:305,image:"assets/images/kfc.jpg",rate:4.5},
    {title:"zuwar",cuisines:"null",lat:200,lng:305,image:"assets/images/zoar.jpg",rate:7.5},
    {title:"rayan",cuisines:"null",lat:200,lng:305,image:"assets/images/ryan.jpg",rate:7.5},
    {title:"dayaa",cuisines:"null",lat:200,lng:305,image:"assets/images/dyaa.jpg",rate:7.5},
    {title:"OJ",cuisines:"null",lat:200,lng:305,image:"assets/images/oj.jpg",rate:7.5},
    {title:"al-am saleh",cuisines:"null",lat:200,lng:305,image:"assets/images/3mslah.png",rate:7.5},
    {title:"KFC",cuisines:"null",lat:200,lng:305,image:"assets/images/kfc.jpg",rate:4.5},
    {title:"zuwar",cuisines:"null",lat:200,lng:305,image:"assets/images/zoar.jpg",rate:7.5},

  ];*/

  /*menItem = [

    {title:"Lobster Bisque",discrption:"Lorem, deren, trataro, filede, nerada",image:"assets/img/menu/lobster-bisque.jpg",price:5.99},
    {title:"Bread Barrel",discrption:" Lorem, deren, trataro, filede, nerada",image:"assets/img/menu/bread-barrel.jpg",price:6.49},
    {title:"Crab Cake",discrption:"A delicate crab cake served on a toasted roll with lettuce and tartar sauce",image:"assets/img/menu/cake.jpg",price:7.99},
    {title:"Caesar Selections",discrption:"Lorem, deren, trataro, filede, nerada",image:"assets/img/menu/caesar.jpg",price:8.99},
    {title:"Tuscan Grilled",discrption:" Grilled chicken with provolone, artichoke hearts, and roasted red pesto",image:"assets/img/menu/tuscan-grilled.jpg",price:8.49},
    {title:"Mozzarella Stick",discrption:" Lorem, deren, trataro, filede, nerada",image:"assets/img/menu/mozzarella.jpg",price:7.49},
    {title:"Greek Salad",discrption:"  Fresh spinach, crisp romaine, tomatoes, and Greek olives",image:"assets/img/menu/greek-salad.jpg",price:9.99},
    {title:"Spinach Salad",discrption:"  Fresh spinach, crisp romaine, tomatoes, and Greek olives",image:"assets/img/menu/spinach-salad.jpg",price:19.99},
    {title:"Lobster Roll",discrption:" Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",image:"assets/img/menu/lobster-roll.jpg",price:4.99},   {title:"Tuscan Grilled",discrption:" Grilled chicken with provolone, artichoke hearts, and roasted red pesto",image:"assets/img/menu/tuscan-grilled.jpg",price:8.49},
    {title:"Mozzarella Stick",discrption:" Lorem, deren, trataro, filede, nerada",image:"assets/img/menu/mozzarella.jpg",price:7.49},
    {title:"Greek Salad",discrption:"  Fresh spinach, crisp romaine, tomatoes, and Greek olives",image:"assets/img/menu/greek-salad.jpg",price:9.99},
    {title:"Spinach Salad",discrption:"  Fresh spinach, crisp romaine, tomatoes, and Greek olives",image:"assets/img/menu/spinach-salad.jpg",price:19.99},
    {title:"Lobster Roll",discrption:" Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",image:"assets/img/menu/lobster-roll.jpg",price:4.99},


  ];*/
  restuItem = [];
  menItem = [];

  constructor(private http:HttpClient) { }

  getMenuSromServer():Observable<object>{
    return this.http.get(this.url);
  }

  getRestuSromServer():Observable<object>{
    return this.http.get(this.urlrestu);
  }

/*
  getRestu(){
    return this.restuItem;
  }

  getmen(){
    return this.menItem;
  }
*/

  addMenu(menu:MenuItem):Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = {
      "menu":menu
    }
    return this.http.post(this.url,body,httpOptions);

  }

  addRestu(restu:restItem):Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = {
      "restu":restu,
      
    }
    return this.http.post(this.urlrestu,body,httpOptions);

  }

}
