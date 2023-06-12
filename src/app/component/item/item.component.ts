// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { ShareddataserviceService } from 'src/app/services/shareddataservice.service';


// @Component({
//   selector: 'app-item',
//   templateUrl: './item.component.html',
//   styleUrls: ['./item.component.css']
// })
// export class ItemComponent {
// userDetail:any[]=[]
//   constructor(private http: HttpClient, private router: Router, private shareData:ShareddataserviceService){}

//   ngOnInit(): void
// {
// this.http.get<any[]>('assets/datas/products.json').subscribe(data=>{
//   this.userDetail=data;
//   console.log("22",this.userDetail)
// })

// }

// onRelocate(item:any){
//   this.shareData.itemDetail=item.id
//   console.log(this.shareData.itemDetail)
//   this.router.navigate(['/page', item.id], { queryParams: { item: item } });
// }
// }

















import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  userDetail: any[] = []
  item: any
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/datas/products.json').subscribe(data => {
      this.userDetail = data;
    })
  }

  onRelocate(item: any): void {
    console.log(item)
    this.router.navigate(['/page', item.id], { queryParams: { item: (JSON.stringify(item)) } });
  }
}


// ngOnInit(): void {
//   this.route.queryParams.subscribe(params => {
//     const itemId = params['itemId'];
//     if (itemId) {
//       console.log('Received itemId:', itemId);
//     }
//   });
// }


// onRelocate(item:any){
//   this.router.navigate(['/page', item.id], { state: { item: item } });
// }
// }


