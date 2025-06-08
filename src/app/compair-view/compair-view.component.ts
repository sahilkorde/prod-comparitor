import { Component, inject, Input } from '@angular/core';
import { product } from '../models/product';
import Chart from 'chart.js/auto';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-compair-view',
  templateUrl: './compair-view.component.html',
  styleUrls: ['./compair-view.component.css']
})
export class CompairViewComponent {
  @Input() side: string = '';
  @Input() url: string = '';
  @Input() platform: string = '';
  product: any;


  public SentimentChart: any;
  public FakeRewiesChart: any;
  private prodService: ProductService = inject(ProductService);

  CreatePieChar(): void {
    console.log(this.side)
    let id: string = this.side.concat('MyChart');
    this.SentimentChart = new Chart(id, {
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
    id = this.side.concat('MyChart1');
    this.FakeRewiesChart = new Chart(id, {
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

  ngOnInit(): void {
    if (this.platform == 'Amazon') {
      this.prodService.getAmazonProduct(this.url).then(
        (product: product) => {
          this.product = product;

          document.getElementById('MyChart')?.setAttribute('id', this.side + 'MyChart');
          document.getElementById('MyChart1')?.setAttribute('id', this.side + 'MyChart1');
          this.CreatePieChar();
        }
      );
    }
    else {
      this.prodService.getFlipkartProduct(this.url).then(
        (product: product) => {
          this.product = product;

          document.getElementById('MyChart')?.setAttribute('id', this.side + 'MyChart');
          document.getElementById('MyChart1')?.setAttribute('id', this.side + 'MyChart1');
          this.CreatePieChar();
        }
      );
    }
  }
}
