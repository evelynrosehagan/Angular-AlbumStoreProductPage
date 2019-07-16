import { Component, OnInit } from '@angular/core';
import {Album} from "../album";
import {ProductService} from "../album";
@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  private albumInfo : Album;

  constructor(private _productService : ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
