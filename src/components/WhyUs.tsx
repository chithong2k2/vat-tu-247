import { ShieldCheck, Percent, Truck, RotateCcw } from 'lucide-react'
import { FadeIn } from './ui/Motion'
import { AnimatedCounter } from './ui/Motion'

const reasons = [
  {
    icon: ShieldCheck,
    color: 'text-success',
    bg: 'bg-success-light',
    title: '100% Chính Hãng',
    sub: 'Đền 200% nếu phát hiện hàng giả',
    desc: 'Toàn bộ sản phẩm có tem phân phối ủy quyền chính thức, kèm hóa đơn VAT và chứng chỉ CO/CQ đầy đủ theo yêu cầu.',
  },
  {
    icon: Percent,
    color: 'text-accent',
    bg: 'bg-accent-light',
    title: 'Chiết Khấu Thợ Thầu Cao Nhất',
    sub: 'Tích điểm, thưởng doanh số hàng tháng',
    desc: 'Chính sách cộng dồn tích điểm, thưởng doanh số cuối tháng. Anh em thợ càng lấy nhiều, chiết khấu càng tốt.',
  },
  {
    icon: Truck,
    color: 'text-primary',
    bg: 'bg-primary-light',
    title: 'Giao Hàng Hỏa Tốc Chân Công Trình',
    sub: 'Thiếu 1 con ốc cũng giao',
    desc: 'Đội xe máy và xe tải hoạt động 24/7. Dù thiếu 1 co nối hay 1 cuộn dây, vẫn cho người giao đúng chỗ đang thi công.',
  },
  {
    icon: RotateCcw,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    title: 'Cho Trả Lại Hàng Dư',
    sub: 'Hoàn tiền 100% phụ kiện còn nguyên',
    desc: 'Thi công xong còn dư ống, co, van, thiết bị chưa qua sử dụng — đem trả lại, hoàn tiền 100%. Không chôn vốn.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-16 bg-surface border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-2">Cam kết &amp; lợi thế</p>
          <h2 className="text-3xl font-extrabold text-ink tracking-tight text-wrap-balance">
            Tại Sao Hơn 5.000 Thợ Thầu<br />Chọn Kho Của Chúng Tôi?
          </h2>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.05} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { target: 5000, suffix: '+', label: 'Thợ thầu đối tác' },
            { target: 339, suffix: '+', label: 'Sản phẩm chính hãng' },
            { target: 14, suffix: ' năm', label: 'Kinh nghiệm' },
            { target: 98, suffix: '%', label: 'Khách hàng hài lòng' },
          ].map(({ target, suffix, label }) => (
            <div key={label} className="text-center bg-white border border-slate-200 rounded-xl py-5 px-3">
              <div className="text-3xl font-extrabold text-primary tabular-nums">
                <AnimatedCounter target={target} suffix={suffix} />
              </div>
              <div className="text-xs text-muted mt-1">{label}</div>
            </div>
          ))}
        </FadeIn>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.07}>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-xl ${r.bg} flex items-center justify-center`}>
                  <r.icon className={`w-5 h-5 ${r.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-ink text-sm mb-0.5">{r.title}</h3>
                  <p className={`text-xs font-semibold ${r.color} mb-2`}>{r.sub}</p>
                  <p className="text-xs text-muted leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
