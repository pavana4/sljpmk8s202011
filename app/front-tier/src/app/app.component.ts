import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { timer } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "EMS - Employee Management System (Test App)";
  serverStatus = false;
  subscribe: Subscription;
  trackLiveInterval = 1;//in mins

  constructor(private http: HttpClient, private appService: AppService) {

  }
  ngOnInit() {

    const source = timer(1000, 2000);
    //output: 0,1,2,3,4,5......
    this.subscribe = source.subscribe(val => {
      // console.log(val);
      this.checkServerStatus();
    });
    this.appService.getServerStatusSubject().subscribe((status) => {
      if (status) {
        this.serverStatus = true;
      } else {
        this.serverStatus = false;
      }
    });
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
  checkServerStatus() {

    this.http.get('/api/v1/employees').subscribe((response: Response) => {
      this.serverStatus = true;
      console.log("server is online")
    });

  }
  handleError() {

  }

}
