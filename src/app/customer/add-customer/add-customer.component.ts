import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  firstname: string = '';
  terms: boolean = false;
  customerType: string = "";
  description: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  loadValues(formValue: NgForm){
    let userDetails = {
      firstname: "Felipe",
      terms: false,
      customerType: "2",
      description: "Essa é a descrição" 
    }
    formValue.setValue(userDetails);
  }

  addCustomer(formValue: NgForm) {
    console.log(formValue.value);
  }

}
