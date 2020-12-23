import { Component, OnInit, NgZone } from '@angular/core';
import { TemoignageService } from '../../temoignage.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-temoignage',
  templateUrl: './add-temoignage.component.html',
  styleUrls: ['./add-temoignage.component.css']
})
export class AddTemoignageComponent implements OnInit {

  submitted = false;
  temoignageForm: FormGroup;
  TProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private temoignageService: TemoignageService
  ) {
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm() {
    this.temoignageForm = this.fb.group({
      couple: ['', [Validators.required]],
      message: ['', [Validators.required]],
      imageCouple: ['', [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.temoignageForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.temoignageForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.temoignageForm.valid) {
      return false;
    } else {
      this.temoignageService.createNewTemoignage(this.temoignageForm.value).subscribe(
        (res) => {
          console.log('temoignage ajouté!')
          this.ngZone.run(() => this.router.navigateByUrl('/list-temoignage'))
        }, (error) => {
          console.log(error);
        });
    }
  }


}
