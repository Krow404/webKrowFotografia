export interface GalleryImage {
  id?: number; // El '?' es porque al crearla nueva, aún no tiene ID.
  title: string;
  description: string;
  imageUrl: string;
}