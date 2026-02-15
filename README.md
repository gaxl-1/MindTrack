# MinTrack - Salud Mental y Seguimiento de Ánimo

MinTrack es una aplicación Full Stack diseñada para ayudar a los usuarios a realizar un seguimiento de su estado de ánimo y bienestar emocional de manera sencilla y segura.

## 🚀 Arquitectura del Proyecto

El proyecto está dividido en dos partes principales:

- **Backend**: Desarrollado con **Java 17** y **Spring Boot 3.5**.
- **Frontend**: Desarrollado con **React**, **TypeScript** y **Vite**.
- **Base de Datos**: **PostgreSQL**.

### Características Principales

- **Autenticación Segura**: Implementación de JWT (JSON Web Tokens).
- **Gestión de Ánimos**: CRUD básico para registrar y consultar estados de ánimo.
- **Documentación API**: Integración con Swagger/OpenAPI.
- **Escalabilidad**: Estructura de código siguiendo patrones de Service/Repository y DTOs.
- **Dockerizado**: Configuración lista para despliegue con Docker Compose.

---

## 🛠️ Tecnologías Utilizadas

### Backend
- Spring Boot 3.5
- Spring Security (JWT)
- Spring Data JPA
- PostgreSQL
- Lombok
- SpringDoc OpenAPI (Swagger)
- Jakarta Validation

### Frontend
- React (Vite)
- TypeScript
- CSS Vanilla (Siguiendo mejores prácticas de diseño)

---

## 🚦 Cómo Iniciar el Proyecto

### Requisitos Previos
- Docker y Docker Compose
- Java 17 (opcional si usas Docker)
- Node.js (opcional para desarrollo frontend)

### Ejecución con Docker (Recomendado)

1. Clona el repositorio.
2. Construye el backend:
   ```bash
   cd backend
   mvn clean package -DskipTests
   cd ..
   ```
3. Levanta los servicios:
   ```bash
   docker-compose up -d
   ```
4. Accede a la documentación de la API en: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

### Ejecución en Desarrollo

#### Backend:
```bash
cd backend
./mvnw spring-boot:run
```

#### Frontend:
```bash
cd frontend
npm install
npm run dev
```

---

## 📂 Estructura de Carpetas

```text
/
├── backend/            # Código fuente de la API
│   ├── src/
│   │   ├── main/java/com/mindtrack/
│   │   │   ├── config/      # Configuraciones (Seguridad, JWT)
│   │   │   ├── controller/  # Controladores REST
│   │   │   ├── service/     # Lógica de Negocio
│   │   │   ├── repository/  # Acceso a Datos
│   │   │   ├── entity/      # Modelos de Base de Datos
│   │   │   ├── dto/         # Objetos de Transferencia de Datos
│   │   │   └── exception/   # Manejo Global de Errores
│   └── Dockerfile
├── frontend/           # Código fuente de la interfaz
└── docker-compose.yml  # Orquestación de contenedores
```

---

## 📝 Documentación de la API

Una vez que el backend esté corriendo, puedes explorar todos los endpoints en:
`http://localhost:8080/swagger-ui.html`

### Endpoints Principales:
- `POST /api/auth/register`: Registro de nuevos usuarios.
- `POST /api/auth/login`: Autenticación y obtención de Token.
- `GET /api/moods`: Obtener historial de ánimos (Requiere JWT).
- `POST /api/moods`: Registrar nuevo ánimo (Requiere JWT).

---

## 🤝 Contribuir
Si deseas colaborar, por favor abre un Pull Request o crea un Issue.

---

**Desarrollado con ❤️ por GaelDev.**
