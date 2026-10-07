import { useState } from 'react'
import { Zap, Droplets } from 'lucide-react'
import { electricCategories, waterCategories } from '../data/mockData'
import { FadeIn } from './ui/Motion'

export default function Categories() {
  const [active, setActive] = useState<'dien' | 'nuoc'>('dien')

  const categories = active === 'dien' ? electricCategories : waterCategories

  return (
    <section id="dien" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-8">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-2">Danh mục sản phẩm</p>
          <h2 className="text-3xl font-extrabold text-ink tracking-tight text-wrap-balance">
            Đủ mọi thiết bị điện &amp; nước — dưới một mái kho
          </h2>
        </FadeIn>

        {/* Tab selector */}
        <FadeIn delay={0.05} className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-100 rounded-xl p-1 gap-1">
            <button
              onClick={() => setActive('dien')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                active === 'dien'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-ink'
              }`}
            >
              <Zap className="w-4 h-4" />
              Khu vực Thiết Bị Điện
            </button>
            <button
              onClick={() => { setActive('nuoc') }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                active === 'nuoc'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-ink'
              }`}
            >
              <Droplets className="w-4 h-4" />
              Khu vực Thiết Bị Nước
            </button>
          </div>
        </FadeIn>

        {/* Category grid */}
        <div id="nuoc" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.05}>
              <a href="#san-pham"
                className="group block p-5 bg-white border border-slate-200 rounded-xl hover:border-primary hover:shadow-md hover:shadow-primary/8 transition-all duration-200 cursor-pointer">
                <span className="text-3xl mb-3 block">{cat.icon}</span>
                <h3 className="font-bold text-ink text-sm mb-1 group-hover:text-primary transition-colors">{cat.name}</h3>
                <p className="text-xs text-muted mb-3 leading-relaxed">{cat.brands}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full">
                    {cat.count} sản phẩm
                  </span>
                  <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">Xem →</span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
