import { ProductService } from './product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './products';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription;

  //backing variable - private - used with getters and setters
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  //setter does not return anything and this has no type
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter: ', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  //filter products by user filter search value
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    //subscribe to our observable service - then unsubscribe once you have data
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  //unsubscribe once component is detroyed
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  //method to run once emit is received from child component
  //when star rating clicked
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
