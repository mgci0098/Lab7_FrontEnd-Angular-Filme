import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentariiService } from '../services/comentarii.service';

@Component({
  selector: 'app-comentarii',
  templateUrl: './comentarii.component.html',
  styleUrls: ['./comentarii.component.scss']
})
export class ComentariiComponent implements OnInit {

    public comentarii: any = null;
    public comentariiFiltrare: any = null;
    public displayedColumns: string[] = ['text', 'idFilm', 'important'];

  constructor(private comentariiService: ComentariiService, private router: Router) {
      this.getAllComentarii();
    }

  ngOnInit() {

  }

  getAllComentarii(){
      this.comentariiService.getAllComentarii().subscribe(c => {
          this.comentarii = c;
          console.log(c);
      })
  }

  filterComment(filter: string){
    this.comentariiService.getAllComentariiFiltered(filter).subscribe(c =>{
      this.comentariiFiltrare = c;
      console.log(c);
    })

  }


  goBack(){
    this.router.navigate(['']);
  }

}
