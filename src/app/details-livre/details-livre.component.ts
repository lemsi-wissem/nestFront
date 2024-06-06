import {Component, OnInit} from '@angular/core';
import {LivreService} from "../service/livre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Livre} from "../model/livre.model";

@Component({
  selector: 'app-details-livre',
  templateUrl: './details-livre.component.html',
  styleUrls: ['./details-livre.component.scss']
})
export class DetailsLivreComponent implements OnInit{
  constructor(private livreService: LivreService, private router: Router, private route: ActivatedRoute){
  }
  livre:Livre = new Livre();

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.livreService.getLivre(id).subscribe((data: any) => {
      this.livre = data;
    });
  }

  goBack() {
    this.router.navigate(['/livre']);
  }

}
