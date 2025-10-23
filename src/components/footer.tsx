import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const developerName = "Ian Abreu";
  const url = "https://ian-abreu.netlify.app/";

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-4">
      <div className="container border-t border-gray-300 max-w-5xl px-4 mx-auto text-center">
        <p className="text-sm text-gray-600 mt-2">
          Desenvolvido por{" "}
          <Link
            href={url}
            target="_blank"
            className="font-bold"
            aria-label="Abrir site do desenvolvedor"
          >
            {developerName}
          </Link>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          &copy; {currentYear} Eco Diário. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
