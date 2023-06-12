import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  itemId:any;
  item: any = {
    id: 1,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  };
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
   
    this.route.params.subscribe(params=>{
      this.itemId=params['id']
    })
  }


  saveItem(): void {
    console.log(this.item);
  }

}
