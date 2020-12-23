import { Component, OnInit } from '@angular/core';
import { TemoignageService } from '../../temoignage.service';

@Component({
  selector: 'app-list-temoignage',
  templateUrl: './list-temoignage.component.html',
  styleUrls: ['./list-temoignage.component.css']
})
export class ListTemoignageComponent implements OnInit {

  Temoignage:any = [];

  constructor(private temoignageService: TemoignageService) {
    this.readTemoignage();
  }

  ngOnInit() {}

  readTemoignage(){
    this.temoignageService.readAllTemoignages().subscribe((data) => {
     this.Temoignage = data;
    })
  }

  removeTemoignage(temoignage, index) {
    if(window.confirm('Are you sure?')) {
        this.temoignageService.deleteTemoignage(temoignage._id).subscribe((data) => {
          this.Temoignage.splice(index, 1);
        }
      )
    }
  }

}
