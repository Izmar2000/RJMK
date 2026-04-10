'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { metaalPrijzen } from '@/lib/prices';
import { TrendingUp, TrendingDown, Minus, Info, ShieldCheck, ArrowRight } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function PrijzenWidget() {
  const [view, setView] = useState<'table' | 'chart'>('table');
  const [selectedMetal, setSelectedMetal] = useState(metaalPrijzen[0]);

  const chartData = {
    labels: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'],
    datasets: [
      {
        label: `Trend ${selectedMetal.naam}`,
        data: selectedMetal.historisch,
        borderColor: selectedMetal.kleur,
        backgroundColor: `${selectedMetal.kleur}33`, // 20% opacity
        fill: true,
        tension: 0.4,
        pointBackgroundColor: selectedMetal.kleur,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: selectedMetal.kleur,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0F172A',
        titleColor: '#FFFFFF',
        bodyColor: '#E2E8F0',
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `Trend: ${context.parsed.y > context.dataset.data[0] ? 'Stijgend' : 'Zakkend'}`;
          }
        }
      },
    },
    scales: {
      y: {
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: { color: '#475569', display: false },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#475569' },
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden shadow-lg border border-slate-200">
      {/* Header */}
      <div className="bg-slate-50 p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-2xl font-display font-bold text-rjmk-dark tracking-wide flex items-center">
            Actuele Dagprijzen
            <span className="ml-3 px-2 py-1 bg-rjmk-blue/10 text-rjmk-blue text-xs rounded-md font-sans tracking-normal uppercase font-bold">Live LME</span>
          </h3>
          <p className="text-sm text-slate-600 mt-1">Marktconforme inkoopprijzen, direct gekoppeld aan de LME koers.</p>
        </div>
        
        {/* Toggle */}
        <div className="flex bg-slate-200 rounded-lg p-1 border border-slate-300">
          <button
            onClick={() => setView('table')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${view === 'table' ? 'bg-white text-rjmk-blue shadow-sm' : 'text-slate-600 hover:text-rjmk-dark'}`}
          >
            Tabel
          </button>
          <button
            onClick={() => setView('chart')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${view === 'chart' ? 'bg-white text-rjmk-blue shadow-sm' : 'text-slate-600 hover:text-rjmk-dark'}`}
          >
            Grafiek
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        {view === 'table' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider font-medium">
                  <th className="pb-4 pl-4 text-left">Materiaal</th>
                  <th className="pb-4 text-right pr-4">Markttrend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {metaalPrijzen.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group cursor-pointer" onClick={() => { setSelectedMetal(item); setView('chart'); }}>
                    <td className="py-4 pl-4 font-medium text-rjmk-dark">
                      <Link href={`/producten/${item.id}`} className="px-1 flex items-center hover:text-rjmk-blue transition-colors group-hover:translate-x-1 duration-300">
                        <div className="w-2 h-2 rounded-full mr-3 shrink-0" style={{ backgroundColor: item.kleur }}></div>
                        {item.naam}
                      </Link>
                    </td>
                    <td className="py-4 pr-4">
                      <div className="flex justify-end pr-2">
                        {item.trend === 'up' && <TrendingUp className="w-5 h-5 text-badge-green" />}
                        {item.trend === 'down' && <TrendingDown className="w-5 h-5 text-red-500" />}
                        {item.trend === 'stable' && <Minus className="w-5 h-5 text-slate-400" />}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Metal Selector for Chart */}
            <div className="flex flex-wrap gap-2">
              {metaalPrijzen.map((item) => (
                <button
                  key={item.naam}
                  onClick={() => setSelectedMetal(item)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                    selectedMetal.naam === item.naam 
                      ? 'bg-rjmk-blue border-rjmk-blue text-white' 
                      : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:text-rjmk-dark'
                  }`}
                >
                  {item.naam}
                </button>
              ))}
            </div>
            
            {/* Chart Container */}
            <div className="h-64 w-full relative">
              <Line data={chartData} options={chartOptions} />
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-slate-200">
              <Link href="/dagprijzen" className="text-rjmk-blue text-sm font-medium flex items-center hover:text-rjmk-accent transition-colors">
                Bekijk trend <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <button onClick={() => setView('table')} className="text-sm text-rjmk-blue font-medium hover:text-rjmk-accent transition-colors">
                &larr; Terug naar tabel
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer Note */}
      <div className="bg-slate-50 p-4 text-xs text-slate-500 text-center border-t border-slate-200">
        Marktconforme inkoopprijzen op basis van LME-koersen. Neem contact op voor exacte prijzen bij grote volumes.
      </div>
    </div>
  );
}
