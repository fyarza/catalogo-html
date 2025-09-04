export function CatalogFooter() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="my-16 text-center">
      <button
        className="inline-flex items-center px-6 py-3 mb-8 text-base font-medium text-white bg-gray-800 rounded-md border border-transparent shadow-sm transition-colors duration-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
        onClick={handlePrint}
      >
        <span className="mr-2 material-icons">picture_as_pdf</span>
        Generar Catálogo en PDF
      </button>
    </footer>
  );
}
