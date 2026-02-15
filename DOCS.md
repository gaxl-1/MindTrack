# Documentación Técnica - MinTrack

Este documento detalla la arquitectura, decisiones de diseño y procesos de desarrollo para el proyecto MinTrack.

## 🧠 Backend (Spring Boot)

### Arquitectura de Capas
- **Controller**: Maneja las peticiones HTTP y valida la entrada mediante DTOs.
- **Service**: Contiene la lógica de negocio pura. Los controladores delegan aquí todas las acciones complejas.
- **Repository**: Capa de abstracción sobre Spring Data JPA para el acceso a la base de datos PostgreSQL.
- **Entity**: Modelos de datos persistentes.
- **Config**: Configuraciones globales (Seguridad, CORS, JWT).
- **DTO (Data Transfer Objects)**: Objetos para mover datos entre capas sin exponer las entidades de base de datos directamente.

### Seguridad
- **JWT**: Se utiliza para autenticación stateless. El token se genera al hacer login y se valida en cada petición mediante `JwtAuthenticationFilter`.
- **Spring Security**: Configurado para proteger todas las rutas excepto las de autenticación y documentación API.

### API Documentation
- Se utiliza **SpringDoc OpenAPI**. La interfaz de Swagger está disponible en `/swagger-ui.html`.

---

## 🎨 Frontend (React + Vite)

### Tecnologías
- **Vite**: Build tool ultrarrápido.
- **React + TS**: Para una interfaz reactiva y tipada.
- **Axios**: Cliente HTTP con interceptores para manejar el token JWT automáticamente.
- **Lucide-React**: Set de iconos modernos.

### Estilos
- Se ha optado por **Vanilla CSS** con variables personalizadas y utilidades de diseño modernas (Glassmorphism, Dark Mode) para maximizar el control y rendimiento sin dependencias pesadas.

---

## 🐳 Dockerización

El proyecto utiliza un sistema de múltiples contenedores:
1. **db**: Imagen oficial de PostgreSQL 15.
2. **backend**: Basado en `eclipse-temurin:17-jre-jammy`. El proceso de build requiere generar el JAR previamente (`mvn package`).
3. **frontend** (Configuración pendiente): Se recomienda servir mediante Nginx en producción.

---

## 📈 Próximos Pasos Sugeridos
1. **Validación de Datos**: Añadir más validaciones en el frontend antes de enviar al backend.
2. **Dashboard de Gráficas**: Utilizar `recharts` para visualizar el progreso del ánimo.
3. **CI/CD**: Configurar GitHub Actions para testing automático antes de cada merge.
4. **Cloud Deployment**: Preparar el despliegue a AWS o Heroku/Render utilizando los contenedores Docker.
