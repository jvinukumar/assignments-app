import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { EventEmitter } from '@angular/core';
import { Studentenum } from '../model/studentenum';

@Injectable()
export class StudentService {
public i:number;

  
students:Student[]= [
  new Student('vinod','kumar','janga',55,Studentenum.EM),
  new Student('siddhu','raj','mikkili',56,Studentenum.MIS),
  new Student('thakil','ahmed','shaik',65,Studentenum.CS),

];
 



  constructor() { }

  addStudent(studentss:Student) {
    console.log("im in servicescomponent")
    this.students.push(studentss);
    
    console.log(this.students);
  }
  
  getStudents(){
    return this.students;
  }

  editStudent(index: number, student: Student){
    console.log("im in editstudent")
    console.log(this.students);
    this.students[index] = student;
    console.log("After push");
    console.log(this.students);
  }



  onDelete(index: number) {
    this.students.splice(index, 1);
  }

}
