import {Component, DoCheck, OnInit} from '@angular/core';
import {BaseComponent} from '../../components/base/base.component';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent extends BaseComponent implements OnInit, DoCheck {

    constructor(
        public router: Router,
        public translateService: TranslateService,
        public http: HttpClient
    ) {
        super(router, http, translateService);
    }

    ngOnInit(): void {
        this.setCitiesData();
    }

    ngDoCheck() {
        if (this.currentLanguage !== localStorage.getItem('lang')) {
            this.setCitiesData();
        }
    }

    setCitiesData() {
        this.currentLanguage = localStorage.getItem('lang');
        this.getCities();
    }

}
