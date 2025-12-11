# --- ETAPA 1: BUILD ---
# Usamos una imagen con Node para compilar
FROM node:20-alpine as build-step

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Copiamos el código y compilamos
COPY . .
RUN npm run build

# --- ETAPA 2: RUN ---
# Usamos Nginx para servir (la imagen final pesará muy poco)
FROM nginx:alpine

# Copiamos la configuración que creaste
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los archivos compilados desde la Etapa 1
# ¡VERIFICA ESTA RUTA! En Angular 17+ suele ser dist/nombre-proyecto/browser
COPY --from=build-step /app/dist/fronted/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]