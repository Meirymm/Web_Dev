import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, RouterLink} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../photo.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos!: Observable<Photo[]>;
  albumId: string | null = null;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id');
    this.photos = this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/albums/' + this.albumId + '/photos');
  }
}
