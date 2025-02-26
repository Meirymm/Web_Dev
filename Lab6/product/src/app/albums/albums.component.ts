import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../Albums';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumsService } from '../albums.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];  // Изменил с Observable на обычный массив
  newAlbumTitle = '';

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() { 
    this.loadAlbums(); // Загружаем список альбомов при старте
  }

  loadAlbums() {
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  createAlbum(): void {
    if (!this.newAlbumTitle.trim()) return; // Проверяем, что поле не пустое
  
    const newAlbum: Album = { userId: 1, id: 0, title: this.newAlbumTitle };
  
    this.albumsService.createAlbum(newAlbum).subscribe((album) => {
      this.albums.push(album); // Добавляем новый альбом в массив
      this.newAlbumTitle = ''; // Очищаем поле ввода
    });
  }
  
  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id); // Удаляем из массива
    });
  }
}
