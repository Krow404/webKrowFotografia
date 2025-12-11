package com.webKrowFotografia.gallery_service;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// @Entity: Le dice a Spring "Esta clase equivale a una tabla en la base de datos".
@Entity
// @Table: "La tabla se llamará 'images'".
@Table(name = "images")
// @Data (Lombok): ¡Ahorro de tiempo! Genera Getters, Setters, toString, Equals automáticamente.
@Data
// @NoArgsConstructor / @AllArgsConstructor (Lombok): Genera los constructores vacío y con todo.
@NoArgsConstructor
@AllArgsConstructor
public class GalleryImage {

    @Id // Esto es la Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incremental (1, 2, 3...)
    private Long id;

    private String title;

    // Un campo un poco más largo para la descripción
    @Column(length = 1000)
    private String description;

    @Column(length = 4096)
    private String imageUrl; // Por ahora guardaremos la URL, luego veremos S3.
}
