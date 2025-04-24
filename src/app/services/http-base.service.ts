import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpBaseService {

    ShowLoading$ = new BehaviorSubject<boolean>(false);

    constructor(
        private _httpClient: HttpClient
    ) { }
}
