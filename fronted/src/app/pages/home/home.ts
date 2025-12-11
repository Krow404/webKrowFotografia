import { Component, inject, OnInit, signal } from '@angular/core';
import {GalleryService } from '../../services/galleryService';
import { GalleryImage } from '../../gallery-image.interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit{

  private galleryService = inject(GalleryService);
  // Nuestra señal con las fotos
  images = signal<GalleryImage[]>([]);

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    this.galleryService.getImages().subscribe({
      next: (data) => {
        this.images.set(data);
      },
      error: (err) => console.error('Error:', err)
    });
  }
}
