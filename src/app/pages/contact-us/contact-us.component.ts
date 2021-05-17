import {Component, DoCheck, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {BaseComponent} from '../../components/base/base.component';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent extends BaseComponent implements OnInit, DoCheck {

    enableSubmitButton = false;

    contactForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
        ),
        phoneNumber: new FormControl('', Validators.required),
        countryCode: new FormControl(
            localStorage.getItem('lang') === 'tr' ? String(localStorage.getItem('lang')).toUpperCase() : 'GB',
            Validators.required),
        text: new FormControl('', Validators.required)
    });

    constructor(
        public router: Router,
        public http: HttpClient,
        public translateService: TranslateService
    ) {
        super(router, http, translateService);
    }

    ngOnInit(): void {
        this.contactForm.valueChanges.subscribe(_ => {
            this.checkValidation();
        });
    }

    ngDoCheck() {
        if (this.currentLanguage !== localStorage.getItem('lang')) {
            this.contactForm.get('countryCode')?.setValue(localStorage.getItem('lang') === 'tr' ? String(localStorage.getItem('lang')).toUpperCase() : 'GB');
            this.currentLanguage = localStorage.getItem('lang');
        }
    }

    checkValidation() {
        if (this.contactForm.status === 'INVALID') {
            this.enableSubmitButton = false;
        } else {
            this.enableSubmitButton = true;
        }
    }

    submitContactForm(): void {
        const model = {
            name: this.contactForm.get('name')?.value,
            email: this.contactForm.get('email')?.value,
            phone_number: this.contactForm.get('phoneNumber')?.value,
            country_code: this.contactForm.get('countryCode')?.value,
            text: this.contactForm.get('text')?.value
        };
        console.table(model);
    }


}
