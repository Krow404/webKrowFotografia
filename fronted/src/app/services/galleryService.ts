import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryImage } from '../gallery-image.interface';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  //apuntar backend a java
  //private apiUrl = 'http://localhost:8080/api/images';
  private apiUrl = 'http://54.123.45.67:8080/api/images';

  constructor(private http: HttpClient){}

  getImages():Observable<GalleryImage[]> {
    return this.http.get<GalleryImage[]>(this.apiUrl);
  }

  // Recibe una imagen (sin ID) y devuelve la imagen guardada (con ID)
  createImage(image: GalleryImage): Observable<GalleryImage>{
    return this.http.post<GalleryImage>(this.apiUrl,image);
  }
}
