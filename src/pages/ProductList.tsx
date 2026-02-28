import { ArrowLeft, Search, Filter, ArrowUpDown, Heart, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: '花漾精华限量版香水',
      category: '美妆',
      price: 638,
      originalPrice: 850,
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400',
      aspect: 'aspect-[4/5]',
      sales: '2.3k',
    },
    {
      id: 2,
      title: '智能手表 Series 7',
      category: '数码',
      price: 1799,
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400',
      aspect: 'aspect-square',
      sales: '1.5k',
    },
    {
      id: 3,
      title: '真皮斜挎包',
      category: '时尚',
      price: 999,
      image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400',
      aspect: 'aspect-[3/4]',
      tag: '热卖',
      sales: '800+',
    },
    {
      id: 4,
      title: '现代简约陶瓷花瓶',
      category: '家居',
      price: 228,
      image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=400',
      aspect: 'aspect-square',
      sales: '3.1k',
    },
    {
      id: 5,
      title: '专业跑步运动鞋',
      category: '运动',
      price: 899,
      originalPrice: 1280,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400',
      aspect: 'aspect-[4/5]',
      sales: '5.6k',
    },
    {
      id: 6,
      title: '无线降噪蓝牙耳机',
      category: '数码',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400',
      aspect: 'aspect-square',
      sales: '4.2k',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans max-w-md mx-auto shadow-2xl relative">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white shadow-sm">
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => navigate('/')} className="p-2 -ml-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 flex items-center bg-slate-100 rounded-full px-4 py-2">
            <Search className="text-slate-400 w-4 h-4 mr-2" />
            <input 
              type="text" 
              placeholder="搜索商品..." 
              className="bg-transparent border-none outline-none w-full text-sm text-slate-900 placeholder-slate-400"
            />
          </div>
        </div>
        
        {/* Sort/Filter Tabs */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
          <button className="text-sm font-bold text-pink-600">综合</button>
          <button className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors">销量</button>
          <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors">
            价格
            <ArrowUpDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors">
            筛选
            <Filter className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1 overflow-y-auto p-4 pb-8">
        <div className="columns-2 gap-3 space-y-3">
          {products.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(`/product/${item.id}`)}
              className="break-inside-avoid rounded-xl bg-white border border-slate-100 shadow-sm overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div className={`relative w-full ${item.aspect} bg-slate-100`}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <button 
                  onClick={(e) => { e.stopPropagation(); /* handle favorite */ }}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-pink-600 transition-colors"
                >
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
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">已售 {item.sales}</span>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    {item.originalPrice && (
                      <span className="text-[10px] text-slate-400 line-through">¥{item.originalPrice.toFixed(2)}</span>
                    )}
                    <span className="text-base font-bold text-slate-900">
                      <span className="text-xs align-top">¥</span>{item.price}
                    </span>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); /* handle add to cart */ }}
                    className="w-7 h-7 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-md shadow-pink-600/30 active:scale-95 transition-transform"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">没有更多商品了</p>
        </div>
      </div>
    </div>
  );
}
