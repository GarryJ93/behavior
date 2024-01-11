import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
  number!: number;
  suscription!: Subscription;
  constructor(private numberService: AddService,
  private router: Router) { }
  
  ngOnInit() {
    this.suscription = this.numberService.count$.subscribe({
      next: (response) => {
        this.number = response;
    }
  })
  }
  
  ngOnDestroy() {
    this.suscription.unsubscribe();
    this.router.navigate(['home']);
  }
}
