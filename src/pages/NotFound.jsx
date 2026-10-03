import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section grid min-h-[70vh] place-items-center text-center">
      <div>
        <p className="font-display text-8xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-bold">This page does not exist</h1>
        <Link to="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  )
}