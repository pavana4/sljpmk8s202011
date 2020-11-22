import { ErrorHandler, Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private appService: AppService) {

    }
    handleError(error: any): void {
        // console.log("Error occured: " + JSON.stringify(error));
        if (error.status === 504) {
            console.log("server is offline")
            this.appService.setServerStatusSubject(false);
        }
    }
}