import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details: any;
  Data: any;
  columnDefs = [
    { headerName: 'created_at', field: 'created_at' },
    { headerName: 'title', field: 'title' },
    { headerName: 'url', field: 'url' },
    { headerName: 'author', field: 'author' }
  ];

  constructor(private service: HomeService) { this.fetch(); }

  ngOnInit() {
    this.fetch();
    setInterval(() => this.fetch(), 10000)
  }

  fetch() {
    this.service.get().subscribe(response => {
      console.log(response);
      this.details = response['hits'];
    })
  }

  onRowClicked(event) {
    this.Data = event.node.data
  }
}
