import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../curriculum.service';
@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum-view.component.html',
  styleUrls: ['./curriculum-view.component.css']
})
export class CurriculumComponent implements OnInit {
[x: string]: any;
  curriculumData: any;
descripcionPersonal: any;
objetivos: any;
curso: any;
cursoCoursera: any;
escuela: any;
habilidades: any;
primero: any;
segundo: any;
tercero: any;
VS: any;
HTML: any;
CSS: any;
Py: any;
SQL: any;
Git: any;
GitHub: any;
  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.curriculumService.obtenerDatos().subscribe(data => {
      this.curriculumData = data;
    });
  }
}
