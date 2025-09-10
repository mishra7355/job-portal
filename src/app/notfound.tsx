export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="mt-2 text-lg text-gray-600">Oops! Page not found.</p>
      <a
        href="/"
        className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Go Home
      </a>
    </div>
  );
}
