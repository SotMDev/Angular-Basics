import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

    /* Page Area */
    currentPage: any;
    pages = [
        {
            name: this.translateService.instant('navigation.index'),
            url: ''
        },
        {
            name: this.translateService.instant('navigation.contact-us'),
            url: 'contact-us'
        }
    ];

    /* Language */
    currentLanguage: any = localStorage.getItem('lang');
    languages = [
        {
            name: 'Türkçe',
            value: 'tr'
        },
        {
            name: 'English',
            value: 'en'
        }
    ];

    /* User Area */
    isLoggedIn = false;
    userInfo = {
        id: 'Erkan',
        name: 'Mustafa Erkan',
        email: 'dede',
        password: '1234'
    };

    userSubmitInfo = {
        email: '',
        password: ''
    };
    wrongUserInfo = false;

    constructor(
        public router: Router,
        public translateService: TranslateService
    ) {
        router.events.subscribe(val => {
            this.currentPage = this.router.url.replace('/', '');
        });
    }

    ngOnInit(): void {
    }
}
