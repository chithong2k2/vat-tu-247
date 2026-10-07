import { useState, useEffect } from 'react'
import { ShoppingCart, Phone, FileText, Search, Zap, Droplets, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'

const navLinks = [
  { label: 'Thiết Bị Điện', href: '#dien' },
  { label: 'Thiết Bị Nước', href: '#nuoc' },
  { label: 'Sản Phẩm', href: '#san-pham' },
  { label: 'Combo Tiết Kiệm', href: '#combo' },
  { label: 'Liên Hệ', href: '#lien-he' },
]

const suggestions = ['Ống Tiền Phong D27', 'Dây Cadivi 2.5mm', 'CB Panasonic 20A', 'Máy bơm tăng áp', 'Đèn LED Rạng Đông']

export default function Header() {
  const { count } = useCart()
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [search, setSearch] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const filtered = suggestions.filter(s => !search || s.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      {/* ── Notification Bar ── */}
      <div className="bg-accent text-white text-xs font-medium py-2 px-4 text-center leading-relaxed">
        🔥 <span className="font-bold">Ưu đãi tháng:</span> Chiết khấu lên đến 38% cho thợ thầu &amp; công trình
        &nbsp;|&nbsp; Giao nhanh 2h nội thành
        &nbsp;|&nbsp; <a href="tel:0909123456" className="underline decoration-dotted font-bold">Hotline: 0909.123.456</a>
      </div>

      {/* ── Main Header ── */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center relative">
                <Zap className="w-4 h-4 text-white absolute top-1 left-1.5" fill="currentColor" />
                <Droplets className="w-3 h-3 text-cyan-200 absolute bottom-1.5 right-1" />
              </div>
              <div className="hidden sm:block">
                <div className="text-ink font-extrabold text-base leading-tight tracking-tight">ĐIỆN NƯỚC</div>
                <div className="text-accent font-black text-xs tracking-[0.15em]">247</div>
              </div>
            </a>

            {/* Search */}
            <div className="flex-1 relative max-w-xl mx-4 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <input
                  type="text"
                  placeholder="Tìm sản phẩm... (VD: Ống Tiền Phong D27)"
                  className="w-full h-9 pl-9 pr-3 text-sm bg-slate-100 border border-slate-200 rounded-lg outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 transition-all"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                />
              </div>
              {showSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-50 overflow-hidden">
                  {filtered.map(s => (
                    <button key={s} className="w-full text-left px-3 py-2 text-sm text-body hover:bg-primary-light hover:text-primary transition-colors flex items-center gap-2"
                      onMouseDown={() => { setSearch(s); setShowSuggestions(false) }}>
                      <Search className="w-3.5 h-3.5 text-muted flex-shrink-0" />
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Nav links desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(l => (
                <a key={l.href} href={l.href}
                  className="text-xs font-medium text-body hover:text-primary px-2.5 py-1.5 rounded-md hover:bg-primary-light transition-colors whitespace-nowrap">
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 ml-auto lg:ml-0 flex-shrink-0">
              <a href="#bao-gia"
                className="hidden sm:flex items-center gap-1.5 h-9 px-3 text-xs font-semibold bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                <FileText className="w-3.5 h-3.5" />
                Tải Báo Giá
              </a>
              <a href="tel:0909123456"
                className="hidden sm:flex items-center gap-1.5 h-9 px-3 text-xs font-semibold border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
                Gọi Ngay
              </a>
              <button
                onClick={() => setCartOpen(true)}
                className="relative h-9 w-9 flex items-center justify-center rounded-lg border border-slate-200 hover:border-primary hover:text-primary transition-colors">
                <ShoppingCart className="w-4 h-4" />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden h-9 w-9 flex items-center justify-center rounded-lg border border-slate-200">
                {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden border-t border-slate-100 py-3 space-y-1">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <input type="text" placeholder="Tìm sản phẩm..."
                  className="w-full h-9 pl-9 pr-3 text-sm bg-slate-100 border border-slate-200 rounded-lg outline-none focus:border-primary"
                  value={search} onChange={e => setSearch(e.target.value)} />
              </div>
              {navLinks.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-body hover:text-primary hover:bg-primary-light rounded-lg transition-colors">
                  {l.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a href="#bao-gia" className="flex-1 flex items-center justify-center gap-1.5 h-10 text-sm font-semibold bg-primary text-white rounded-lg">
                  <FileText className="w-4 h-4" /> Tải Báo Giá
                </a>
                <a href="tel:0909123456" className="flex-1 flex items-center justify-center gap-1.5 h-10 text-sm font-semibold bg-accent text-white rounded-lg">
                  <Phone className="w-4 h-4" /> Gọi Ngay
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
