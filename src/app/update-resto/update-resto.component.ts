import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { RestoService } from '../resto.service'
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  editResto = new FormGroup({
    name: new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl(''),
  })

  success: boolean = false;
  spinner:boolean = false

  constructor(private route: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    this.resto.getCurrentData(this.route.snapshot.params.id).subscribe((result) => {
      this.editResto = new FormGroup({
        name: new FormControl(result['name']),
        Address: new FormControl(result['Address']),
        email: new FormControl(result['email']),
      })
    })
  }
  collectUpdatedData() {
    this.resto.storeUpdatedValue(this.editResto.value, this.route.snapshot.params.id).subscribe((result) => {
      this.spinner = true
      setTimeout(()=>{                    
       this.spinner = false;
       this.success = true;
   }, 1000);
      console.log(result)
    })
  }

  close() {
    this.success = false
  }

}
