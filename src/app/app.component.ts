import { Component, OnInit } from '@angular/core';
import { IProduct } from './model/iproduct';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  product: IProduct[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.product = this.productService.getProducts();
  }
}
