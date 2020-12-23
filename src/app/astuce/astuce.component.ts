import { Component, OnInit } from '@angular/core';
import { AstuceService } from "../astuce.service";

@Component({
  selector: 'app-astuce',
  templateUrl: './astuce.component.html',
  styleUrls: ['./astuce.component.css']
})
export class AstuceComponent implements OnInit {

  //astuceList = astuces;
  astuceList;

  constructor(private astuceService:AstuceService) { }

  ngOnInit(): void {
    this.astuceService.readAllAstuces().subscribe(
      (res) => this.astuceList = res
    );
  }

}
