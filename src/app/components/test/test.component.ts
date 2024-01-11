import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit{
  count!: number;
  constructor(private add: AddService) {}

  ngOnInit() {
    this.add.count$.subscribe({
      next: (response) => {
        this.count = response;
      },
    });
  }

  newCount() {
    this.add.count$.next(1);
  }

  addOne() {
    this.count++;
    console.log(this.count);
    if (this.count > 30) {
      this.count = 0;
    }
    this.add.count$.next(this.count);
  }
}
