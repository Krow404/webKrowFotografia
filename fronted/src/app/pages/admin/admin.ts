import { Component, inject } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { GalleryService } from '../../services/galleryService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class AdminComponent {
  private fb = inject(FormBuilder);
  private galleryService = inject(GalleryService);
  private router = inject(Router);
// Definimos el formulario y sus reglas
  uploadForm = this.fb.group({
    title: ['',[Validators.required]],
    description: ['',[Validators.required]],
    imageUrl: ['',[Validators.required]]
  });

  onSubmit(){
    if(this.uploadForm.valid){
      //Extraemos los valores del form
      const formValue = this.uploadForm.value;
      // Llamamos al servicio (Java)
      // Usamos 'as any' temporalmente porque el form puede tener nulls, pero sabemos que están llenos por el valid
      this.galleryService.createImage(formValue as any).subscribe({
        next: () => {
          alert('Foto subida con exito!');
          this.router.navigate(['/']);// Nos regresa a la galería
        },
        error: (err) => {
          console.error(err);
          alert('error al subir la foto!');
        }
      });
    }else{
      alert('Por favor llena todos los campos');
    }
  }

}
