import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../Albums';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Импортируем FormsModule
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // Заменили NgModel на FormsModule
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album: Album | undefined;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
    if (albumId) {
      this.albumsService.getAlbumById(+albumId).subscribe((album) => {
        this.album = album;
      });
    }
  }

  saveAlbum() {
    if (this.album) {
      console.log("Save button clicked!", this.album.title);
      this.albumsService.updateAlbum(this.album).subscribe({
        next: (updatedAlbum) => {
          this.album = updatedAlbum;
          console.log('Album updated:', updatedAlbum);
          alert('Album name updated successfully!');
        },
        error: (err) => console.error('Error updating album:', err)
      });
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}





