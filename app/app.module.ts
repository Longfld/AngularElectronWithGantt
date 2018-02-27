import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service'

import { AppComponent }   from './app.component';
import { GanttComponent } from "./components/gantt.component";

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule,HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent,GanttComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
