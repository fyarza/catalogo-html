import { RainbowButton } from "@/components/ui/rainbow-button";

export function CatalogFooter() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="mt-16 text-center">
      <RainbowButton onClick={handlePrint} className="mb-8">
        <span className="mr-2 material-icons">picture_as_pdf</span>
        Generar Catálogo en PDF
      </RainbowButton>
    </footer>
  );
}
