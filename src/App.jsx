import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'

const Home = lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="models" element={<ComingSoon title="Franchise Models" />} />
        <Route path="why-d2c" element={<ComingSoon title="Why D2C" />} />
        <Route path="brands" element={<ComingSoon title="Brands" />} />
        <Route path="stores" element={<ComingSoon title="Stores" />} />
        <Route path="about" element={<ComingSoon title="About Us" />} />
        <Route path="faq" element={<ComingSoon title="FAQ" />} />
        <Route path="contact" element={<ComingSoon title="Contact" />} />
        <Route path="apply" element={<ComingSoon title="Apply Now" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="admin" element={<ComingSoon title="Admin Login" />} />
    </Routes>
  )
}