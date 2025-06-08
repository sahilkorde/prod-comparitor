import { Component, Input, OnInit, ElementRef, inject} from '@angular/core';
import { Chart } from 'chart.js/auto'
import { product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-analuze-view',
  templateUrl: './analuze-view.component.html',
  styleUrls: ['./analuze-view.component.css'],
})
export class AnaluzeViewComponent implements OnInit {
  @Input() url: string = "";
  @Input() platform: string = "";

  product: any;
  show: boolean = false;
  prodService = inject(ProductService);
  public SentimentChart: any ;
  public FakeRewiesChart: any ;

  constructor(private elementRef: ElementRef) {
    
   }

  CreatePieChar(): void {
    if (this.product) {
      console.log(this.product);
      let htmlRef = this.elementRef.nativeElement.querySelector("#MyChart");
      this.SentimentChart = new Chart(htmlRef, {
        type: 'doughnut', //this denotes tha type of chart
        data: {// values on X-Axis
          labels: ['Positive', 'Negative'],
          datasets: [
            {
              label: "reviews",
              data: [this.product.positive_reviews, this.product.negative_reviews],
            }
          ]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Review Sentiment',
              color: 'white',
              padding: {
                top: 10,
                bottom: 10
              }
            }
          },
          color: 'white'
        }
      });

      this.FakeRewiesChart = new Chart('MyChart1', {
        type: 'doughnut',
        data: {
          labels: ['Genuine', 'Fake'],
          datasets: [
            {
              label: "Reviews",
              data: [100 - this.product.total_fake_reviews, this.product.total_fake_reviews]
            }
          ]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Genuine / Fake Reviews',
              color: 'white',
              padding: {
                top: 10,
                bottom: 10
              }
            }
          },
          color: 'white'
        }
      })
    }
  }
  ngOnInit(): void {
    if (this.platform == 'Amazon') {
      this.prodService.getAmazonProduct(this.url).then(
        (product: product) => {
          this.product = product;
          this.CreatePieChar();
        }
      );
    }
    else {
      this.prodService.getFlipkartProduct(this.url).then(
        (product: product) => {
          this.product = product;
          this.CreatePieChar();
        }
      );
    }
    
  }

}

