import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { GaugeModule } from 'angular-gauge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from './main.service';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import {matMenuAnimations, MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    GaugeModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
