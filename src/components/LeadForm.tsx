import { useState } from 'react'
import { Phone, Upload, CheckCircle2 } from 'lucide-react'
import { FadeIn } from './ui/Motion'

function validateVN(phone: string) {
  return /^(0[3|5|7|8|9])\d{8}$/.test(phone.replace(/[\s.-]/g, ''))
}

type Role = 'tho' | 'chu-nha' | ''

export default function LeadForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState<Role>('')
  const [note, setNote] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Vui lòng nhập họ tên'
    if (!phone.trim()) e.phone = 'Vui lòng nhập số điện thoại'
    else if (!validateVN(phone)) e.phone = 'Số điện thoại Việt Nam không hợp lệ (10 số)'
    if (!role) e.role = 'Vui lòng chọn đối tượng'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <section id="bao-gia" className="py-16 bg-gradient-to-br from-primary-dark to-[#0f172a] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <FadeIn className="text-center py-12">
            <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
            <h3 className="text-2xl font-extrabold mb-2">Đã gửi thành công!</h3>
            <p className="text-slate-300 text-sm mb-6">
              Nhân viên kỹ thuật sẽ liên hệ lại qua số <strong className="text-white">{phone}</strong> trong <strong className="text-accent">10 phút</strong> với bảng giá chiết khấu chi tiết.
            </p>
            <button onClick={() => { setSubmitted(false); setName(''); setPhone(''); setRole(''); setNote('') }}
              className="text-sm text-primary-light hover:text-white transition-colors">
              ← Gửi yêu cầu khác
            </button>
          </FadeIn>
        ) : (
          <>
            <FadeIn className="text-center mb-8">
              <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">Thu lead báo giá</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-wrap-balance">
                Bạn Cần Báo Giá Cho Dự Án<br />Hoặc Công Trình Sắp Thi Công?
              </h2>
              <p className="text-slate-400 text-sm mt-2">Điền thông tin — nhận bảng giá chiết khấu trong 10 phút</p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <form onSubmit={handleSubmit} className="bg-white/8 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Họ và tên <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className={`w-full h-10 px-3 text-sm rounded-lg bg-white/8 border text-white placeholder:text-slate-500 outline-none focus:ring-1 transition-all ${errors.name ? 'border-red-400 focus:ring-red-400/30' : 'border-white/20 focus:border-primary-light focus:ring-primary/20'}`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1 flex items-center gap-1">⚠ {errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Số điện thoại / Zalo <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="0909 123 456"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className={`w-full h-10 px-3 text-sm rounded-lg bg-white/8 border text-white placeholder:text-slate-500 outline-none focus:ring-1 transition-all ${errors.phone ? 'border-red-400 focus:ring-red-400/30' : 'border-white/20 focus:border-primary-light focus:ring-primary/20'}`}
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1 flex items-center gap-1">⚠ {errors.phone}</p>}
                </div>

                {/* Role */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Bạn là <span className="text-red-400">*</span>
                  </label>
                  <div className="flex gap-3">
                    {([['tho', '🔨 Thợ thi công / Thầu xây dựng'], ['chu-nha', '🏠 Chủ nhà']] as [Role, string][]).map(([k, l]) => (
                      <button key={k} type="button"
                        onClick={() => setRole(k)}
                        className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                          role === k ? 'bg-primary border-primary text-white' : 'border-white/20 text-slate-300 hover:border-primary/50'
                        }`}>
                        {l}
                      </button>
                    ))}
                  </div>
                  {errors.role && <p className="text-xs text-red-400 mt-1 flex items-center gap-1">⚠ {errors.role}</p>}
                </div>

                {/* File upload */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Bản vẽ / Bóc tách khối lượng <span className="text-slate-500">(tùy chọn)</span>
                  </label>
                  <label className="flex items-center gap-2 h-10 px-3 rounded-lg border border-dashed border-white/25 text-xs text-slate-400 cursor-pointer hover:border-primary/50 hover:text-slate-300 transition-all">
                    <Upload className="w-4 h-4 flex-shrink-0" />
                    <span>Kéo thả hoặc click để chọn file (PDF, DWG, Excel…)</span>
                    <input type="file" className="hidden" accept=".pdf,.dwg,.xlsx,.xls,.png,.jpg" />
                  </label>
                </div>

                {/* Note */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Ghi chú danh mục cần báo giá</label>
                  <textarea
                    rows={3}
                    placeholder="VD: Cần báo giá dây điện, ống nước cho nhà phố 3 tầng, tổng diện tích ~250m²..."
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm rounded-lg bg-white/8 border border-white/20 text-white placeholder:text-slate-500 outline-none focus:border-primary-light focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <button type="submit"
                  className="w-full h-12 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors active:scale-[0.98] shadow-lg shadow-accent/25">
                  <Phone className="w-4 h-4" />
                  NHẬN BẢNG GIÁ CHIẾT KHẤU TRONG 10 PHÚT
                </button>

                <p className="text-center text-[11px] text-slate-500">
                  Thông tin của bạn được bảo mật tuyệt đối. Không spam.
                </p>
              </form>
            </FadeIn>
          </>
        )}
      </div>
    </section>
  )
}
