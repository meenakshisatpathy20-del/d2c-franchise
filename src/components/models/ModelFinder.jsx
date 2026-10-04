import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { formOptions } from '../../data/content'

const questions = [
  {
    key: 'budget',
    q: 'What is your investment budget?',
    options: [
      { label: '₹10 – 15 Lakhs', value: 1 },
      { label: '₹15 – 30 Lakhs', value: 2 },
      { label: '₹30 – 60 Lakhs', value: 3 },
      { label: '₹60 Lakhs – 1 Crore', value: 4 },
      { label: 'Above ₹1 Crore', value: 5 },
    ],
  },
  {
    key: 'space',
    q: 'How much space can you arrange?',
    options: [
      { label: 'Up to 600 sqft', value: 1 },
      { label: '600 – 1,500 sqft', value: 2 },
      { label: '1,500 – 3,000 sqft', value: 3 },
      { label: 'More than 3,000 sqft', value: 4 },
    ],
  },
  {
    key: 'interest',
    q: 'Which business excites you most?',
    options: [
      { label: 'Lifestyle retail store', value: 'retail' },
      { label: 'Gym & fitness', value: 'fitness' },
      { label: 'Cafe & food', value: 'cafe' },
      { label: 'Gaming & sports', value: 'gaming' },
    ],
  },
  {
    key: 'involvement',
    q: 'How involved do you want to be?',
    options: [
      { label: 'I will run it full-time', value: 'FOFO' },
      { label: 'Investment only — company runs it', value: 'FOCO' },
    ],
  },
]

const results = {
  mini: { name: 'D2C Mall — 500 sqft', invest: '~₹13 Lakhs', form: 0, image: '/images/store-3.webp' },
  classic: { name: 'D2C Mall — 1000 sqft', invest: '~₹22 Lakhs', form: 1, image: '/images/store-2.webp' },
  flagship: { name: 'D2C Mall — 2000 sqft', invest: '~₹55 Lakhs', form: 2, image: '/images/store-front-render.webp' },
  kasrat: { name: 'Kasrat Gym — 2,500 sqft', invest: '₹51 Lakhs', form: 3, image: '/images/kasrat-interior-1.webp' },
  cafe: { name: 'Leisure Cafe — ~2,000 sqft', invest: '₹21 Lakhs', form: 4, image: '/images/cafe-terrace.webp' },
  gaming: { name: 'Gaming Zone — ~3,000 sqft', invest: '₹1 Crore', form: 5, image: '/images/gaming-pickleball.webp' },
  mega: { name: 'D2C Mall Mega — 12,500 sqft', invest: '₹2.51 Crore', form: 6, image: '/images/mall-cafe.webp' },
}

function recommend({ budget, space, interest }) {
  if (budget >= 5 && space >= 4) return 'mega'
  if (interest === 'gaming' && budget >= 4) return 'gaming'
  if (interest === 'fitness' && budget >= 3) return 'kasrat'
  if (interest === 'cafe' && budget >= 2) return 'cafe'
  if (budget >= 3 && space >= 3) return 'flagship'
  if (budget >= 2 && space >= 2) return 'classic'
  return 'mini'
}

export default function ModelFinder() {
  const [answers, setAnswers] = useState({})
  const [step, setStep] = useState(0)
  const done = step >= questions.length
  const result = done ? results[recommend(answers)] : null

  const choose = (value) => {
    setAnswers((a) => ({ ...a, [questions[step].key]: value }))
    setStep((s) => s + 1)
  }

  const reset = () => {
    setAnswers({})
    setStep(0)
  }

  return (
    <section id="finder" className="section bg-linear-to-br from-saffron-50 via-white to-leaf-50">
      <SectionTitle eyebrow="Model finder" title="Not sure which one?" highlight="Ask 4 questions." center />

      <div className="glass mx-auto mt-10 max-w-2xl rounded-3xl p-6 md:p-8">
        <div className="flex gap-1.5">
          {questions.map((q, i) => (
            <span key={q.key} className={`h-1.5 flex-1 rounded-full transition ${i < step ? 'bg-saffron-500' : 'bg-navy-100'}`} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div key={step} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
              <p className="mt-6 text-xs font-semibold text-navy-900/40">
                Question {step + 1} of {questions.length}
              </p>
              <h3 className="mt-1 text-2xl font-bold">{questions[step].q}</h3>
              <div className="mt-6 grid gap-3">
                {questions[step].options.map((o) => (
                  <button
                    key={o.label}
                    onClick={() => choose(o.value)}
                    className="rounded-2xl border-2 border-navy-50 bg-white px-5 py-4 text-left font-semibold transition hover:border-saffron-400 hover:bg-saffron-50"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-6 text-center">
              <Sparkles className="mx-auto text-saffron-500" size={32} />
              <p className="mt-3 text-sm font-semibold text-navy-900/60">Your best match</p>
              <img src={result.image} alt="" className="mx-auto mt-4 aspect-video w-full max-w-md rounded-2xl object-cover" />
              <h3 className="mt-4 text-2xl font-extrabold">{result.name}</h3>
              <p className="mt-1 text-navy-900/60">Investment {result.invest}</p>
              <p className="mt-1 text-sm text-navy-900/60">
                Operating model: <strong>{answers.involvement}</strong>
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link to={`/apply?model=${encodeURIComponent(formOptions.models[result.form])}`} className="btn-primary">
                  Apply for this <ArrowRight size={18} />
                </Link>
                <button onClick={reset} className="btn-outline">
                  <RotateCcw size={18} /> Start again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}