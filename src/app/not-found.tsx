import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h2 className="text-3xl font-bold mb-4">404 - Not Found</h2>
      <p className="mb-6">Could not find the requested resource</p>
      <Link 
        href="/"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
      >
        Return Home
      </Link>
    </div>
  )
} 