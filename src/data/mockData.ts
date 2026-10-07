export interface Product {
  id: string
  name: string
  brand: string
  category: 'day-cap' | 'ong-nuoc' | 'dong-cat' | 'den-phu-kien'
  price: number
  priceList: number
  unit: string
  discount: number        // %
  bulkDiscount?: string
  tags: string[]
  image: string
  inStock: boolean
  isBestSeller?: boolean
}

export interface Combo {
  id: string
  name: string
  description: string
  items: string[]
  totalSavings: number
  price: number
  priceList: number
  image: string
}

export interface Review {
  id: string
  name: string
  role: string
  avatar: string
  content: string
  rating: number
  district: string
}

// ─── Products (12 items) ───
export const products: Product[] = [
  {
    id: 'p1',
    name: 'Dây điện đôi mềm Cadivi VCmd 2×2.5mm² (Cuộn 100m)',
    brand: 'Cadivi',
    category: 'day-cap',
    price: 890_000,
    priceList: 1_150_000,
    unit: 'cuộn',
    discount: 22,
    bulkDiscount: 'Chiết khấu -28% khi lấy từ 5 cuộn',
    tags: ['Bán chạy', 'Chính hãng'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format&fit=crop',
    inStock: true,
    isBestSeller: true,
  },
  {
    id: 'p2',
    name: 'Cáp điện Cadivi CV 4mm² (Cuộn 100m) ruột đồng cứng',
    brand: 'Cadivi',
    category: 'day-cap',
    price: 1_240_000,
    priceList: 1_580_000,
    unit: 'cuộn',
    discount: 21,
    tags: ['Chính hãng'],
    image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=400&q=80&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: 'p3',
    name: 'CB MCB 1P 20A Panasonic BBD1202CNV — chống quá tải',
    brand: 'Panasonic',
    category: 'dong-cat',
    price: 148_000,
    priceList: 195_000,
    unit: 'cái',
    discount: 24,
    bulkDiscount: 'Chiết khấu -30% khi lấy từ 10 cái',
    tags: ['Bán chạy', 'Chính hãng'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&auto=format&fit=crop',
    inStock: true,
    isBestSeller: true,
  },
  {
    id: 'p4',
    name: 'Tủ điện âm tường Schneider 12 cực — vỏ nhựa ABS',
    brand: 'Schneider',
    category: 'dong-cat',
    price: 385_000,
    priceList: 490_000,
    unit: 'cái',
    discount: 21,
    tags: ['Chính hãng'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: 'p5',
    name: 'Ổ cắm đơn 3 chấu Schneider E8015 — chống giật chuẩn IEC',
    brand: 'Schneider',
    category: 'dong-cat',
    price: 85_000,
    priceList: 110_000,
    unit: 'cái',
    discount: 22,
    tags: ['Bán chạy'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format&fit=crop',
    inStock: true,
    isBestSeller: true,
  },
  {
    id: 'p6',
    name: 'Ống nước PPR Tiền Phong Ø27mm PN20 (Thanh 4m) chịu nhiệt',
    brand: 'Tiền Phong',
    category: 'ong-nuoc',
    price: 68_000,
    priceList: 88_000,
    unit: 'thanh',
    discount: 22,
    bulkDiscount: 'Giảm thêm 5% từ 50 thanh',
    tags: ['Bán chạy', 'Chính hãng'],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80&auto=format&fit=crop',
    inStock: true,
    isBestSeller: true,
  },
  {
    id: 'p7',
    name: 'Ống PVC Bình Minh Ø60mm PN10 thoát nước (Thanh 4m)',
    brand: 'Bình Minh',
    category: 'ong-nuoc',
    price: 52_000,
    priceList: 68_000,
    unit: 'thanh',
    discount: 23,
    tags: ['Chính hãng'],
    image: 'https://images.unsplash.com/photo-1563514227147-6d2af4541c37?w=400&q=80&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: 'p8',
    name: 'Van cầu đồng Genebre Ø27 (1") tay gạt inox — chịu 16 bar',
    brand: 'Genebre',
    category: 'ong-nuoc',
    price: 145_000,
    priceList: 185_000,
    unit: 'cái',
    discount: 21,
    tags: ['Bán chạy'],
    image: 'https://images.unsplash.com/photo-1608164542381-b5cdf7bfe7c5?w=400&q=80&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: 'p9',
    name: 'Máy bơm tăng áp tự động Mitsubishi WP-155GT 150W',
    brand: 'Mitsubishi',
    category: 'ong-nuoc',
    price: 2_150_000,
    priceList: 2_750_000,
    unit: 'cái',
    discount: 21,
    tags: ['Chính hãng', 'Mới về'],
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: 'p10',
    name: 'Đèn LED Bulb Rạng Đông 12W E27 — 6500K ánh sáng trắng (Hộp 10 bóng)',
    brand: 'Rạng Đông',
    category: 'den-phu-kien',
    price: 480_000,
    priceList: 620_000,
    unit: 'hộp',
    discount: 22,
    bulkDiscount: 'Combo 5 hộp tặng 1 hộp',
    tags: ['Bán chạy', 'Tiết kiệm điện'],
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80&auto=format&fit=crop',
    inStock: true,
    isBestSeller: true,
  },
  {
    id: 'p11',
    name: 'Đèn LED Downlight âm trần Philips 7W 4000K — φ90mm',
    brand: 'Philips',
    category: 'den-phu-kien',
    price: 125_000,
    priceList: 165_000,
    unit: 'cái',
    discount: 24,
    tags: ['Chính hãng'],
    image: 'https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?w=400&q=80&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: 'p12',
    name: 'Dây cáp Trần Phú 3×4mm² CVV — ruột đồng mềm vỏ PVC (Cuộn 100m)',
    brand: 'Trần Phú',
    category: 'day-cap',
    price: 1_680_000,
    priceList: 2_100_000,
    unit: 'cuộn',
    discount: 20,
    tags: ['Chính hãng'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format&fit=crop',
    inStock: true,
  },
]

// ─── Combos ───
export const combos: Combo[] = [
  {
    id: 'c1',
    name: 'Gói điện chuẩn an toàn cho nhà phố 3 tầng',
    description: 'Đủ bộ từ tủ điện, dây, ổ cắm đến đèn LED. Đã bao gồm phụ kiện lắp đặt.',
    items: [
      'Tủ điện Schneider 12 cực (1 cái)',
      'CB MCB Panasonic 20A (10 cái)',
      'Dây Cadivi VCmd 2×2.5mm² (3 cuộn)',
      'Dây Cadivi CV 4mm² (1 cuộn)',
      'Ổ cắm Schneider E8015 (20 cái)',
      'Đèn LED Rạng Đông 12W (2 hộp)',
      'Máng cáp, co, phụ kiện đi kèm',
    ],
    price: 8_900_000,
    priceList: 12_300_000,
    totalSavings: 3_400_000,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'c2',
    name: 'Trọn bộ cấp thoát nước phòng tắm tiêu chuẩn',
    description: 'Bao gồm ống PPR cấp nước nóng-lạnh, ống PVC thoát sàn, van và phụ kiện nối.',
    items: [
      'Ống PPR Tiền Phong Ø27mm (10 thanh)',
      'Ống PVC Bình Minh Ø60mm (5 thanh)',
      'Van cầu đồng Ø27 (4 cái)',
      'Co, tê, Rắc co PPR các loại (bộ 30 pcs)',
      'Keo dán, băng keo teflon, phụ kiện',
    ],
    price: 2_100_000,
    priceList: 2_850_000,
    totalSavings: 750_000,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'c3',
    name: 'Gói tân trang căn hộ mini / phòng trọ',
    description: 'Gói nhỏ gọn, tiết kiệm tối ưu cho căn phòng 20–35m². Lắp đặt trong 1 ngày.',
    items: [
      'CB MCB Panasonic 20A (3 cái)',
      'Dây Cadivi VCmd 2×2.5mm² (1 cuộn)',
      'Ổ cắm Schneider (8 cái)',
      'Đèn LED Downlight Philips 7W (6 cái)',
      'Ống PPR Tiền Phong Ø21mm (5 thanh)',
      'Phụ kiện lắp đặt đầy đủ',
    ],
    price: 3_200_000,
    priceList: 4_500_000,
    totalSavings: 1_300_000,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80&auto=format&fit=crop',
  },
]

// ─── Reviews ───
export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Anh Tuấn Nguyễn',
    role: 'Thầu xây dựng',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content:
      'Giá dây Cadivi và ống Tiền Phong ở đây tốt nhất khu vực, gọi phát giao ngay sau 1 tiếng kịp tiến độ đổ sàn. Đã lấy hàng 3 công trình liên tiếp, chưa lần nào thất vọng.',
    rating: 5,
    district: 'Thầu xây dựng Quận 7',
  },
  {
    id: 'r2',
    name: 'Chú Ba Trần',
    role: 'Thợ điện nước tự do',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
    content:
      'Chính sách cho trả lại phụ kiện thừa rất sòng phẳng, đỡ chôn vốn. Tôi làm nghề 20 năm mà chưa thấy kho nào như vậy. Giờ giới thiệu cho cả nhóm thợ cùng lấy hàng.',
    rating: 5,
    district: 'Thợ điện tự do Bình Thạnh',
  },
  {
    id: 'r3',
    name: 'Chị Hương Lê',
    role: 'Chủ nhà',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    content:
      'Lần đầu sửa nhà không biết mua gì, nhờ tư vấn combo trọn gói rất tiện. Giao đúng hẹn, hàng nguyên seal, anh kỹ thuật hướng dẫn tận tình. Sẽ quay lại mua tiếp.',
    rating: 5,
    district: 'Chủ nhà Quận 9',
  },
  {
    id: 'r4',
    name: 'Anh Minh Phúc',
    role: 'Cai thầu',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    content:
      'Mua số lượng lớn cho 2 block chung cư 15 tầng. Giá chiết khấu theo doanh số rất hợp lý, có hóa đơn VAT đủ để quyết toán dự án. Giao hàng bằng xe tải đúng tiến độ.',
    rating: 5,
    district: 'Cai thầu Bình Dương',
  },
]

// ─── Categories ───
export const electricCategories = [
  { icon: '⚡', name: 'Dây & Cáp điện', brands: 'Cadivi, Daphaco, Trần Phú', count: 48 },
  { icon: '🔌', name: 'Thiết bị đóng cắt', brands: 'Panasonic, Schneider, Sino', count: 62 },
  { icon: '🏠', name: 'Ổ cắm, công tắc, tủ điện', brands: 'Schneider, Legrand, Dekko', count: 75 },
  { icon: '💡', name: 'Chiếu sáng LED', brands: 'Rạng Đông, Philips, Duhal', count: 39 },
]

export const waterCategories = [
  { icon: '🌡️', name: 'Ống PPR chịu nhiệt', brands: 'Tiền Phong, Dekko, Bình Minh', count: 54 },
  { icon: '🔧', name: 'Ống PVC/HDPE thoát nước', brands: 'Bình Minh, Tiền Phong', count: 41 },
  { icon: '🔩', name: 'Van đồng, van gang, vòi', brands: 'Genebre, Yoshitake, HVC', count: 37 },
  { icon: '💧', name: 'Máy bơm & thiết bị vệ sinh', brands: 'Mitsubishi, Panasonic, Inax', count: 29 },
]
