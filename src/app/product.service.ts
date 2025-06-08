import { Injectable } from '@angular/core';
import { product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  async getAmazonProduct(url: string): Promise<product> {
    const prod = await fetch('http://127.0.0.1:8000/amazon?url=' + url);
    return await prod.json() ?? {}
  }

  async getFlipkartProduct(url: string): Promise<product> {
    const prod = await fetch('http://127.0.0.1:8000/flipkart?url=' + encodeURIComponent(url), {
      mode: 'cors',
      method: 'POST' });
    return await prod.json() ?? {}
  }

}
