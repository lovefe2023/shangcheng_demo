import { ArrowLeft, Search, Flower2, Gamepad2, Diamond, Cake, Shirt, Laptop, Home as HomeIcon, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Category() {
  const navigate = useNavigate();

  const categories = [
    { id: 'flowers', icon: Flower2, label: '鲜花', active: true },
    { id: 'toys', icon: Gamepad2, label: '玩具' },
    { id: 'jewelry', icon: Diamond, label: '珠宝' },
    { id: 'cake', icon: Cake, label: '蛋糕' },
    { id: 'clothing', icon: Shirt, label: '服饰' },
    { id: 'electronics', icon: Laptop, label: '数码' },
    { id: 'home', icon: HomeIcon, label: '家居' },
  ];

  const products = [
    { id: 1, name: '玫瑰', image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: '郁金香', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&q=80&w=200' },
    { id: 3, name: '百合', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=200' },
    { id: 4, name: '向日葵', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=200' },
    { id: 5, name: '兰花', image: 'https://images.unsplash.com/photo-1566807810030-3eaa60f3e670?auto=format&fit=crop&q=80&w=200' },
    { id: 6, name: '干花', image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&q=80&w=200' },
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="flex flex-col gap-3 px-4 pt-6 pb-2 bg-white z-10 shrink-0">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold text-center flex-1 pr-8">商品分类</h1>
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-pink-600/60">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="搜索鲜花、玩具、礼品..." 
            className="block w-full p-3 pl-10 text-sm rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-pink-600 placeholder-slate-400 transition-all outline-none"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden relative border-t border-slate-100">
        {/* Sidebar */}
        <aside className="w-24 flex-shrink-0 h-full overflow-y-auto no-scrollbar bg-slate-50 border-r border-slate-100 py-2">
          <nav className="flex flex-col gap-1 px-1">
            {categories.map((cat) => (
              <button 
                key={cat.id}
                className={`flex flex-col items-center gap-2 p-3 w-full rounded-lg transition-colors group relative ${
                  cat.active ? 'bg-white shadow-sm' : 'hover:bg-white/50'
                }`}
              >
                {cat.active && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-600 rounded-r-full"></div>
                )}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  cat.active ? 'bg-pink-600/10 text-pink-600' : 'bg-slate-200 text-slate-500 group-hover:text-pink-600'
                }`}>
                  <cat.icon className="w-6 h-6" />
                </div>
                <span className={`text-[11px] leading-tight text-center ${
                  cat.active ? 'font-bold text-pink-600' : 'font-medium text-slate-600 group-hover:text-pink-600'
                }`}>
                  {cat.label}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <section className="flex-1 h-full overflow-y-auto bg-white p-4 pb-24">
          {/* Banner */}
          <div className="w-full h-32 rounded-xl mb-6 relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=600" 
              alt="Banner" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-transparent flex flex-col justify-center p-4">
              <span className="text-white text-xs font-bold uppercase tracking-wider mb-1">新品上市</span>
              <h3 className="text-white text-xl font-bold leading-tight">春日繁花 <br/>系列</h3>
            </div>
          </div>

          {/* Section Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-900">热门鲜花</h2>
            <button className="text-xs font-semibold text-pink-600 hover:text-pink-600/80">查看全部</button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <button 
                key={product.id} 
                onClick={() => navigate(`/product/${product.id}`)}
                className="flex flex-col gap-2 group"
              >
                <div className="aspect-square rounded-xl bg-slate-50 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs font-medium text-center text-slate-700 group-hover:text-pink-600 transition-colors">
                  {product.name}
                </p>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
