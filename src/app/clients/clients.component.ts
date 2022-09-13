import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList = [
    { clientId: 10, firstName: 'Felipe', lastName: 'Benuti' },
    { clientId: 11, firstName: 'Abudabi', lastName: 'Kubanbi' },
    { clientId: 12, firstName: 'Fulano', lastName: 'Silva' },
    { clientId: 13, firstName: 'Ciclano', lastName: 'Agosto' },
    { clientId: 14, firstName: 'Beltrano', lastName: 'Jota' },
    { clientId: 15, firstName: 'Steve', lastName: 'Kumar' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
