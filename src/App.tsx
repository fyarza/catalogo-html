import { CatalogHeader } from "@/components/layout/CatalogHeader";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { CatalogFooter } from "@/components/layout/CatalogFooter";
import { products } from "@/data/products";
import { useSearch } from "@/hooks/useSearch";

function App() {
  const { searchTerm, setSearchTerm, filteredProducts } = useSearch(products);

  return (
    <div className="bg-gray-50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <CatalogHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ProductGrid products={filteredProducts} searchTerm={searchTerm} />
        <CatalogFooter />
      </div>
    </div>
  );
}

export default App;
