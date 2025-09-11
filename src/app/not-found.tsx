import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="mt-2 text-lg text-gray-600">Oops! Page not found.</p>
      <Link
        href="/dashboard"
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Go back home
      </Link>
    </div>
  );
}
