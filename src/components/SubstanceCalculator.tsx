"use client";

import { useState, useMemo } from 'react';
import { substances, getInteraction, Substance, Interaction, severityColors } from '@/data/substances';
import { Search, X, AlertTriangle, Info, Skull, ShieldCheck, AlertOctagon, Pill, Activity } from 'lucide-react';

export default function SubstanceCalculator() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Substance[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const filteredSubstances = useMemo(() => {
    if (!query) return substances;
    const q = query.toLowerCase();
    return substances.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.category.toLowerCase().includes(q) ||
      s.brandNames?.some(b => b.toLowerCase().includes(q))
    );
  }, [query]);

  const handleSelect = (substance: Substance) => {
    if (!selected.find(s => s.id === substance.id)) {
      setSelected([...selected, substance]);
    }
    setQuery('');
    setIsOpen(false);
  };

  const handleRemove = (id: string) => {
    setSelected(selected.filter(s => s.id !== id));
  };

  const interactions = useMemo(() => {
    const results: Interaction[] = [];
    for (let i = 0; i < selected.length; i++) {
      for (let j = i + 1; j < selected.length; j++) {
        const interaction = getInteraction(selected[i].id, selected[j].id);
        if (interaction) {
          results.push(interaction);
        }
      }
    }
    return results;
  }, [selected]);

  const getIcon = (severity: string) => {
    switch (severity) {
      case 'Safe': return <ShieldCheck className="w-5 h-5" />;
      case 'Caution': return <Info className="w-5 h-5" />;
      case 'Unsafe': return <AlertTriangle className="w-5 h-5" />;
      case 'Dangerous': return <AlertOctagon className="w-5 h-5" />;
      case 'Deadly': return <Skull className="w-5 h-5" />;
      default: return <Info className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Search Section */}
      <div className="relative max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for a substance (e.g., Alcohol, Xanax, Coffee)..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
        </div>

        {isOpen && (query || filteredSubstances.length > 0) && (
          <div className="absolute w-full mt-2 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-800 max-h-80 overflow-y-auto z-50">
            {filteredSubstances.map(substance => (
              <button
                key={substance.id}
                onClick={() => handleSelect(substance)}
                className="w-full text-left px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex flex-col gap-1 group transition-colors border-b border-zinc-50 dark:border-zinc-800/50 last:border-0"
              >
                <div className="flex justify-between items-center w-full">
                  <span className="font-medium">{substance.name}</span>
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                    {substance.category}
                  </span>
                </div>
                {substance.brandNames && substance.brandNames.length > 0 && (
                  <span className="text-xs text-zinc-400 truncate w-full">
                    Brands: {substance.brandNames.join(', ')}
                  </span>
                )}
              </button>
            ))}
            {filteredSubstances.length === 0 && (
              <div className="px-4 py-3 text-zinc-500 text-center">No substances found</div>
            )}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Selected Substances List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold opacity-80 px-1">Your Mix</h2>
          {selected.length > 0 ? (
            <div className="space-y-3">
              {selected.map(substance => (
                <div 
                  key={substance.id}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{substance.name}</h3>
                      <span className="text-xs font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                        {substance.category}
                      </span>
                    </div>
                    <button 
                      onClick={() => handleRemove(substance.id)}
                      className="text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-1.5 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {substance.brandNames && (
                    <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                      <Pill className="w-3 h-3 shrink-0" />
                      <span className="truncate">{substance.brandNames.join(', ')}</span>
                    </div>
                  )}

                  {substance.sideEffects && (
                    <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 mb-1.5">
                        <Activity className="w-3 h-3" />
                        POTENTIAL SIDE EFFECTS
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {substance.sideEffects.map(effect => (
                          <span 
                            key={effect}
                            className="text-xs px-2 py-1 rounded-md bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800"
                          >
                            {effect}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-8 text-zinc-400 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl min-h-[200px]">
              <Search className="w-8 h-8 mb-2 opacity-20" />
              <p>Search and add substances to see details</p>
            </div>
          )}
        </div>

        {/* Interactions Display */}
        <div className="space-y-4">
           <h2 className="text-lg font-semibold opacity-80 px-1">Interactions Analysis</h2>
          {selected.length > 1 ? (
            interactions.length > 0 ? (
              <div className="space-y-3">
                {interactions.map(interaction => {
                  const sub1 = substances.find(s => s.id === interaction.substances[0])?.name;
                  const sub2 = substances.find(s => s.id === interaction.substances[1])?.name;
                  
                  return (
                    <div 
                      key={interaction.id} 
                      className={`p-4 rounded-xl border flex items-start gap-4 ${severityColors[interaction.severity]}`}
                    >
                      <div className="mt-1 shrink-0">
                        {getIcon(interaction.severity)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg flex items-center gap-2">
                          {interaction.severity}
                          <span className="text-sm font-normal opacity-80">({sub1} + {sub2})</span>
                        </h3>
                        <p className="mt-1 text-sm opacity-90 leading-relaxed">
                          {interaction.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
               <div className="p-6 text-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-500">
                 <ShieldCheck className="w-12 h-12 mx-auto mb-2 opacity-20" />
                 <p className="font-medium mb-1">No Specific Interactions Found</p>
                 <p className="text-sm opacity-80">Our database doesn't show a known major interaction between these specific substances, but this does not guarantee safety.</p>
               </div>
            )
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-8 text-zinc-400 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl min-h-[200px]">
              <AlertTriangle className="w-8 h-8 mb-2 opacity-20" />
              <p>Add at least two substances to check interactions</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="text-xs text-zinc-400 text-center mt-12 p-4 border-t border-zinc-100 dark:border-zinc-800">
        <p className="font-bold mb-1">MEDICAL DISCLAIMER</p>
        <p>
          This tool is for educational and harm reduction purposes only. It is not medical advice. 
          The absence of an interaction warning does not mean a combination is safe. 
          Individual reactions vary. Always consult a medical professional.
          In case of emergency, call your local emergency services immediately.
        </p>
      </div>
    </div>
  );
}
