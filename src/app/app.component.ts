import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private translateService: TranslateService) {
        if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', 'en');
        }
        this.translateService.use(localStorage.getItem('lang') || '');
        this.translateService.setDefaultLang(localStorage.getItem('lang') || '');
    }
}
