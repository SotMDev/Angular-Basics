import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {BaseComponent} from '../base/base.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {HttpClient} from '@angular/common/http';

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
        private modalService: BsModalService,
        public http: HttpClient
    ) {
        super(router, http, translateService);
    }

    ngOnInit(): void {
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    loginButton() {
        if (this.userSubmitInfo.email === this.userInfo.email && this.userSubmitInfo.password === this.userInfo.password) {
            this.isLoggedIn = true;
            localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
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

}
