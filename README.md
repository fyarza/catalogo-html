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

## 🌐 Deploy en Netlify

### Configuración Automática

El proyecto está configurado para desplegarse automáticamente en Netlify:

#### 1. **Configuración de Build**:
```
Build command: npm run build
Publish directory: dist
Node version: 18+
```

#### 2. **Deploy Automático**:
- ✅ **Conectado a GitHub**: Los cambios en `main` activan deploy automático
- ✅ **Build optimizado**: Vite genera una build optimizada para producción
- ✅ **Tiempo de deploy**: 1-3 minutos típicamente

#### 3. **URL de Producción**:
🔗 **https://catalogodemoweb.netlify.app/**

### Proceso de Deploy

1. **Desarrollo Local**:
   ```bash
   npm run dev      # Desarrollo
   npm run build    # Test local de build
   npm run preview  # Preview de la build
   ```

2. **Deploy a Producción**:
   ```bash
   git add .
   git commit -m "Nueva funcionalidad"
   git push origin main
   ```

3. **Netlify automáticamente**:
   - Detecta el push a `main`
   - Ejecuta `npm install`
   - Ejecuta `npm run build`
   - Despliega el contenido de `dist/`

### Funcionalidades en Producción

- ✅ **Catálogo completo** con 12 productos
- ✅ **Búsqueda en tiempo real** funcional
- ✅ **Diseño responsive** optimizado para móviles
- ✅ **Generación de PDF** del catálogo
- ✅ **Fuentes Google** (Poppins, Material Icons)
- ✅ **Performance optimizada** con Vite

### Monitoreo del Deploy

Para verificar el estado del deploy:

1. **Dashboard de Netlify** → Tu sitio → **"Deploys"**
2. **Estados posibles**:
   - 🟡 **Building**: Construyendo la aplicación
   - 🟢 **Published**: Deploy exitoso
   - 🔴 **Failed**: Error en el build

3. **Logs detallados**: Disponibles en cada deploy individual

### Troubleshooting

Si el deploy falla:

1. **Verifica localmente**:
   ```bash
   npm run build  # Debe completarse sin errores
   ```

2. **Revisa los logs** en Netlify para errores específicos

3. **Errores comunes**:
   - Dependencias faltantes
   - Errores de TypeScript
   - Problemas de importación

### Configuración Avanzada (Opcional)

Puedes crear un `netlify.toml` para configuración avanzada:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
