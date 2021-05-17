import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    cities: any = [];

    constructor(
        private http: HttpClient
    ) {
    }

    ngOnInit(): void {
        this.http.get('assets/data/cities.json').subscribe(data => {
            this.cities = data;
        });
    }

}
