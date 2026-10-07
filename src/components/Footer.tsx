import { MapPin, Phone, Clock, Share2, PlayCircle, Mail } from 'lucide-react'

const branches = [
  { name: 'Kho chính — Quận 7', addr: '123 Nguyễn Thị Định, P. Tân Hưng, Q.7, TP.HCM', phone: '0909.123.456' },
  { name: 'Showroom Thủ Đức', addr: '456 Võ Văn Ngân, P. Linh Chiểu, TP. Thủ Đức', phone: '0918.765.432' },
  { name: 'Đại lý Bình Dương', addr: '789 Mỹ Phước Tân Vạn, P. Mỹ Phước, TX. Bến Cát', phone: '0933.111.222' },
]

const policies = [
  { label: 'Chính sách bảo hành', href: '#' },
  { label: 'Chính sách giao hàng', href: '#' },
  { label: 'Quy trình đổi trả hàng dư', href: '#' },
  { label: 'Chính sách chiết khấu thợ thầu', href: '#' },
  { label: 'Điều khoản sử dụng', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white" id="lien-he">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-white font-black text-xs">⚡</span>
              </div>
              <div>
                <div className="font-extrabold text-base leading-tight">ĐIỆN NƯỚC</div>
                <div className="text-accent font-black text-xs tracking-[0.2em]">247</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Tổng kho phân phối thiết bị điện nước chính hãng tại TP.HCM. Hơn 14 năm kinh nghiệm, 5.000+ thợ thầu đối tác.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p>MST: 0123456789 — GPKD số: 12345/GP-STTTT</p>
              <p>Đại lý ủy quyền: Cadivi · Tiền Phong · Panasonic</p>
            </div>
            <div className="flex gap-3 mt-4">
              {[
                { icon: Share2, href: '#', label: 'Facebook' },
                { icon: PlayCircle, href: '#', label: 'YouTube' },
                { icon: Mail, href: 'mailto:info@diennuoc247.vn', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href}
                  className="w-8 h-8 rounded-lg bg-white/8 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={label}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Branches */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Địa chỉ kho &amp; chi nhánh</h4>
            <div className="space-y-4">
              {branches.map(b => (
                <div key={b.name} className="flex gap-3">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white mb-0.5">{b.name}</p>
                    <p className="text-xs text-slate-400">{b.addr}</p>
                    <a href={`tel:${b.phone.replace(/\./g, '')}`} className="text-xs text-primary-light hover:text-white transition-colors">
                      📞 {b.phone}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <Clock className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white mb-0.5">Giờ làm việc</p>
                  <p className="text-xs text-slate-400">Thứ 2 – Thứ 7: 7:00 – 18:30 | Chủ nhật: 7:30 – 12:00</p>
                  <p className="text-xs text-accent font-semibold">Hotline kỹ thuật: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Chính sách &amp; hỗ trợ</h4>
            <ul className="space-y-2">
              {policies.map(p => (
                <li key={p.label}>
                  <a href={p.href} className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-[11px] text-slate-400 mb-1 font-semibold">Hotline 24/7</p>
              <a href="tel:0909123456" className="flex items-center gap-2 text-lg font-extrabold text-white hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                0909.123.456
              </a>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="w-full h-40 bg-white/5 border border-white/10 rounded-xl mb-8 flex items-center justify-center overflow-hidden">
          <div className="text-center text-slate-500 text-xs">
            <MapPin className="w-6 h-6 mx-auto mb-2 opacity-40" />
            <p>Google Maps — 123 Nguyễn Thị Định, Q.7</p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer"
              className="text-primary-light hover:text-white transition-colors">Xem trên bản đồ →</a>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-600">
          <span>© 2024 Điện Nước 247. Bảo lưu mọi quyền.</span>
          <span>Thiết kế: Clean Industrial · Phục vụ thợ thầu Việt Nam</span>
        </div>
      </div>
    </footer>
  )
}
