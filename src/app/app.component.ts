import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BehaviourServiceService } from './behaviour-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce-product-page';
  @ViewChild('mainProducImage') mainProducImage: ElementRef;
  @ViewChild('mainLightboxProducImage') mainLightboxProducImage: ElementRef;
  currentSrc: string = "../assets/images/image-product-1.jpg";
  quantity: number = 0;
  cart: any[] = [];
  isMainImageClicked: boolean = false;
  src: string[] = ['../assets/images/image-product-1.jpg', '../assets/images/image-product-2.jpg', '../assets/images/image-product-3.jpg', '../assets/images/image-product-4.jpg'];
  currentSrcIndex: number = 0;

  constructor(private behaviourService: BehaviourServiceService){
  }

  onThumbnailClick(src: string){
    this.mainProducImage.nativeElement.src = src;
    this.currentSrc = src;
  }

  onDecreaseBtnClick(){
    if(this.quantity>0){
      this.quantity--;
    }
  }
  onIncreaseBtnClick(){
    this.quantity++;
  }
  addToCart(id: number,imageUrl: string, name: string, price: number, quantity: number){
    this.behaviourService.addToCart(id, imageUrl, name, price, quantity);
  }

  onMainImageClick(){
    this.isMainImageClicked = !this.isMainImageClicked;
  }
  onCloseLightboxClick(){
    this.isMainImageClicked = !this.isMainImageClicked;
  }

  onLightboxThumbnailClick(src: string){
    this.mainLightboxProducImage.nativeElement.src = src;
    this.currentSrc = src;
  }

  onNextBtnClick(){
    if(this.currentSrcIndex < this.src.length-1){
      this.mainLightboxProducImage.nativeElement.src = this.src[this.currentSrcIndex+1];
      this.currentSrc = this.src[this.currentSrcIndex+1];
      this.currentSrcIndex++;
    }
    else{
      this.mainLightboxProducImage.nativeElement.src = this.src[0];
      this.currentSrc = this.src[0];
      this.currentSrcIndex = 0;
    }
  }

  onPreviousBtnClick(){
    if(this.currentSrcIndex > 0){
      this.mainLightboxProducImage.nativeElement.src = this.src[this.currentSrcIndex-1];
      this.currentSrc = this.src[this.currentSrcIndex-1];
      this.currentSrcIndex--;
    }
    else{
      this.mainLightboxProducImage.nativeElement.src = this.src[this.src.length-1];
      this.currentSrc = this.src[this.src.length-1];
      this.currentSrcIndex = this.src.length-1;
    }
  }

  onPreviousBtnClickMobile(){
    if(this.currentSrcIndex > 0){
      this.mainProducImage.nativeElement.src = this.src[this.currentSrcIndex-1];
      this.currentSrc = this.src[this.currentSrcIndex-1];
      this.currentSrcIndex--;
    }
    else{
      this.mainProducImage.nativeElement.src = this.src[this.src.length-1];
      this.currentSrc = this.src[this.src.length-1];
      this.currentSrcIndex = this.src.length-1;
    }
  }

  onNextBtnClickMobile(){
    if(this.currentSrcIndex < this.src.length-1){
      this.mainProducImage.nativeElement.src = this.src[this.currentSrcIndex+1];
      this.currentSrc = this.src[this.currentSrcIndex+1];
      this.currentSrcIndex++;
    }
    else{
      this.mainProducImage.nativeElement.src = this.src[0];
      this.currentSrc = this.src[0];
      this.currentSrcIndex = 0;
    }
  }
}
