import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Not found — zsapping.net"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />
      <Navbar />
      <main className="flex min-h-[70vh] items-center pt-32 sm:pt-40">
        <div className="mx-auto max-w-xl px-5 text-center sm:px-8">
          <p className="font-headline text-sm font-semibold uppercase tracking-wider text-primary">
            404
          </p>
          <h1 className="mt-3 font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-on-surface-variant">
            The page you're looking for has moved or doesn't exist.
          </p>
          <Link to="/" className="btn-primary mt-8">
            Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
