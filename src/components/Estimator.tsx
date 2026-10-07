import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from './ui/Motion'

type BuildingType = 'nha-pho' | 'can-ho' | 'phong-tro' | 'sua-chua'
type PackageType = 'dien' | 'nuoc' | 'tron-goi'

const buildingLabels: Record<BuildingType, string> = {
  'nha-pho': 'Nhà phố 2–3 tầng',
  'can-ho': 'Căn hộ chung cư',
  'phong-tro': 'Phòng trọ',
  'sua-chua': 'Sửa chữa nhỏ',
}

const packageLabels: Record<PackageType, string> = {
  'dien': 'Gói điện cơ bản',
  'nuoc': 'Gói cấp thoát nước',
  'tron-goi': 'Gói full trọn gói',
}

// Estimate matrix [triệu VNĐ]
const estimate: Record<BuildingType, Record<PackageType, { min: number; max: number }>> = {
  'nha-pho':  { 'dien': { min: 8, max: 15 },  'nuoc': { min: 5, max: 10 }, 'tron-goi': { min: 18, max: 35 } },
  'can-ho':   { 'dien': { min: 4, max: 8 },   'nuoc': { min: 3, max: 6 },  'tron-goi': { min: 9, max: 18 } },
  'phong-tro':{ 'dien': { min: 1.5, max: 3 }, 'nuoc': { min: 1, max: 2 },  'tron-goi': { min: 3, max: 6 } },
  'sua-chua': { 'dien': { min: 0.5, max: 2 }, 'nuoc': { min: 0.5, max: 2 },'tron-goi': { min: 1, max: 4 } },
}

export default function Estimator() {
  const [building, setBuilding] = useState<BuildingType | null>(null)
  const [pkg, setPkg] = useState<PackageType | null>(null)
  const [done, setDone] = useState(false)

  const result = building && pkg ? estimate[building][pkg] : null

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">Công cụ ước tính</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-wrap-balance mb-3">
            Ước Tính Vật Tư Nhanh<br />
            <span className="text-cyan-400">Cho Công Trình Của Bạn</span>
          </h2>
          <p className="text-slate-400 text-sm">Chọn loại công trình và hạng mục để nhận dự toán chi phí tham khảo ngay lập tức.</p>
        </FadeIn>

        {!done ? (
          <FadeIn delay={0.05}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              {/* Step 1 */}
              <div className="mb-7">
                <h3 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-black">1</span>
                  Loại công trình của bạn
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(Object.keys(buildingLabels) as BuildingType[]).map(k => (
                    <button key={k}
                      onClick={() => setBuilding(k)}
                      className={`py-3 px-3 rounded-lg text-sm font-medium text-center transition-all duration-150 border ${
                        building === k
                          ? 'bg-primary border-primary text-white shadow-md'
                          : 'bg-white/5 border-white/15 text-slate-300 hover:border-primary/50 hover:text-white'
                      }`}>
                      {buildingLabels[k]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-black">2</span>
                  Hạng mục cần thi công
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(packageLabels) as PackageType[]).map(k => (
                    <button key={k}
                      onClick={() => setPkg(k)}
                      className={`py-3 px-3 rounded-lg text-sm font-medium text-center transition-all duration-150 border ${
                        pkg === k
                          ? 'bg-accent border-accent text-white shadow-md'
                          : 'bg-white/5 border-white/15 text-slate-300 hover:border-accent/50 hover:text-white'
                      }`}>
                      {packageLabels[k]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result preview */}
              {result && (
                <div className="bg-white/8 border border-white/20 rounded-xl p-5 mb-5">
                  <p className="text-xs text-slate-400 mb-1">Dự toán chi phí ước tính</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white">{result.min}–{result.max}</span>
                    <span className="text-lg font-semibold text-cyan-400">triệu đồng</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">* Giá tham khảo, chưa bao gồm nhân công. Sẽ báo giá chính xác sau khi xem bản vẽ.</p>
                </div>
              )}

              <button
                disabled={!building || !pkg}
                onClick={() => setDone(true)}
                className="w-full h-12 bg-accent disabled:bg-slate-700 disabled:text-slate-500 text-white font-bold rounded-xl text-sm hover:bg-accent-hover transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                Gửi yêu cầu nhận báo giá chiết khấu 1:1 qua Zalo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            <div className="bg-white/5 border border-green-500/40 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">Đã nhận yêu cầu!</h3>
              <p className="text-slate-400 text-sm mb-6">
                Nhân viên kỹ thuật sẽ liên hệ Zalo trong <strong className="text-white">10 phút</strong> với báo giá chi tiết.
              </p>
              <button onClick={() => { setBuilding(null); setPkg(null); setDone(false) }}
                className="text-sm text-primary hover:text-cyan-300 transition-colors">
                ← Ước tính lại
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
