import { CatalogHeader } from "@/components/layout/CatalogHeader";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { CatalogFooter } from "@/components/layout/CatalogFooter";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { products } from "@/data/products";
import { useSearch } from "@/hooks/useSearch";

function CatalogApp() {
  const { searchTerm, setSearchTerm, filteredProducts } = useSearch(products);

  return (
    <div className="h-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 transition-colors duration-300 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="transition-all duration-1000 ease-out">
          <CatalogHeader
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <ProductGrid products={filteredProducts} searchTerm={searchTerm} />
          <CatalogFooter />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <CatalogApp />
    </ThemeProvider>
  );
}

export default App;
