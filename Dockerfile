FROM php:8.2.4-apache

# Copiamos el contenido del directorio actual al directorio /var/www/html del contenedor
WORKDIR /var/www/html/
COPY . .

# Exponemos el puerto 80
EXPOSE 8080

# Iniciamos Apache en el arranque del contenedor
CMD ["apache2-foreground"]
