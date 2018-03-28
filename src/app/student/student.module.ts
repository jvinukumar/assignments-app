import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDataComponent } from '../student-data/student-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    StudentDataComponent
  ],
  
  declarations: [
    StudentDataComponent
  ]
})
export class StudentModule { }
