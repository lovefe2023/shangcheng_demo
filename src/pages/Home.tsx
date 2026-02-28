import { Search, Bell, Grid, Sparkles, Flame, Ticket, ChevronRight, Heart, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const categories = [
    { icon: Grid, label: '全部商品', color: 'text-pink-600', bg: 'bg-pink-50', path: '/products' },
    { icon: Sparkles, label: '新品上市', color: 'text-orange-500', bg: 'bg-orange-50' },
    { icon: Flame, label: '热销榜单', color: 'text-red-500', bg: 'bg-red-50' },
    { icon: Ticket, label: '领券中心', color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  const recommendations = [
    {
      id: 1,
      title: '花漾精华限量版香水',
      category: '美妆',
      price: 638,
      originalPrice: 850,
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400',
      aspect: 'aspect-[4/5]',
    },
    {
      id: 2,
      title: '智能手表 Series 7',
      category: '数码',
      price: 1799,
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400',
      aspect: 'aspect-square',
    },
    {
      id: 3,
      title: '真皮斜挎包',
      category: '时尚',
      price: 999,
      image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400',
      aspect: 'aspect-[3/4]',
      tag: '热卖',
    },
    {
      id: 4,
      title: '现代简约陶瓷花瓶',
      category: '家居',
      price: 228,
      image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=400',
      aspect: 'aspect-square',
    },
    {
      id: 5,
      title: '专业跑步运动鞋',
      category: '运动',
      price: 899,
      originalPrice: 1280,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400',
      aspect: 'aspect-[4/5]',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm px-4 py-3 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center bg-slate-100 rounded-full px-4 py-2">
            <Search className="text-pink-600 w-5 h-5 mr-2" />
            <input 
              type="text" 
              placeholder="搜索礼物、品牌..." 
              className="bg-transparent border-none outline-none w-full text-sm text-slate-900 placeholder-slate-400"
            />
          </div>
          <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-pink-600 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-4 mt-2">
        <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800" 
            alt="Hero Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-5 text-white">
            <div className="bg-pink-600/90 backdrop-blur-sm px-2.5 py-1 rounded-md inline-block mb-2">
              <p className="text-[10px] font-bold uppercase tracking-wider">节日特惠</p>
            </div>
            <h2 className="text-2xl font-bold leading-tight mb-1">心动好礼</h2>
            <p className="text-sm text-white/90 font-medium">精选商品低至 5 折</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-4 gap-2 px-4 py-6">
        {categories.map((cat, idx) => (
          <button 
            key={idx} 
            onClick={() => cat.path && navigate(cat.path)}
            className="flex flex-col items-center gap-2 group"
          >
            <div className={`w-14 h-14 rounded-2xl ${cat.bg} flex items-center justify-center ${cat.color} transition-transform active:scale-95`}>
              <cat.icon className="w-7 h-7" />
            </div>
            <span className="text-xs font-medium text-slate-700">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Recommendations */}
      <div className="px-4 pb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">为你推荐</h3>
        <button className="text-xs font-medium text-pink-600 flex items-center">
          查看更多
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="px-4 pb-6 columns-2 gap-3 space-y-3">
        {recommendations.map((item) => (
          <div 
            key={item.id} 
            onClick={() => navigate(`/product/${item.id}`)}
            className="break-inside-avoid rounded-xl bg-white border border-slate-100 shadow-sm overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
          >
            <div className={`relative w-full ${item.aspect} bg-slate-100`}>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-pink-600 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              {item.tag && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  {item.tag}
                </div>
              )}
            </div>
            <div className="p-3">
              <p className="text-xs text-pink-600 font-medium mb-1">{item.category}</p>
              <h4 className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2 mb-2">{item.title}</h4>
              <div className="flex items-end justify-between">
                <div className="flex flex-col">
                  {item.originalPrice && (
                    <span className="text-[10px] text-slate-400 line-through">¥{item.originalPrice.toFixed(2)}</span>
                  )}
                  <span className="text-base font-bold text-slate-900">
                    <span className="text-xs align-top">¥</span>{item.price}
                  </span>
                </div>
                <button className="w-7 h-7 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-md shadow-pink-600/30">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
