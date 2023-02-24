import { Component, EventEmitter, Output } from '@angular/core';
import { Courses } from 'src/app/Courses';
import { CourseService } from 'src/app/services/course.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  cursos: Courses[] = []

  @Output edit = new EventEmitter(false);

  constructor(
    private courseService: CourseService, 
    private router: Router, 
    private route: ActivatedRoute
    )
  {
    this.getCourse()
  }

  clicou(){
    console.log('Clicou')
  }

  getCourse(): void{
    this.courseService.getList().subscribe((courses) => ((this.cursos = courses)))
  }

  cadastrar(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  edit(curso: Courses){
    this.edit.emit(curso)
  }

}
