import { Component, OnInit } from '@angular/core';
import { TemoignageService } from '../../temoignage.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-temoignage',
  templateUrl: './update-temoignage.component.html',
  styleUrls: ['./update-temoignage.component.css']
})
export class UpdateTemoignageComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  TemoignageProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  uploadedFiles: any;
  http: any;

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private temoignageService: TemoignageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateTemoignage();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getTemoignage(id);
    this.editForm = this.fb.group({
      couple: ['', [Validators.required]],
      message: ['', [Validators.required]],
      imageCouple: ['', [Validators.required]]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getTemoignage(id) {
    this.temoignageService.readOneTemoignage(id).subscribe(data => {
      this.editForm.setValue({
        couple: data['couple'],
        message: data['message'],
        imageCouple: data['imageCouple']
      });
    });
  }

  updateTemoignage() {
    this.editForm = this.fb.group({
      couple: ['', [Validators.required]],
      message: ['', [Validators.required]],
      imageCouple: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = null;
        this.temoignageService.updateTemoignage(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-temoignage');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
}

upload() {
  let formData = new FormData();
  for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
  }
  this.http.post('/api/upload', formData)
  .subscribe((response) => {
       console.log('response received is ', response);
  })
}

}
