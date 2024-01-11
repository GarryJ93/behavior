import { Component } from '@angular/core';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  count2!: number;
  constructor(private add2: AddService) {}
  ngOnInit() {
    this.add2.count$.subscribe({
      next: (response) => {
        this.count2 = response;
      },
    });
  }
}
