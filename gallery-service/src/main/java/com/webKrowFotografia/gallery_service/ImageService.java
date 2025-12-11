package com.webKrowFotografia.gallery_service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor // Inyecta el repositorio automáticamente
public class ImageService {

    private final ImageRepository imageRepository;

    // Método para guardar una imagen
    public GalleryImage saveImage(GalleryImage image) {
        // Aquí podrías poner validaciones antes de guardar
        return imageRepository.save(image);
    }

    // Método para traer todas las imágenes
    public List<GalleryImage> getAllImages() {
        return imageRepository.findAll();
    }
}
