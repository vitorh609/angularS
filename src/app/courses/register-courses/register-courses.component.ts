import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-register-courses',
  templateUrl: './register-courses.component.html',
  styleUrls: ['./register-courses.component.css']
})
export class RegisterCoursesComponent implements OnInit{
  //varival do tipo FormGroup
  form = this.formsBuilder.group({
    //definindo que o valor não pode ser nulo
    nome: [''], 
    duracao:[''],
    tipoCurso: [''] 
  })
  
  constructor(private formsBuilder: NonNullableFormBuilder, 
    private service: CourseService, 
    private location: Location)
    {
  }

  ngOnInit(): void {
  }

  // passando formulario para API
  salvarForm(){
    this.service.save(this.form.value).subscribe(result => console.log(result), error => console.log(error));
  }
  
  onBack(){
    this.location.back(); 
  }
}
