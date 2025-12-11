# --- ETAPA 1: Construir el JAR (Maven) ---
FROM eclipse-temurin:21-jdk-alpine as build
WORKDIR /app

# Copiamos los archivos de configuración de Maven
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Descargamos las librerías (esto optimiza la caché)
# Damos permisos de ejecución al wrapper de Maven
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline

# Copiamos el código fuente y compilamos
COPY src ./src
RUN ./mvnw clean package -DskipTests

# --- ETAPA 2: Ejecutar (Java Runtime) ---
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copiamos el JAR generado en la etapa anterior
# El nombre del jar suele ser gallery-service-0.0.1-SNAPSHOT.jar, usamos asterisco para asegurar
COPY --from=build /app/target/*.jar app.jar

# Exponemos el puerto 8080
EXPOSE 8080

# Comando de arranque
ENTRYPOINT ["java", "-jar", "app.jar"]