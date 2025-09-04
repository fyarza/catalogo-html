# Catálogo de Prendas de Vestir

Una aplicación web moderna para mostrar un catálogo de prendas de vestir, construida con React, TypeScript, Tailwind CSS y Shadcn/UI.

## 🚀 Características

- **Interfaz Moderna**: Diseño limpio y responsive usando Tailwind CSS
- **Componentes Reutilizables**: Basados en Shadcn/UI para consistencia
- **Sistema de Filtros**: Filtrado avanzado por categoría, precio, talla, color y marca
- **Múltiples Vistas**: Vista de grilla y lista para los productos
- **Favoritos**: Sistema para marcar productos como favoritos
- **Carrito de Compras**: Funcionalidad básica de carrito (estructura preparada)
- **TypeScript**: Tipado fuerte para mejor desarrollo y mantenimiento

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # Componentes base de Shadcn/UI
│   ├── layout/          # Componentes de layout (Header, Footer, Layout)
│   └── catalog/         # Componentes específicos del catálogo
├── pages/               # Páginas de la aplicación
├── types/               # Tipos TypeScript
├── lib/                 # Utilidades y helpers
├── hooks/               # Custom hooks (preparado para futuras funcionalidades)
├── services/            # Servicios para API calls (preparado)
└── assets/              # Recursos estáticos
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Superset de JavaScript con tipado
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Shadcn/UI** - Componentes de UI reutilizables
- **Lucide React** - Iconos modernos
- **Class Variance Authority** - Gestión de variantes de componentes

## 🚀 Instalación y Uso

1. **Instalar dependencias**:

   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:

   ```bash
   npm run dev
   ```

3. **Construir para producción**:

   ```bash
   npm run build
   ```

4. **Vista previa de la build**:
   ```bash
   npm run preview
   ```

## 🎨 Componentes Principales

### Layout Components

- `Header`: Barra de navegación con búsqueda y carrito
- `Footer`: Pie de página con enlaces útiles
- `Layout`: Wrapper principal de la aplicación

### Catalog Components

- `ClothingCard`: Tarjeta de producto individual
- `FilterSidebar`: Panel lateral de filtros
- `CatalogPage`: Página principal del catálogo

## 📝 Tipos de Datos

El proyecto incluye tipos TypeScript bien definidos para:

- `ClothingItem`: Estructura de un producto
- `FilterOptions`: Opciones de filtrado
- `CartItem`: Items del carrito de compras
- `ClothingCategory`, `Size`, `Color`: Entidades relacionadas

## 🔧 Próximos Pasos

La estructura está preparada para implementar:

1. **Integración con API**:

   - Conectar con un backend real
   - Implementar servicios en la carpeta `services/`

2. **Funcionalidad del Carrito**:

   - Estado global del carrito
   - Persistencia local
   - Checkout process

3. **Autenticación**:

   - Login/registro de usuarios
   - Perfiles de usuario

4. **Funcionalidades Adicionales**:
   - Búsqueda avanzada
   - Reseñas y ratings
   - Wishlist persistente
   - Comparación de productos

## 📱 Responsive Design

La aplicación está completamente optimizada para:

- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1400px+)

## 🎯 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Vista previa de la build
- `npm run lint` - Linting del código

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
