import { Component, OnInit, } from '@angular/core';
import { ArtisansService, Artisan } from '../../artisans.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artisan-liste',
  standalone: false,
  templateUrl: './artisan-liste.component.html',
  styleUrls: ['./artisan-liste.component.scss']
})
export class ArtisanListeComponent implements OnInit {
  artisans: Artisan[] = [];
  filteredArtisans: Artisan[] = [];
  
  constructor(private _artisansService: ArtisansService,
    private route: ActivatedRoute
  ) {}
  
ngOnInit(): void {
    this._artisansService.getArtisan().subscribe(data => {
      this.artisans = data;

      // Récupère le paramètre de requête `category`
      this.route.queryParams.subscribe(params => {
        const category = params['category'];
        if (category) {
          this.filteredArtisans = this.artisans.filter(a => a.category === category);
        } else {
          this.filteredArtisans = this.artisans;
        }
      });
    });
  }

}