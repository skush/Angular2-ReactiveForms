import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit  {
    customerForm: FormGroup;
    customer: Customer= new Customer();

    constructor(private fb: FormBuilder) { }
    ngOnInit(): void {
        this.customerForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.maxLength(50)]],
            email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+')]],
            sendCatalog: true
        });
    }

    populateTestData(): void {
        this.customerForm.patchValue({
            firstName: 'Jack',
            ////lastName: 'Harkness',
            email: 'jack@torchwood.com',
            sendCatalog: false
        });
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }

 }
