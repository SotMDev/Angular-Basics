import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {BaseComponent} from '../base/base.component';
import {BsModalService} from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {

    modalRef: any;

    constructor(
        public router: Router,
        public translateService: TranslateService,
        private modalService: BsModalService
    ) {
        super(router, translateService);
    }

    ngOnInit(): void {
        this.currentLanguage = localStorage.getItem('lang');
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    changeLanguage(event: any): void {
        this.currentLanguage = event.value;
        localStorage.setItem('lang', this.currentLanguage);
        this.translateService.use(localStorage.getItem('lang') || '');
        this.translateService.setDefaultLang(localStorage.getItem('lang') || '');
    }

    loginButton() {
        if (this.userSubmitInfo.email === this.userInfo.email && this.userSubmitInfo.password === this.userInfo.password) {
            this.isLoggedIn = true;
            this.modalRef.hide();
            this.userSubmitInfo = {
                email: '',
                password: ''
            };
            this.wrongUserInfo = false;
        } else {
            this.wrongUserInfo = true;
        }
    }

    logoutButton() {
        this.isLoggedIn = false;
        this.modalRef.hide();
    }

    toggleMobileMenu() {
        if (document.body.classList.contains('mobile-active')) {
            document.body.classList.remove('mobile-active');
        } else {
            document.body.classList.add('mobile-active');
        }
    }

}
