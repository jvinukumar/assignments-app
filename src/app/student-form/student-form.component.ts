import { Component, Output,EventEmitter } from '@angular/core';
import { Student } from '../model/student';
import { Studentenum} from '../model/studentenum';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

    // stud : Student[]=[];
    //student: Student = new Student(

    // );

    // public fname;
    // public mname;
    // public lname;
    // public studentID;
    // public Studentenum;
  


  
    //  showTable=false;

    //  @Output()
    //  newStudentAdded:EventEmitter<Student>= new EventEmitter<Student>();


      // Student[];  

  // Student:Student[]=[];
   

 
  // addStudent(){
  //   //  console.log(this.Student)
  //   // console.log(this.stud)
  //   this.students=new Student(this.fname,
  //                             this.mname,
  //                           this.lname,
  //                         this.studentID,
  //                       this.Studentenum);  
  //    console.log(this.students);

  //   this.newStudentAdded.emit(this.students);
    

  //   // this.showTable=true;
    

   
    
  //   // this.stud.push(new Student());
    
  //   // console.log(this.stud)
    
    
  //     }
  students:Student=new Student("","","",0,Studentenum.CS); 

  constructor(private studentService:StudentService) { } 
Onsubmit(){
  
  console.log(this.students);
  
   this.studentService.addStudent(this.students); 
   this.students=new Student("","","",0,Studentenum.CS);
                        
      }

}
