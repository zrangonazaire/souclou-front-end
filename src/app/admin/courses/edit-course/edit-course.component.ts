import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    FileUploadComponent,
    MatButtonModule,
  ],
})
export class EditCourseComponent {
  courseForm: UntypedFormGroup;
  formdata = {
    cName: 'PHP Development',
    cCode: 'IR43234',
    cDetails: 'Basic php course from beginning.',
    sDate: '2020-02-17T14:22:18Z',
    cTyme: '10:30',
    cPrice: '12.4$',
    pName: '2',
    maxStds: '130',
    contactNo: '1234567890',
    uploadFile: '',
  };
  breadscrums = [
    {
      title: 'Edit Course',
      items: ['Course'],
      active: 'Edit Course',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.courseForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.courseForm.value);
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      cName: [this.formdata.cName, [Validators.required]],
      cCode: [this.formdata.cCode],
      cDetails: [this.formdata.cDetails, [Validators.required]],
      sDate: [this.formdata.sDate, [Validators.required]],
      cTyme: [this.formdata.cTyme, [Validators.required]],
      cPrice: [this.formdata.cPrice, [Validators.required]],
      pName: [this.formdata.pName, [Validators.required]],
      maxStds: [this.formdata.maxStds],
      contactNo: [this.formdata.contactNo, [Validators.required]],
      uploadFile: [this.formdata.uploadFile],
    });
  }
}
