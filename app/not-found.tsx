import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="flex items-center space-x-6">
        <h1 className="text-6xl font-bold text-black border-r-2 border-black/30 pr-6">404</h1>
        <h2 className="text-2xl font-semibold text-black">This page could not be found.</h2>
      </div>
      <Link 
        href="/"
        className="mt-12 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-zinc-800 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
