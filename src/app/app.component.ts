import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@ngneat/reactive-forms';
// import { FormGroup, FormControl } from '@angular/forms';

interface Profile {
  firstName: string;
  lastName: string;
  skills: string[];
  controlArray: string[],
  controlObject: {
    key: string
  },
  address: {
    street: string;
    city: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileForm = new FormGroup<Profile>({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    skills: new FormArray([]),
    controlArray: new FormControl([]),
    controlObject: new FormControl({value: { key: ''}}),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl('')
    })
  });

  legacyForm = new FormGroup({
    firstName: new FormControl(''),
    skills: new FormArray([]),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl('')
    })
  });

  ngOnInit() {
    this.profileForm.patchValue({firstName: 'Netanel'});
  }

  get skills() {
    return this.profileForm.get('skills') as FormArray<string>;
  }

  addSkill() {
    this.skills.push(new FormControl('JS'));
  }
}
