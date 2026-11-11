import React from 'react';

export const Header = () => {
  return (
    <header className="bg-slate-900 text-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-blue-400">LOS LIBROS DE RAVEN</span>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li className="hover:text-blue-400 cursor-pointer">Inicio</li>
          <li className="hover:text-blue-400 cursor-pointer">Catálogo</li>
        </ul>
      </nav>
    </header>
  );
};