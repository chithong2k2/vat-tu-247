import { Phone, MessageCircle, ShoppingCart, Home, Tag, Calculator } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'

export default function FloatingActions() {
  const { count } = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      {/* Desktop floating buttons — bottom right */}
      <div className="hidden sm:flex fixed bottom-6 right-5 z-[100] flex-col gap-3 items-end">
        {/* Zalo */}
        <a href="https://zalo.me/0909123456" target="_blank" rel="noreferrer"
          className="group flex items-center gap-2 h-12 pl-3 pr-4 bg-[#0068ff] text-white rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-105 active:scale-95">
          <MessageCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-semibold whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300">
            Chat Zalo
          </span>
        </a>
        {/* Call */}
        <a href="tel:0909123456"
          className="group flex items-center gap-2 h-12 pl-3 pr-4 bg-accent text-white rounded-full shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all hover:scale-105 active:scale-95 animate-bounce-slow">
          <Phone className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-semibold whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300">
            0909.123.456
          </span>
        </a>
        {/* Cart */}
        <button onClick={() => setCartOpen(true)}
          className="relative w-12 h-12 bg-primary text-white rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
          <ShoppingCart className="w-5 h-5" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white rounded-full text-[10px] font-black flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-slate-200 safe-area-inset-bottom shadow-2xl">
        <div className="grid grid-cols-5 h-16">
          {[
            { icon: Home, label: 'Trang chủ', href: '#' },
            { icon: Tag, label: 'Danh mục', href: '#san-pham' },
            { icon: Calculator, label: 'Dự toán', href: '#estimator', accent: false },
            { icon: MessageCircle, label: 'Zalo', href: 'https://zalo.me/0909123456', color: 'text-[#0068ff]' },
            { icon: Phone, label: 'Gọi ngay', href: 'tel:0909123456', color: 'text-accent', pulse: true },
          ].map(({ icon: Icon, label, href, color, pulse }) => (
            <a key={label} href={href}
              className={`flex flex-col items-center justify-center gap-0.5 text-muted hover:text-primary transition-colors ${color || ''}`}>
              <Icon className={`w-5 h-5 ${pulse ? 'animate-pulse' : ''}`} />
              <span className="text-[10px] font-medium">{label}</span>
            </a>
          ))}
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
