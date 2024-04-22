import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'AngularProject';
  product1 = { productId: 1, productName: 'Laptop', categoryId: 1 };
  product2 = { productId: 2, productName: 'Mouse', categoryId: 1 };

  products = [this.product1, this.product2];
}
