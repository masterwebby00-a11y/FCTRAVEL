import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';

export default function Magazine() {
  const file = 'https://drive.google.com/file/d/1WJEx4OD8pyfWs2a6djpkzb_gSuSxyT-s/preview';
  
  const handleExpand = () => {
    window.open('https://drive.google.com/file/d/1WJEx4OD8pyfWs2a6djpkzb_gSuSxyT-s/view?usp=sharing', '_blank');
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4 block">Experiencia Digital</span>
          <h2 className="serif text-3xl md:text-5xl mb-6">Nuestra Revista</h2>
          <p className="text-white/60 mb-4">
            Explora las últimas tendencias, destinos y consejos de viaje en nuestra revista interactiva.
          </p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-accent font-medium italic text-lg"
          >
            "Descubre el mundo a través de nuestras páginas. Tu próxima aventura comienza aquí."
          </motion.p>
        </div>

        <button 
          onClick={handleExpand}
          className="flex items-center gap-3 rounded-full bg-brand-accent px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg hover:shadow-brand-accent/20 transition-all hover:-translate-y-1 group"
        >
          <Maximize2 className="h-4 w-4 transition-transform group-hover:scale-110" />
          Ver Revista Completa
        </button>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="relative p-6 md:p-8 rounded-[48px] bg-black/60 border border-white/10 shadow-3xl overflow-hidden backdrop-blur-xl aspect-[1/1.45] flex flex-col items-center">
          {/* Fondo decorativo con puntos */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0z' fill='%23fff'/%3E%3C/svg%3E")` }}></div>
          
          <div className="relative w-full h-[85%] rounded-lg overflow-hidden shadow-2xl bg-white/5 border border-white/5">
            <iframe 
              src={file} 
              className="w-full h-full" 
              allow="autoplay"
              title="FC Travel Magazine"
            ></iframe>
          </div>
          
          {/* Decoración inferior tipo "Pass Page" */}
          <div className="mt-6 md:mt-8 flex flex-col items-center gap-2 opacity-50">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Navegar Revista</span>
            <div className="h-5 w-5 border border-brand-accent/50 rounded-sm flex items-center justify-center p-1">
               <div className="w-[1px] h-full bg-brand-accent/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
