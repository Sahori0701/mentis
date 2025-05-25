# Crear README.md
@"
# Mentis 🧠

Sistema integral de gestión de salud mental para Colombia. Plataforma que conecta pacientes con psicólogos especializados, facilitando el agendamiento de citas y la gestión de historia clínica digital.

## 🏥 Características Principales

- **Agendamiento de Citas**: Sistema completo de reservas con psicólogos
- **Historia Clínica Digital**: Cumple normativa colombiana
- **Gestión de Pacientes**: Registro y seguimiento integral
- **Panel de Psicólogos**: Gestión de agenda, consultas e historia clínica
- **Panel de Administración**: Reportes RIPS y gestión del sistema
- **Cumplimiento Normativo**: Ley 1581/2012, Resolución 1995/1999

## 👥 Tipos de Usuario

### 🧑‍⚕️ Pacientes
- Buscar psicólogos por especialidad
- Agendar y gestionar citas
- Ver historial de consultas
- Acceso a historia clínica personal

### 👨‍⚕️ Psicólogos
- Gestionar agenda y disponibilidad
- Ver citas asignadas
- Crear y actualizar historia clínica
- Generar notas de sesión
- Reportes de consultas

### ⚙️ Administradores
- Gestión de usuarios (pacientes y psicólogos)
- Reportes RIPS automáticos
- Estadísticas de la plataforma
- Configuración del sistema
- Auditoría de acciones

## 🚀 Tecnologías

### Frontend
- **React 18** + Vite
- **Tailwind CSS** para estilos
- **React Router** para navegación
- **React Hook Form** para formularios
- **Axios** para API calls

### Backend
- **Node.js** + Express
- **PostgreSQL** + Prisma ORM
- **JWT** para autenticación
- **bcryptjs** para encriptación

### Despliegue (Gratuito)
- **Frontend**: Vercel
- **Backend**: Render
- **Base de Datos**: Supabase (PostgreSQL)

## 🛠️ Desarrollo Local

``````bash
# Clonar repositorio
git clone https://github.com/Sahori0701/mentis.git
cd mentis

# Configurar backend
cd backend && npm install && npm run dev

# Configurar frontend
cd frontend && npm install && npm run dev