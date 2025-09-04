export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">StyleCatalog</h3>
            <p className="text-sm text-muted-foreground">
              Tu destino para la moda más actual y tendencias de temporada.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Catálogo</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Ofertas</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Categorías */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categorías</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Ropa Femenina</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Ropa Masculina</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Calzado</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Accesorios</a></li>
            </ul>
          </div>

          {/* Soporte */}
          <div className="space-y-4">
            <h4 className="font-semibold">Soporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Ayuda</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Envíos</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Devoluciones</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Tallas</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 StyleCatalog. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
