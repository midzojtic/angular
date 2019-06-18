import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from "../model/user.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {RestDto} from "../model/rest-dto.model";
import {environment} from "../../../environments/environment";
import {NgFlashMessageService} from "ng-flash-messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: UserModel;
  private serverUrl: string;
  private BASE_URL = '/login';

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private ngFlashMessageService: NgFlashMessageService
  ) {

  }

  ngOnInit() {
    this.model = new UserModel();
    this.serverUrl = environment.serverUri + this.BASE_URL;
    this.ngFlashMessageService.showFlashMessage({

        messages: ['Welcome to login screen'],
        dismissible: true,
        timeout: false,
        type: 'info'

      }
    );

  }

  onSubmit() {

    console.log('Accessed onSubmit');

    console.log('Username: ' + this.model.username);
    console.log('Password: ' + this.model.password);

    this.http.post<RestDto<UserModel>>(this.serverUrl, this.model).subscribe(
      (response: RestDto<UserModel>) => {
        if (response.success) {
          this.ngFlashMessageService.showFlashMessage({
            messages: ['Login was successful'],
            dismissible: true,
            timeout: false,
            type: 'success'
          });
          this.router.navigate(['home']);
        } else {

        }
      },
      (err: HttpErrorResponse) => this.handleHttpError(err));
    return false;
  }

  handleHttpError(err: HttpErrorResponse) {
    if (err.status === 500) {

      this.ngFlashMessageService.showFlashMessage({
        messages: [JSON.parse((err.error)).message],
        dismissible: true,
        timeout: false,
        type: 'danger'

      });
    } else {
      this.ngFlashMessageService.showFlashMessage({
        messages: ['There is exception while communication with server'],
        dismissible: true,
        timeout: false,
        type: 'danger'

      });
    }
  }




}
