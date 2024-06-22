import {Component, OnInit} from '@angular/core';
import {Livre} from "../model/livre.model";
import {LivreService} from "../service/livre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.scss']
})
export class EditLivreComponent implements OnInit{

  livre:Livre = new Livre();

  constructor(private livreService: LivreService, private datePipe: DatePipe,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log('EditLivreComponent.ngOnInit');
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.livreService.getLivre(id).subscribe((data: any) => {
      this.livre = data;
      this.livre.publishedDate = this.datePipe.transform(this.livre.publishedDate, 'yyyy-MM-dd');
    });
  }

  update() {
    this.livreService.updateLivre(this.livre, this.livre.id).subscribe({
      next: () => {
        console.log('Livre updated successfully');
        this.router.navigate(['/livre']);
      },
      error: (error:any) => {
        console.error(error);
      }
    })
  }

  signOut() {
    this.livreService.signOut();
    this.router.navigate(['/login']);
  }
}
