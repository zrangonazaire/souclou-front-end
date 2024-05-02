import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
export interface PeriodicElement {
  checked: boolean;
  imageUrl: string;
  name: string;
  email: string;
  subject: string;
  status: string;
  assignTo: string;
  date: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    checked: false,
    imageUrl: 'assets/images/user/user1.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'closed',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user2.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'closed',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user3.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'open',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user4.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'closed',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user5.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'open',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user6.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'closed',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user7.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'open',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user8.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'pending',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user9.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'closed',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user10.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'closed',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user1.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'open',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user2.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'closed',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user3.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'pending',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user4.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'closed',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user5.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'closed',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user6.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'pending',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user7.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'closed',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
  {
    checked: false,
    imageUrl: 'assets/images/user/user8.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'closed',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
];
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
  ],
})
export class SupportComponent implements OnInit {
  displayedColumns: string[] = [
    'checked',
    'imageUrl',
    'name',
    'email',
    'subject',
    'status',
    'assignTo',
    'date',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  breadscrums = [
    {
      title: 'Support',
      items: ['Apps'],
      active: 'Support',
    },
  ];
  constructor() {
    //constructor
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
