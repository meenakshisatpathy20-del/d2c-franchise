import { Link } from 'react-router-dom'

export default function ComingSoon({ title }) {
  return (
    <section className="section grid min-h-[70vh] place-items-center text-center">
      <div>
        <p className="eyebrow">Building this page</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
          <span className="text-gradient">{title}</span>
        </h1>
        <p className="mt-4 text-navy-900/60">This page arrives in the next steps.</p>
        <Link to="/apply" className="btn-primary mt-8">
          Apply Now
        </Link>
      </div>
    </section>
  )
}