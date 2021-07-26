import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  f1Data: any[];

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.f1Data = this.ds.getF1Data();
  }
}
