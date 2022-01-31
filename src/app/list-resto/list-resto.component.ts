import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';


@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  constructor(private resto: RestoService) {
    this.collection = [];
  }

  collection: any[] = [];

  ngOnInit(): void {
    this.resto.getList().subscribe((data) => {

      this.collection = data as any[]
    });
  }


  deleteData(data: any) {
    this.collection.splice(data - 1, 1)
    this.resto.deleteResto(data).subscribe((data) => {
      console.log(data)
      this.resto.getList()
    })
  }

}
