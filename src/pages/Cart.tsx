import { ArrowLeft, Store, ChevronRight, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-20 bg-white px-4 pt-6 pb-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-bold leading-tight flex-1 text-center">购物车 (3)</h2>
          <button className="flex h-10 items-center justify-end px-2">
            <span className="text-pink-600 text-base font-bold">编辑</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-32">
        {/* Store 1 */}
        <div className="mt-4 bg-white rounded-xl mx-4 shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
            <input type="checkbox" className="h-5 w-5 rounded border-2 border-slate-300 text-pink-600 focus:ring-0 checked:bg-pink-600 checked:border-pink-600 transition-all cursor-pointer" />
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-slate-700" />
              <h3 className="font-bold text-sm">平台自营</h3>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>
          </div>
          
          {/* Item 1 */}
          <div className="group relative flex gap-3 p-4 transition-colors hover:bg-slate-50">
            <div className="flex items-center justify-center pt-8"> 
              <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-2 border-slate-300 text-pink-600 focus:ring-0 checked:bg-pink-600 checked:border-pink-600 transition-all cursor-pointer" />
            </div>
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200" alt="Shoes" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between py-1">
              <div>
                <h4 className="text-sm font-medium leading-snug line-clamp-2 mb-1">精美礼盒套装 - 红色丝带限量版</h4>
                <div className="inline-flex items-center rounded bg-slate-50 px-2 py-1 text-xs text-slate-500 mb-2">
                  <span>规格: 红色, 大号</span>
                  <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-pink-600">¥</span>
                  <span className="text-lg font-bold text-pink-600">45.00</span>
                </div>
                <div className="flex items-center rounded-lg border border-slate-200 bg-white">
                  <button className="flex h-7 w-7 items-center justify-center text-slate-400 hover:text-pink-600 transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium text-slate-900">1</span>
                  <button className="flex h-7 w-7 items-center justify-center text-slate-400 hover:text-pink-600 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-slate-100 ml-12"></div>

          {/* Item 2 */}
          <div className="group relative flex gap-3 p-4 transition-colors hover:bg-slate-50">
            <div className="flex items-center justify-center pt-8">
              <input type="checkbox" className="h-5 w-5 rounded border-2 border-slate-300 text-pink-600 focus:ring-0 checked:bg-pink-600 checked:border-pink-600 transition-all cursor-pointer" />
            </div>
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
              <img src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=200" alt="Tea" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between py-1">
              <div>
                <h4 className="text-sm font-medium leading-snug line-clamp-2 mb-1">特级有机绿茶 50g - 新茶上市</h4>
                <div className="inline-flex items-center rounded bg-slate-50 px-2 py-1 text-xs text-slate-500 mb-2">
                  <span>规格: 50g 袋装</span>
                  <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-pink-600">¥</span>
                  <span className="text-lg font-bold text-pink-600">12.50</span>
                </div>
                <div className="flex items-center rounded-lg border border-slate-200 bg-white">
                  <button className="flex h-7 w-7 items-center justify-center text-slate-400 hover:text-pink-600 transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium text-slate-900">2</span>
                  <button className="flex h-7 w-7 items-center justify-center text-slate-400 hover:text-pink-600 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store 2 */}
        <div className="mt-4 bg-white rounded-xl mx-4 shadow-sm overflow-hidden mb-4">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
            <input type="checkbox" className="h-5 w-5 rounded border-2 border-slate-300 text-pink-600 focus:ring-0 checked:bg-pink-600 checked:border-pink-600 transition-all cursor-pointer" />
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-slate-700" />
              <h3 className="font-bold text-sm">设计官方旗舰店</h3>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="group relative flex gap-3 p-4 transition-colors hover:bg-slate-50">
            <div className="flex items-center justify-center pt-8">
              <input type="checkbox" className="h-5 w-5 rounded border-2 border-slate-300 text-pink-600 focus:ring-0 checked:bg-pink-600 checked:border-pink-600 transition-all cursor-pointer" />
            </div>
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
              <img src="https://images.unsplash.com/photo-1508656919602-0e21101b6197?auto=format&fit=crop&q=80&w=200" alt="Watch" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between py-1">
              <div>
                <h4 className="text-sm font-medium leading-snug line-clamp-2 mb-1">极简主义腕表 - 白色表带</h4>
                <div className="inline-flex items-center rounded bg-slate-50 px-2 py-1 text-xs text-slate-500 mb-2">
                  <span>规格: 标准版</span>
                  <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-pink-600">¥</span>
                  <span className="text-lg font-bold text-pink-600">120.00</span>
                </div>
                <div className="flex items-center rounded-lg border border-slate-200 bg-white">
                  <button className="flex h-7 w-7 items-center justify-center text-slate-400 hover:text-pink-600 transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium text-slate-900">1</span>
                  <button className="flex h-7 w-7 items-center justify-center text-slate-400 hover:text-pink-600 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20"></div>
      </main>

      {/* Checkout Bar */}
      <div className="fixed bottom-[60px] left-0 right-0 z-10 border-t border-slate-200 bg-white px-4 py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] max-w-md mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input type="checkbox" id="selectAll" className="h-5 w-5 rounded border-2 border-slate-300 text-pink-600 focus:ring-0 checked:bg-pink-600 checked:border-pink-600 transition-all cursor-pointer" />
            <label htmlFor="selectAll" className="text-sm font-medium text-slate-600 select-none cursor-pointer">全选</label>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-medium text-slate-900">合计:</span>
                <span className="text-lg font-bold text-pink-600">¥45.00</span>
              </div>
              <span className="text-xs text-slate-500">已包含优惠</span>
            </div>
            <button onClick={() => navigate('/checkout')} className="h-10 rounded-full bg-pink-600 px-6 text-sm font-bold text-white shadow-lg shadow-pink-600/30 active:scale-95 transition-transform hover:bg-pink-700">
              去结算 (1)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
