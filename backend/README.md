# README.md
# MindTrack Backend
Backend for the MindTrack mental health tracking app.

## Setup
1. Install Docker and Docker Compose.
2. Run `docker-compose up --build` to start the app and DB.
3. Test endpoints with Postman:
   - POST http://localhost:8080/api/auth/register
     Body: { "email": "test@example.com", "passwordHash": "password123" }
   - POST http://localhost:8080/api/auth/login
     Body: { "email": "test@example.com", "passwordHash": "password123" }
   - POST http://localhost:8080/api/moods (requires JWT)
     Body: { "user": { "id": 1 }, "moodScore": 7, "notes": "Feeling okay" }

## Next Steps
- Implement JWT validation for /api/moods.
- Add unit tests with JUnit.
- Start frontend with React.

# 4. Instrucciones para Correr
1. Crea el proyecto con Spring Initializr o usa el código proporcionado.
2. Asegúrate de tener Docker instalado.
3. Coloca los archivos en la estructura indicada.
4. Corre `mvn clean package` para generar el JAR.
5. Ejecuta `docker-compose up --build` para levantar la app y DB.
6. Usa Postman para probar:
   - Registro: POST /api/auth/register
   - Login: POST /api/auth/login
   - Crear Mood: POST /api/moods (necesita JWT del login)