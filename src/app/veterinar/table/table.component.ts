import {Component, OnInit} from '@angular/core';
import {RestDto} from "../model/rest-dto.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {ClientModel} from "../model/client.model";

export interface Food {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource: ClientModel[] = [
    // {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    // {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    // {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
    // {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4},
    // {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
  ];
  displayedColumns: string[] = ['name', 'calories', 'fat', 'carbs', 'protein'];
  model: ClientModel;
  private serverUrl: string;
  private BASE_URL = '/home';

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router
  ) {

  }

  ngOnInit() {
    this.model = new ClientModel();
    this.serverUrl = environment.serverUri + this.BASE_URL;
    this.fetchClients();
  }

  fetchClients() {
    console.log('Accessed onSubmit');
    this.http.get<RestDto<any>>(this.serverUrl + '/getClients').subscribe(
      (response: RestDto<Array<ClientModel>>) => {
        if (response.success) {
          var clients: ClientModel[] = response.data;
          this.mapTable(clients);
        } else {
          console.log('No client data')

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

  mapTable(clients: ClientModel[]) {

    var num: number = 0;
    this.dataSource = new Array(clients.length);
    this.dataSource = clients;
    for (num = 0; num < clients.length; num++) {

      var c = new ClientModel();

      c.clientName = clients[num].clientName;
      c.clientSurname = clients[num].clientSurname;
      c.clientEmail = clients[num].clientEmail;
      c.clientCell = clients[num].clientCell;

    }
  }







}
