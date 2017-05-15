import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: "<button md-raised-button>Raised button</button><md-input-container>"+
                "<input mdInput [mdDatepicker] = 'picker' placeholder='Choose a date'>"+
                "<button mdSuffix [mdDatepickerToggle]='picker'></button>"+
                "</md-input-container><md-datepicker #picker></md-datepicker>"
})
export class AppComponent { }