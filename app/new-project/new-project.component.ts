import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-project',
  templateUrl: 'app/new-project/new-project.component.html'
})
export class NewProjectComponent implements OnInit {
  form: FormGroup;
  name: AbstractControl;
  submitted: boolean = false;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      description: ''
    });

    this.name = this.form.controls['name'];
  }

  handler() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.submitted = true;
    }
    
  }

}