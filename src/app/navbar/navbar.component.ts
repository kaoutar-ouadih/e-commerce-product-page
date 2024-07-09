import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviourServiceService } from '../behaviour-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isCartClicked: boolean = false;
  cartItemsNumber: number;
  cart: any[] = [];
  isMenuClicked: boolean = false;

  constructor(private behaviourService: BehaviourServiceService){ 
  }
  ngOnInit(): void {
    this.behaviourService.getCartItems().subscribe(
      result=>{
        this.cartItemsNumber = result.reduce((accumulator, currentItem)=> accumulator + currentItem.quantity, 0);
        this.cart = result;
      }
    )
  }

  onCartClick(){
    this.isCartClicked = !this.isCartClicked;
  }

  deleteFromCart(id: number){
    this.behaviourService.deleteFromCart(id);
  }

  onMenuClick(){
    this.isMenuClicked = !this.isMenuClicked;
  }

  onCloseMenuClick(){
    this.isMenuClicked= !this.isMenuClicked;
  }
}
