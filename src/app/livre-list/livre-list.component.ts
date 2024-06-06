import {Component, OnInit} from '@angular/core';
import {LivreService} from "../service/livre.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-livre-list',
  templateUrl: './livre-list.component.html',
  styleUrls: ['./livre-list.component.scss'],
})
export class LivreListComponent implements OnInit{
  constructor(private livreService: LivreService, private router: Router) {
  }
  livres:any[] = [];
  ngOnInit() {
    this.livreService.getListeLivres().subscribe((data) => {
      this.livres = data;
    });
  }
  deleteLivre(id: number) {
    this.livreService.deleteLivre(id).subscribe(() => {
      this.livres = this.livres.filter((livre) => livre.id !== id);
    });
  }

  addLivre() {
    this.router.navigate(['/livre/new']);
  }

    getDetails(id: number) {
    this.router.navigate(['/livre/' + id]);
  }

    modify(id: number) {
    this.router.navigate(['/livre/' + id + '/edit']);
  }
}
