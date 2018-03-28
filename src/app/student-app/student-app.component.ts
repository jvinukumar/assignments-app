import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { Input } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-app',
  templateUrl: './student-app.component.html',
  styleUrls: ['./student-app.component.css']
})
export class StudentAppComponent implements OnInit {
people:Student[]=[];

  // @Input()
  // students:Array<Student>=[];
 

  studentsArray:Student[]=this.studentService.getStudents();

  constructor(private studentService:StudentService, private router: Router) { }

  ngOnInit() {
  }



  // addStudent(students){
  //   this.students.push(students);
  //   console.log(this.students)}

onEdit(index: number){
  console.log(index);
  this.router.navigate(['edit', index]);
}

onDelete(i: number) {
  this.studentService.onDelete(i);
}
  
// Onsubmit(){
//   this.studentsArray=this.studentService.getStudents();
//   console.log("im in student app comp")
//   console.log(this.people);
// }
}
