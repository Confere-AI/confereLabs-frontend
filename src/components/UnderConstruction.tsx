import React from "react";

const UnderConstruction: React.FC = () => (
  <div
    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white text-gray-800 px-4"
  >
    <div className="flex flex-col items-center gap-4 p-8 rounded-xl shadow-lg bg-white/80 border border-blue-200 animate-fade-in">
      <img
        src="/imgs/icon-bg.jpg"
        alt="Em construção"
        className="w-20 h-20 rounded-full shadow-md border-4 border-blue-300 mb-2 animate-bounce"
      />
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 flex items-center gap-2">
        Aguarde, estamos construindo o ConfereAi
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-md">
        Em breve esta página estará disponível.<br />
        Agradecemos sua compreensão!
      </p>
      <div className="mt-4 flex items-center gap-2 text-blue-500 animate-pulse">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-tool"><path d="M14.7 6.3a5 5 0 0 1-7.4 6.3L2 20l4.4-4.4a5 5 0 0 1 6.3-7.4l1.4-1.4z"></path></svg>
        <span>Equipe Confere Labs</span>
      </div>
    </div>
    <style>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in { animation: fade-in 0.8s ease; }
      .animate-bounce { animation: bounce 1.2s infinite alternate; }
      @keyframes bounce {
        from { transform: translateY(0); }
        to { transform: translateY(-12px); }
      }
      .animate-pulse { animation: pulse 1.5s infinite; }
      @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
      }
    `}</style>
  </div>
);

export default UnderConstruction;