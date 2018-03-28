import { Component } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
 selector: 'app-edit-page',
 templateUrl: './edit-page.component.html',
 styles: []
})

export class EditPageComponent {
    people: Student = new Student();
    studentId: number; 
    constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router){}

    ngOnInit() {
        this.studentId = this.route.snapshot.params['id'];
    }

    onSubmit() {
        
        this.studentService.editStudent(this.studentId, this.people);
        setTimeout(() => {
            this.router.navigate(['app']);
        }, 200);
    }
}

//     onSubmit(form:NgForm){
//         console.log("im in edit page");
//         console.log(form.value)
//                 this.people = form.value;
//         this.studentService.editStudent(this.studentId, this.people);
//         setTimeout(() => {
//             this.router.navigate(['app']);
//         }, 200);
//     }
// }