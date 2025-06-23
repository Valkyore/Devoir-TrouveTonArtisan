import { Component, OnInit, } from '@angular/core';
import { ArtisansService, Artisan } from '../../artisans.service';

@Component({
  selector: 'app-artisan-liste',
  standalone: false,
  templateUrl: './artisan-liste.component.html',
  styleUrls: ['./artisan-liste.component.scss']
})
export class ArtisanListeComponent implements OnInit {
  artisans: Artisan[] = [];
  
  constructor(private _artisansService: ArtisansService) {}
  
ngOnInit():void {
  this._artisansService.getArtisan().subscribe(data => (this.artisans = data))
}

}