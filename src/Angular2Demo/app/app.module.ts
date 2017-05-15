import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdInputModule, MdNativeDateModule } from '@angular/material';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, MdButtonModule, MdDatepickerModule, MdInputModule, MdNativeDateModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }