import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  success: boolean = false;
  spinner:boolean = false

  addResto = new FormGroup({
    name: new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl(''),
  })
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }

  showSpinner(){
 }
  collectData() {
    this.resto.saveToResto(this.addResto.value).subscribe((result) => {
      this.spinner = true
      setTimeout(()=>{                    
       this.spinner = false;
       this.success = true;
   }, 1000);
      this.addResto.reset()
    })
  }

  close() {
    this.success = false
  }

}
