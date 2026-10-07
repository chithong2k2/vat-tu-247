import { Star } from 'lucide-react'
import { reviews } from '../data/mockData'
import { FadeIn } from './ui/Motion'

function StarRow({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-2">Đánh giá thực tế</p>
          <h2 className="text-3xl font-extrabold text-ink tracking-tight text-wrap-balance">
            Thợ Thầu &amp; Chủ Nhà Nói Gì?
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <StarRow n={5} />
            <span className="text-sm font-bold text-ink">4.9/5</span>
            <span className="text-sm text-muted">từ hơn 1.200 đánh giá</span>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <FadeIn key={r.id} delay={i * 0.07}>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4">
                <StarRow n={r.rating} />
                <blockquote className="text-sm text-body leading-relaxed flex-1">"{r.content}"</blockquote>
                <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                  <img src={r.avatar} alt={r.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-white shadow" />
                  <div>
                    <p className="text-xs font-bold text-ink">{r.name}</p>
                    <p className="text-[11px] text-muted">{r.district}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
