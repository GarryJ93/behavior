import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  count!: number;
  constructor(private addService: AddService) {}

  ngOnInit() {
    this.addService.count$.subscribe({
      next: (response) => {
        this.count = response;
      },
    });
  }

  newCount() {
    this.addService.count$.next(1);
  }

  addOne() {
    this.addService.count$.next(++this.count);
    if (this.count > 30) {
      this.addService.count$.next(0);
    }
  }
}
