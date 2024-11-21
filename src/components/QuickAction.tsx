import React from 'react';
import { LucideIcon } from 'lucide-react';

interface QuickActionProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const QuickAction: React.FC<QuickActionProps> = ({ 
  icon: Icon, 
  label, 
  onClick,
  isActive = false
}) => {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center gap-2 transition-transform active:scale-95"
    >
      <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
        isActive 
          ? 'bg-gradient-to-br from-purple-700 to-indigo-800' 
          : 'bg-gradient-to-br from-purple-100 to-purple-50'
      }`}>
        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-purple-700'}`} />
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </button>
  );
};

export default QuickAction;