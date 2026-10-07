import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Estimator from './components/Estimator'
import ProductShowcase from './components/ProductShowcase'
import ComboSection from './components/ComboSection'
import WhyUs from './components/WhyUs'
import Reviews from './components/Reviews'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        {/* S1: Top Bar + Header sticky */}
        <Header />

        {/* S2: Hero */}
        <Hero />

        {/* S3: Danh mục tab điện / nước */}
        <Categories />

        {/* S4: Estimator widget */}
        <div id="estimator">
          <Estimator />
        </div>

        {/* S5: Sản phẩm bán chạy + filter + search */}
        <ProductShowcase />

        {/* S6: Combo trọn gói */}
        <ComboSection />

        {/* S7: Lý do chọn + animated stats */}
        <WhyUs />

        {/* S8: Reviews / social proof */}
        <Reviews />

        {/* S9: Lead form báo giá */}
        <LeadForm />

        {/* S10: Footer đầy đủ */}
        <Footer />

        {/* S11: Floating CTA + mobile bottom nav */}
        <FloatingActions />

        {/* mobile bottom nav padding */}
        <div className="h-16 sm:hidden" />
      </div>
    </CartProvider>
  )
}
