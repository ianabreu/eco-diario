import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-gray-50">
      <div className="text-8xl mb-4 animate-bounce text-green-600">🌱</div>
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-primary mb-6">
        Ops! Página Não Encontrada.
      </h2>

      <p className="text-lg text-gray-600 max-w-md mb-8">
        Parece que esta página ainda não deu frutos na nossa horta! Verifique o
        endereço.
      </p>

      <Link href="/" passHref replace>
        <button className="px-6 py-3 bg-green-700 text-white font-medium rounded-lg shadow-lg hover:bg-green-800 transition duration-300">
          Voltar para a Página Inicial
        </button>
      </Link>
      <Link href="/quiz" passHref replace>
        <button className="mt-4 text-sm text-gray-500 hover:text-gray-700 transition">
          Ou comece um Quiz para descontrair
        </button>
      </Link>
    </div>
  );
}
