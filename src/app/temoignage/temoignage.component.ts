import { Component, OnInit } from '@angular/core';
import { TemoignageService } from "../temoignage.service";

@Component({
  selector: 'app-temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.css']
})
export class TemoignageComponent implements OnInit {

  //temoignageList = temoignages;
  temoignageList;


  constructor(private temoignageService:TemoignageService) { }

  ngOnInit(): void {
    this.temoignageService.readAllTemoignages().subscribe(
      (res) => this.temoignageList = res
    );
  }

}
