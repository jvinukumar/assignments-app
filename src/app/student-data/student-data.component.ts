import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { Studentenum } from '../model/studentenum';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {


 Student=[ 'vinod','kumar',25,'jangala',Studentenum.EM ]
  constructor() { }

  ngOnInit() {
  }


  
}
