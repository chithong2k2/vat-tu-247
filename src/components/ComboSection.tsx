import { MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import { combos } from '../data/mockData'
import { FadeIn } from './ui/Motion'

export default function ComboSection() {
  return (
    <section id="combo" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-2">Tiết kiệm cho chủ nhà &amp; thợ</p>
          <h2 className="text-3xl font-extrabold text-ink tracking-tight text-wrap-balance">
            Combo Vật Tư Trọn Gói
          </h2>
          <p className="text-sm text-muted mt-2">Đặt 1 đơn — nhận đủ mọi thứ — tiết kiệm hơn mua lẻ.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {combos.map((combo, i) => (
            <FadeIn key={combo.id} delay={i * 0.08}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg hover:border-primary/30 transition-all duration-200 group">
                {/* image */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img src={combo.image} alt={combo.name}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs font-bold text-white bg-success px-2.5 py-1 rounded-full">
                      Tiết kiệm {combo.totalSavings.toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                </div>

                {/* body */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-ink text-sm mb-1 leading-snug">{combo.name}</h3>
                  <p className="text-xs text-muted mb-3 leading-relaxed">{combo.description}</p>

                  {/* items list */}
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {combo.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-body">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* pricing */}
                  <div className="border-t border-slate-100 pt-3 mb-4">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-xl font-extrabold text-accent tabular-nums">
                        {combo.price.toLocaleString('vi-VN')}₫
                      </span>
                      <span className="text-xs text-muted line-through tabular-nums">
                        {combo.priceList.toLocaleString('vi-VN')}₫
                      </span>
                    </div>
                    <p className="text-[10px] text-success font-semibold">
                      Tiết kiệm {Math.round((1 - combo.price / combo.priceList) * 100)}% so với mua lẻ
                    </p>
                  </div>

                  <a
                    href={`https://zalo.me/0909123456?text=Tôi muốn tư vấn combo: ${encodeURIComponent(combo.name)}`}
                    target="_blank" rel="noreferrer"
                    className="w-full h-10 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-sm rounded-xl transition-colors active:scale-[0.98]">
                    <MessageCircle className="w-4 h-4" />
                    Tư vấn gói này
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
