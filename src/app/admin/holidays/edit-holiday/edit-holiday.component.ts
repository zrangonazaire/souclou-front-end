import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-edit-holiday',
  templateUrl: './edit-holiday.component.html',
  styleUrls: ['./edit-holiday.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
  ],
})
export class EditHolidayComponent {
  holidayForm: UntypedFormGroup;
  formdata = {
    no: '99',
    title: 'christmas Holiday',
    sDate: '2019-12-17T14:22:18Z',
    eDate: '2020-01-04T14:22:18Z',
    type: '1',
    details: 'christmas Holiday',
  };
  breadscrums = [
    {
      title: 'Edit Holiday',
      items: ['Fees'],
      active: 'Edit Holiday',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.holidayForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.holidayForm.value);
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      no: [this.formdata.no, [Validators.required]],
      title: [this.formdata.title, [Validators.required]],
      sDate: [this.formdata.sDate, [Validators.required]],
      eDate: [this.formdata.eDate, [Validators.required]],
      type: [this.formdata.type, [Validators.required]],
      details: [this.formdata.details],
    });
  }
}
