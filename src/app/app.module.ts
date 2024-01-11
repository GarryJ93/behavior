import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './components/test/test.component';
import { ResultsComponent } from './components/results/results.component';
import { NumberComponent } from './pages/number/number.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    ResultsComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
