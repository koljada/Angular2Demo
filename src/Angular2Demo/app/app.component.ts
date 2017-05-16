import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    //template: "<button md-raised-button>Raised button</button><md-input-container>" +
    //"<input mdInput [mdDatepicker] = 'picker' placeholder='Choose a date' [value]=startTime" +
    //"<button mdSuffix [mdDatepickerToggle]='picker'></button>" +
    //"</md-input-container><md-datepicker #picker></md-datepicker>",
    template: "<h2>Start time: {{startTime | date: 'dd/MM/yyyy'}}</h2>"
})
export class AppComponent {
    private todayDate: string;
    startTime: Date;

    constructor() {
        this.startTime = new Date();
        this.todayDate = this.startTime.toDateString();
        let todayDateRecord = localStorage.getItem(this.todayDate);
        if (todayDateRecord == null) {
            localStorage.setItem(this.todayDate, this.startTime.toString());
        }
        else {
            this.startTime = new Date(Date.parse(todayDateRecord));
        }
    }
}