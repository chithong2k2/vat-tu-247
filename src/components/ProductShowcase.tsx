import { useState } from 'react'
import { ShoppingCart, MessageCircle, Star } from 'lucide-react'
import { products, type Product } from '../data/mockData'
import { useCart } from '../context/CartContext'
import { FadeIn } from './ui/Motion'

const TABS = [
  { key: 'all', label: 'Tất cả' },
  { key: 'day-cap', label: 'Dây cáp điện' },
  { key: 'ong-nuoc', label: 'Ống nước PPR' },
  { key: 'dong-cat', label: 'Thiết bị đóng cắt' },
  { key: 'den-phu-kien', label: 'Đèn & Phụ kiện' },
] as const

function ProductCard({ p }: { p: Product }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    add(p)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col hover:border-primary hover:shadow-lg hover:shadow-primary/8 transition-all duration-200 group">
      {/* image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        <img src={p.image} alt={p.name}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
          loading="lazy" />
        {/* badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {p.tags.map(t => (
            <span key={t} className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              t === 'Bán chạy' ? 'bg-accent text-white' :
              t === 'Chính hãng' ? 'bg-primary text-white' :
              t === 'Mới về' ? 'bg-success text-white' :
              'bg-slate-700 text-white'
            }`}>{t}</span>
          ))}
        </div>
        <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
          -{p.discount}%
        </div>
      </div>

      {/* body */}
      <div className="p-3 flex flex-col flex-1">
        <p className="text-[11px] font-bold text-primary mb-0.5">{p.brand}</p>
        <h3 className="text-xs sm:text-sm font-semibold text-ink leading-snug mb-2 line-clamp-2 flex-1">{p.name}</h3>

        {/* price */}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-base font-extrabold text-accent tabular-nums">
            {p.price.toLocaleString('vi-VN')}₫
          </span>
          <span className="text-xs text-muted line-through tabular-nums">
            {p.priceList.toLocaleString('vi-VN')}₫
          </span>
          <span className="text-[10px] text-muted">/{p.unit}</span>
        </div>

        {/* bulk discount */}
        {p.bulkDiscount && (
          <p className="text-[10px] text-success font-semibold bg-success-light px-2 py-0.5 rounded mb-2 truncate">
            🏷 {p.bulkDiscount}
          </p>
        )}

        {/* stock */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-[10px] text-muted">4.9 · </span>
          {p.inStock
            ? <span className="text-[10px] text-success font-semibold">Còn hàng · Giao ngay</span>
            : <span className="text-[10px] text-red-500 font-semibold">Hết hàng</span>
          }
        </div>

        {/* actions */}
        <div className="flex gap-2">
          <button
            onClick={handleAdd}
            disabled={!p.inStock}
            className={`flex-1 h-8 flex items-center justify-center gap-1.5 text-[11px] font-semibold rounded-lg transition-all active:scale-[0.97] ${
              added
                ? 'bg-success text-white'
                : p.inStock
                ? 'bg-primary hover:bg-primary-dark text-white'
                : 'bg-slate-200 text-muted cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-3 h-3" />
            {added ? 'Đã thêm!' : 'Thêm vào giỏ'}
          </button>
          <a
            href={`https://zalo.me/0909123456?text=Tôi muốn hỏi giá: ${encodeURIComponent(p.name)}`}
            target="_blank" rel="noreferrer"
            className="h-8 w-8 flex items-center justify-center bg-[#0068ff] text-white rounded-lg hover:bg-[#0052cc] transition-colors flex-shrink-0"
            title="Mua qua Zalo"
          >
            <MessageCircle className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<string>('all')
  const [search, setSearch] = useState('')

  const filtered = products.filter(p => {
    const matchTab = activeTab === 'all' || p.category === activeTab
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase())
    return matchTab && matchSearch
  })

  return (
    <section id="san-pham" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-1">Kho hàng</p>
            <h2 className="text-3xl font-extrabold text-ink tracking-tight">Sản Phẩm Bán Chạy</h2>
          </div>
          <input
            type="text"
            placeholder="Lọc theo tên, thương hiệu..."
            className="h-9 px-3 text-sm border border-slate-200 rounded-lg bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 w-full sm:w-56 transition-all"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.05} className="flex gap-2 flex-wrap mb-7">
          {TABS.map(t => (
            <button key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`h-8 px-4 rounded-full text-xs font-semibold transition-all ${
                activeTab === t.key
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-muted hover:border-primary hover:text-primary'
              }`}>
              {t.label}
            </button>
          ))}
        </FadeIn>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted">
            <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-20" />
            <p className="font-medium">Không tìm thấy sản phẩm phù hợp</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.03}>
                <ProductCard p={p} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
