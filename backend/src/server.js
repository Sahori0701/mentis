const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
require('dotenv').config()

const app = express()

// Middleware de seguridad
app.use(helmet())

// CORS - permitir requests desde cualquier origen por ahora
app.use(cors({
  origin: true,
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Logging solo en desarrollo
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    message: '🧠 Mentis API - Sistema de Gestión de Salud Mental',
    status: 'success',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    platform: 'Vercel',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/health',
      api: '/api',
      test: '/test'
    }
  })
})

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'Mentis Backend API',
    platform: 'Vercel',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString(),
    node_version: process.version
  })
})

// API info
app.get('/api', (req, res) => {
  res.json({
    message: 'Mentis API v1.0.0',
    platform: 'Vercel',
    status: 'En desarrollo',
    endpoints: {
      auth: '/api/auth (próximamente)',
      users: '/api/users (próximamente)',
      appointments: '/api/appointments (próximamente)',
      patients: '/api/patients (próximamente)',
      psychologists: '/api/psychologists (próximamente)'
    }
  })
})

// Endpoint de prueba
app.get('/test', (req, res) => {
  res.json({
    message: 'Test endpoint funcionando correctamente',
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url,
    userAgent: req.get('User-Agent'),
    ip: req.ip
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint no encontrado',
    path: req.originalUrl,
    message: 'Verifica la URL',
    available_endpoints: ['/', '/health', '/api', '/test']
  })
})

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(err.status || 500).json({
    error: 'Error interno del servidor',
    message: process.env.NODE_ENV === 'production' ? 'Algo salió mal' : err.message
  })
})

// Solo para desarrollo local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log('🚀 Servidor Mentis iniciado')
    console.log('📍 Puerto:', PORT)
    console.log('🔗 URL: http://localhost:' + PORT)
  })
}

// Exportar para Vercel
module.exports = app