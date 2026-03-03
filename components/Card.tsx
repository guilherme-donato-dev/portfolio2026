import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noHover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', noHover = false }) => {
  return (
    <div 
      className={`
        bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col
        ${!noHover ? 'hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};