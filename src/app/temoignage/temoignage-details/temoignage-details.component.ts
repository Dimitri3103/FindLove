import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { temoignages } from '../../temoignages';

@Component({
  selector: 'app-temoignage-details',
  templateUrl: './temoignage-details.component.html',
  styleUrls: ['./temoignage-details.component.css'],
})
export class TemoignageDetailsComponent implements OnInit {
  temoignage;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.temoignage = temoignages[params.get('id')];
      console.log(this.temoignage);
    });
  }
}
