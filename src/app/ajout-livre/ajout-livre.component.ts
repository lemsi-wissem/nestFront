import { Component } from '@angular/core';
import {Livre} from "../model/livre.model";
import {LivreService} from "../service/livre.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-livre',
  templateUrl: './ajout-livre.component.html',
  styleUrls: ['./ajout-livre.component.scss']
})
export class AjoutLivreComponent {
  livre: Livre = new Livre();

  constructor(private livreService: LivreService, private router: Router) { }

  add() {
    this.livreService.addLivre(this.livre).subscribe(
      data => {
        // handle successful add
        console.log('Livre added successfully');
        this.router.navigate(['/livre']);
      },
      error => {
        // handle error
        console.error(error);
      }
    );
  }

  signOut() {
    this.livreService.signOut();
    this.router.navigate(['/login']);
  }
}
