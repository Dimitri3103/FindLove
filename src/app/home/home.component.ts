import { Component, OnInit } from '@angular/core';
import {astuces} from "../astuces";
import {temoignages} from "../temoignages";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  astuceList = astuces;
  temoignageList = temoignages;

  constructor() { }

  ngOnInit(): void {
  }

}
