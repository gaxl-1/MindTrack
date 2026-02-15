import React, { useState } from 'react';
import { Brain, LogIn, PlusCircle, Activity } from 'lucide-react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Navigation */}
      <nav className="nav">
        <div className="flex items-center gap-2">
          <Brain className="text-indigo-500" size={32} />
          <span className="logo">MinTrack</span>
        </div>
        <div>
          {!isLoggedIn ? (
            <button className="btn btn-primary flex items-center gap-2" onClick={() => setIsLoggedIn(true)}>
              <LogIn size={18} /> Iniciar Sesión
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-muted">Hola, usuario@email.com</span>
              <button className="btn bg-slate-700 hover:bg-slate-600">Mi Perfil</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container flex-1">
        {!isLoggedIn ? (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <h1 className="text-6xl font-black mb-6 leading-tight">
              Toma el control de tu <br />
              <span className="text-indigo-500">Salud Mental</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mb-10">
              Registra tu estado de ánimo, identifica patrones y mejora tu bienestar emocional
              de forma sencilla y privada.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary text-lg px-8">Comenzar Gratis</button>
              <button className="btn bg-slate-800 text-lg px-8">Saber más</button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="glass-card col-span-2">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Activity className="text-indigo-500" /> Tu Actividad Reciente
              </h2>
              <div className="h-64 flex items-center justify-center border border-dashed border-slate-700 rounded-lg">
                <p className="text-muted">No hay registros de ánimo aún. ¡Crea el primero!</p>
              </div>
            </div>

            <div className="glass-card">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <PlusCircle className="text-green-500" /> Registro Rápido
              </h2>
              <div className="space-y-4">
                <p className="text-sm text-muted">¿Cómo te sientes en este momento?</p>
                <div className="flex justify-between gap-2">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
                    >
                      {val}
                    </button>
                  ))}
                </div>
                <textarea
                  className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Añade una nota opcionál..."
                  rows={3}
                ></textarea>
                <button className="btn btn-primary w-full">Guardar Registro</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="p-10 border-t border-slate-800 text-center text-muted">
        <p>&copy; 2026 MinTrack - Tu compañero de bienestar.</p>
      </footer>
    </div>
  );
}

export default App;
