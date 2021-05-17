import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseComponent implements OnInit {

    constructor(
        public router: Router,
        public translateService: TranslateService,
        public http: HttpClient
    ) {
        super(router, http, translateService);
    }

    ngOnInit(): void {
    }

}
