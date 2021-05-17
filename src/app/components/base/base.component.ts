import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

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

    cities: any = [];

    constructor(
        public router: Router,
        public http: HttpClient,
        public translateService: TranslateService
    ) {
        router.events.subscribe(val => {
            this.currentPage = this.router.url.replace('/', '');
        });
    }

    ngOnInit(): void {
    }

    changeLanguage(event: any): void {
        this.currentLanguage = event.value;
        localStorage.setItem('lang', this.currentLanguage);
        this.translateService.use(localStorage.getItem('lang') || '');
    }

    toggleMobileMenu() {
        if (document.body.classList.contains('mobile-active')) {
            document.body.classList.remove('mobile-active');
        } else {
            document.body.classList.add('mobile-active');
        }
    }

    getCities() {
        this.http.get('assets/data/cities/' + localStorage.getItem('lang') + '.json').subscribe(data => {
            this.cities = data;
        });
    }
}
