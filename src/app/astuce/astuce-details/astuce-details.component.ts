import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { astuces } from '../../astuces';

@Component({
  selector: 'app-astuce-details',
  templateUrl: './astuce-details.component.html',
  styleUrls: ['./astuce-details.component.css'],
})
export class AstuceDetailsComponent implements OnInit {
  astuce;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.astuce = astuces[params.get('id')];
      console.log(this.astuce);
    });
  }
}
