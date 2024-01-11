import { Component } from '@angular/core';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
  number!: number;
  constructor(private numberService: AddService) { }
  
  ngOnInit() {
    this.numberService.count$.subscribe({
      next: (response) => {
        this.number = response;
    }
  })
  }
  
  ngOnDestroy() {
    this.numberService.count$.unsubscribe();
  }
}
