import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  getDriverData: any[];
  driverData: any[] = [];
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.getDriverData = this.ds.getDriverData();
    this.getDriverData.map((data) => {
      this.driverData.push(data[0]);
      this.driverData.push(data[1]);
    })
  }


}
