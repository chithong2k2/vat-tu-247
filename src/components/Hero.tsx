import { ArrowRight, ShieldCheck, Truck, RotateCcw, FileSpreadsheet } from 'lucide-react'
import { FadeIn } from './ui/Motion'

const brands = ['Cadivi', 'Panasonic', 'Tiền Phong', 'Bình Minh', 'Philips', 'Schneider', 'Sino', 'Dekko']

const trust = [
  { icon: ShieldCheck, label: 'Đổi trả 30 ngày', color: 'text-success' },
  { icon: FileSpreadsheet, label: 'Đầy đủ CO/CQ', color: 'text-primary' },
  { icon: Truck, label: 'Giao hỏa tốc 2H', color: 'text-accent' },
  { icon: RotateCcw, label: 'Hoàn hàng dư 100%', color: 'text-purple-600' },
]

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#0c2044] to-[#0369a1] text-white overflow-hidden">
      {/* decorative grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />
      {/* glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Đang phục vụ · Giao nhanh toàn TP.HCM
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white text-wrap-balance mb-5">
              Tổng Kho Thiết Bị<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">Điện Nước Chính Hãng</span><br />
              Giá Gốc Tận Nhà Máy
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Phân phối ống nước, dây cáp điện, thiết bị đóng cắt, đèn LED &amp; thiết bị vệ sinh.
              <strong className="text-white font-semibold"> Chiết khấu đến 38%</strong> cho thợ thầu.
              Giao ngay <strong className="text-accent font-semibold">trong 2 giờ</strong> tận chân công trình.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#bao-gia"
                className="flex items-center gap-2 h-12 px-6 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl text-sm transition-all duration-150 shadow-lg shadow-accent/30 active:scale-[0.98]">
                <FileSpreadsheet className="w-4 h-4" />
                Xem bảng giá chiết khấu thợ thầu
              </a>
              <a href="#san-pham"
                className="flex items-center gap-2 h-12 px-6 border-2 border-white/30 text-white font-semibold rounded-xl text-sm hover:bg-white/10 transition-all duration-150 active:scale-[0.98]">
                Khám phá danh mục
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>

          {/* Trust badges */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-3 mb-10">
              {trust.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <Icon className={`w-4 h-4 ${color}`} />
                  <span className="text-xs font-semibold text-slate-200">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Brand logos */}
          <FadeIn delay={0.25}>
            <div>
              <p className="text-xs text-slate-500 font-medium mb-3 uppercase tracking-wider">Thương hiệu đang phân phối chính thức</p>
              <div className="flex flex-wrap gap-2">
                {brands.map(b => (
                  <span key={b} className="text-xs font-bold text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { v: '5.000+', l: 'Thợ thầu đối tác' },
              { v: '339+', l: 'Sản phẩm chính hãng' },
              { v: '14 năm', l: 'Kinh nghiệm phân phối' },
              { v: '4.9★', l: 'Đánh giá từ khách hàng' },
            ].map(({ v, l }) => (
              <div key={l}>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{v}</div>
                <div className="text-xs text-slate-400 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
