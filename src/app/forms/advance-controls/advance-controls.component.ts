import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

export interface User {
  name: string;
}

@Component({
  selector: 'app-advance-controls',
  templateUrl: './advance-controls.component.html',
  styleUrls: ['./advance-controls.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgxMaskDirective,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    AsyncPipe,
  ],
  providers: [provideNgxMask()],
})
export class AdvanceControlsComponent implements OnInit {
  hide = true;

  myControl = new UntypedFormControl();
  options: User[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
  filteredOptions?: Observable<User[]>;

  breadscrums = [
    {
      title: 'Advance',
      items: ['Forms'],
      active: 'Advance',
    },
  ];

  constructor() {
    //constructor
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.options.slice()))
    );
  }
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  email = new UntypedFormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
        ? 'Not a valid email'
        : '';
  }
}
