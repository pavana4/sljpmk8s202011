import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {

    serverStatusSubject: Subject<any> = new Subject<any>();

    constructor() { }

    setServerStatusSubject(status: boolean): any {
        this.serverStatusSubject.next(status);
    }
    getServerStatusSubject() {
        return this.serverStatusSubject.asObservable();
    }

}