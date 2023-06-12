// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ShareddataserviceService } from 'src/app/services/shareddataservice.service';
// // import * as studentData from '../assets/datas/products.json';

// @Component({
//   selector: 'app-page',
//   templateUrl: './page.component.html',
//   styleUrls: ['./page.component.css']
// })
// export class PageComponent {
//   itemId: any;
//   userDetail: any[] = []
//   item: any


//   constructor(private route: ActivatedRoute, private shareData: ShareddataserviceService, private http: HttpClient) { }
//   ngOnInit(): void {
//     console.log("xx")
//     this.getItemById(this.shareData.itemDetail)


//   }
//   getItemById(itemId: any): void {
//     console.log("22333", this.userDetail)
//     this.http.get<any[]>('assets/datas/products.json').subscribe(data => {
//       this.userDetail = data;
//       console.log("111", itemId)

//       this.item = this.userDetail.find(item => item.id === itemId);
//       console.log(this.item)
  
//     })
   

//   }
// }


















import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  itemId: any;
  userDetail: any[] = [];
  item: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data:any) => {
      this.itemId = JSON.parse((data).item)
      // console.log((JSON.parse(this.itemId)), "ffffff")
    });
  }
  // getItemById(itemId: any): void {

  //   this.http.get<any[]>('assets/datas/products.json').subscribe(
  //     data => {
  //       this.userDetail = data;
  //       console.log('2223', this.userDetail); 
  //       console.log('itemId:', itemId);
  //       // const id = Number(itemId);

  //       this.item = this.userDetail.find(item => item.id === itemId);
  //       // console.log('111', this.item);
  //       if (this.item) {
  //         console.log('Found item:', this.item);
  //       } else {
  //         console.log('Item not found');
  //       }
  //     },
  //     error => {
  //       console.log('Error:', error);
  //     }
  //   );
  // }
}







 // ngOnInit():void{
   
  //   this.route.queryParams.subscribe(params=>{
  //     this.itemId=params['id']
  //     console.log(this.itemId)
  //     this.getItemById(this.itemId)

  //   })
  // }




//   getItemById(itemId:any):void{
//     console.log('2223', this.userDetail)
//     this.http.get<any[]>('assets/datas/products.json').subscribe(data=>{
//       this.userDetail=data;
//     })
//     console.log("111", itemId)

//     this.item = this.userDetail.find(item=> item.id === itemId);

// console.log(this.item)
//   }
// }

// getItemById(itemId: any): void {
//   this.http.get<any[]>('assets/datas/products.json').subscribe(
//     data => {
//       this.userDetail = data;
//       console.log('userDetail:', this.userDetail);
//       console.log('itemId:', itemId);

//       this.item = this.userDetail.find(item => item.id === itemId);
//       console.log('item:', this.item);
//     },
    
//     error => {
//       console.log('Error:', error);
//     }
//   );
// }
// }
