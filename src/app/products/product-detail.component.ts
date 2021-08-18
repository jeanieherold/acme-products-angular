import { IProduct } from './products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  imageWidth: number = 200;
  imageMargin: number = 2;

  //inject ActivatedRoute as a dependency in this component
  //the router is a route defined in code like a back button using the onBack method
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //code to read the route parameter goes here
    //since url wont change while user is here - use snapshot approach
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;

    //hard coding a product for testing:
    this.product = {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
