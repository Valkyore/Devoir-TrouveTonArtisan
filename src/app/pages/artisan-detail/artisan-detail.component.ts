import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artisan, ArtisansService } from '../../artisans.service';

@Component({
  selector: 'app-artisan-detail',
  standalone: false,
  templateUrl: './artisan-detail.component.html',
  styleUrls: ['./artisan-detail.component.scss']
})
export class ArtisanDetailComponent implements OnInit {
  artisan?: Artisan;

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisansService
  ) {}

ngOnInit():void{
  const id=Number(this.route.snapshot.paramMap.get('id'));
  this.artisanService.getArtisan().subscribe((artisans) => {
    this.artisan = artisans.find((a) => Number (a.id) === id);
  });
}

}
