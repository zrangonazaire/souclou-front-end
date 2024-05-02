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
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
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
export class AddCourseComponent {
  courseForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Course',
      items: ['Course'],
      active: 'Add Course',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.courseForm = this.fb.group({
      cName: ['', [Validators.required]],
      cCode: [''],
      cDetails: ['', [Validators.required]],
      sDate: ['', [Validators.required]],
      cTyme: ['', [Validators.required]],
      cPrice: ['', [Validators.required]],
      pName: ['', [Validators.required]],
      maxStds: [''],
      contactNo: ['', [Validators.required]],
      uploadFile: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.courseForm.value);
  }
}
