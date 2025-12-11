package com.webKrowFotografia.gallery_service;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/images")// Todas las rutas empezarán con esto
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // ¡IMPORTANTE! Permite que Angular acceda
public class ImageController {

    private final ImageService imageService;

    // POST: Para crear una nueva imagen
    // JSON esperado: { "title": "...", "url": "..." }
    @PostMapping
    public GalleryImage createImage(@RequestBody GalleryImage image){
        return imageService.saveImage(image);
    }

    // GET: Para leer las imágenes
    @GetMapping
    public List<GalleryImage> getAllImages(){
        return imageService.getAllImages();
    }
}
