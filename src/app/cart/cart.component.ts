import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: '/cart.component.html',
  styleUrls: ['/cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  
  //Het format van het form 
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });


  constructor(
    private cartService: CartService,
    private formBuilder:  FormBuilder,
  )  {}

  //het submitten van het formulier
  onSubmit(): void{
    //process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    //terug leeg maken van form
    this.checkoutForm.reset();
  }



}
