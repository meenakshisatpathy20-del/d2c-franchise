import { lazy } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'

const Home = lazy(() => import('./pages/Home'))
const Models = lazy(() => import('./pages/Models'))
const Catalogue = lazy(() => import('./pages/Catalogue'))
const BrandPage = lazy(() => import('./pages/BrandPage'))
const WhyD2C = lazy(() => import('./pages/WhyD2C'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="models" element={<Models />} />
        <Route path="why-d2c" element={<WhyD2C />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="catalogue/:brandId" element={<BrandPage />} />
        <Route path="brands" element={<Navigate to="/catalogue" replace />} />
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