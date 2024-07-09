import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourServiceService {
  //for cart management system
  cart = new BehaviorSubject<any[]>([]);

  constructor() { }

  addToCart(id: number,imageUrl: string, name: string, price: number, quantity: number){
    const currentCartItems = this.cart.getValue();
    const index = currentCartItems.findIndex((cartItem)=>cartItem.id == id)
    console.log(index);
    if(index>-1){
      console.log("hola");
      currentCartItems[index].quantity = quantity;
      this.cart.next(currentCartItems);
    }
    else{
      currentCartItems.push({id,imageUrl, name, price, quantity});
      this.cart.next(currentCartItems);
    }   
  }

  getCartItems():Observable<any[]>{
    return this.cart.asObservable();
  }

  deleteFromCart(id: number){
    const currentCartItems = this.cart.getValue();
    this.cart.next(currentCartItems.filter((item)=> item.id != id));
  }
}
