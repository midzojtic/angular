import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from "../model/user.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {RestDto} from "../model/rest-dto.model";
import {environment} from "../../../environments/environment";

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
    private router: Router
  ) {

  }

  ngOnInit() {
    this.model = new UserModel();
    this.serverUrl = environment.serverUri + this.BASE_URL;

  }

  onSubmit() {

    console.log('Accessed onSubmit');

    if (this.model.username == null || this.model.username === '')
      return false;

    if (this.model.password == null || this.model.password === '')
      return false;

    this.http.post<RestDto<any>>(this.serverUrl, this.model).subscribe(
      (response: RestDto<any>) => {
        if (response.success) {
          this.router.navigate(['home']);
        } else {

        }
      },
      (err: HttpErrorResponse) => this.handleHttpError(err));
    return false;
  }

  handleHttpError(err: HttpErrorResponse) {
    if (err.status === 500) {
      // this.bootstrapAlertService.showError(JSON.parse(err.error).message);
    } else {
      // this.bootstrapAlertService.showError('Greška u komunikaciji sa serverom');
    }
  }




}
