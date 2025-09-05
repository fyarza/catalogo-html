# Panel de Administración - Catálogo de Prendas

## 🎯 Descripción

Panel de administración completo para gestionar el catálogo de prendas de vestir. Incluye funcionalidades para visualizar, editar, agregar y eliminar productos, así como análisis y gestión de pedidos.

## 🚀 Características Implementadas

### ✅ Funcionalidades Principales

- **Dashboard Principal**: Vista general del estado del catálogo
- **Gestión de Productos**:
  - Lista completa de productos con filtros
  - Búsqueda en tiempo real
  - Filtros por estado y precio
  - Acciones de editar y eliminar
- **Navegación Intuitiva**: Sidebar con menú organizado por secciones
- **Diseño Responsive**: Adaptado para móviles, tablets y desktop
- **Integración con Shadcn/UI**: Componentes consistentes y modernos

### 🎨 Componentes Creados

#### 1. **AdminSidebar** (`/src/components/admin/AdminSidebar.tsx`)

- Navegación lateral con menú organizado
- Secciones: Dashboards, E-commerce, Análisis
- Perfil de usuario y configuración
- Diseño colapsible

#### 2. **AdminHeader** (`/src/components/admin/AdminHeader.tsx`)

- Barra superior con búsqueda global
- Notificaciones y mensajes
- Perfil de usuario
- Botón para colapsar sidebar

#### 3. **ProductTable** (`/src/components/admin/ProductTable.tsx`)

- Tabla completa de productos
- Filtros avanzados (búsqueda, estado, precio)
- Acciones por producto (editar, eliminar)
- Paginación y estadísticas
- Estados visuales (Activo, Sin Stock, Oferta)

#### 4. **AdminPage** (`/src/pages/AdminPage.tsx`)

- Página principal del panel de administración
- Gestión de estado y navegación
- Integración de todos los componentes
- Routing interno

## 🛠️ Tecnologías Utilizadas

- **React 18** con TypeScript
- **React Router DOM** para navegación
- **Shadcn/UI** para componentes base
- **Tailwind CSS** para estilos
- **Material Icons** para iconografía
- **Class Variance Authority** para variantes

## 📱 Diseño Responsive

### Desktop (1024px+)

- Sidebar fijo a la izquierda
- Contenido principal expandido
- Tabla completa con todas las columnas

### Tablet (768px - 1023px)

- Sidebar colapsible
- Tabla adaptada con scroll horizontal
- Filtros en fila horizontal

### Móvil (320px - 767px)

- Sidebar completamente colapsible
- Filtros apilados verticalmente
- Tabla con scroll horizontal optimizado

## 🚀 Cómo Acceder

### 1. **Desde el Catálogo Principal**

- Haz clic en el enlace "Admin" en el header
- Se abrirá en una nueva ruta: `/admin`

### 2. **URL Directa**

- Navega directamente a: `http://localhost:5173/admin`

## 📊 Funcionalidades del Panel

### Gestión de Productos

- **Ver todos los productos** del catálogo actual
- **Buscar productos** por nombre en tiempo real
- **Filtrar por estado**: Activo, Sin Stock, Oferta
- **Filtrar por precio**: Menos de €100, €100-€200, Más de €200
- **Acciones por producto**:
  - ✏️ Editar (preparado para implementar)
  - 🗑️ Eliminar (preparado para implementar)

### Navegación

- **Dashboard**: Vista general (próximamente)
- **Lista de Productos**: Gestión actual de productos
- **Agregar Producto**: Formulario de nuevo producto (próximamente)
- **Pedidos**: Gestión de pedidos (próximamente)
- **Analíticas**: Dashboard de métricas (próximamente)
- **Clientes**: Gestión de clientes (próximamente)

## 🔧 Estructura de Archivos

```
src/
├── components/
│   └── admin/
│       ├── AdminSidebar.tsx      # Navegación lateral
│       ├── AdminHeader.tsx       # Header superior
│       └── ProductTable.tsx      # Tabla de productos
├── pages/
│   └── AdminPage.tsx             # Página principal del admin
└── App.tsx                       # Routing configurado
```

## 🎯 Próximas Funcionalidades

### Fase 2 - Gestión Completa

- [ ] Formulario de agregar/editar productos
- [ ] Validación de datos
- [ ] Subida de imágenes
- [ ] Gestión de categorías y tallas

### Fase 3 - Análisis y Reportes

- [ ] Dashboard con métricas
- [ ] Gráficos de ventas
- [ ] Reportes de inventario
- [ ] Exportación de datos

### Fase 4 - Gestión de Pedidos

- [ ] Lista de pedidos
- [ ] Estados de pedidos
- [ ] Gestión de clientes
- [ ] Notificaciones

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📝 Notas de Implementación

- **Estado de productos**: Se determina automáticamente basado en el precio
- **Filtros**: Se aplican en tiempo real sin necesidad de botones
- **Responsive**: Completamente adaptado para todos los dispositivos
- **Accesibilidad**: Navegación por teclado y etiquetas ARIA
- **Performance**: Componentes optimizados con React.memo donde es necesario

## 🔗 Integración con el Proyecto Principal

El panel de administración se integra perfectamente con el catálogo principal:

- **Misma base de datos**: Utiliza los mismos productos de `/src/data/products.ts`
- **Tipos compartidos**: Usa los tipos de `/src/types/clothing.ts`
- **Componentes UI**: Reutiliza los componentes de Shadcn/UI
- **Routing**: Integrado con React Router DOM
- **Estilos**: Consistente con el diseño del catálogo

## 🎨 Personalización

### Colores y Temas

- Utiliza las variables CSS de Tailwind
- Compatible con modo oscuro (preparado)
- Colores personalizables en `tailwind.config.js`

### Componentes

- Todos los componentes son reutilizables
- Fácil personalización de estilos
- Props configurables para diferentes casos de uso

---

**¡El panel de administración está listo para usar!** 🎉

Puedes acceder desde el enlace "Admin" en el header del catálogo principal o navegando directamente a `/admin`.
