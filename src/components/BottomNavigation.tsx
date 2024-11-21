import React from 'react';
import { Wallet, Clock, CreditCard } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-around">
        <button 
          onClick={() => onTabChange('home')}
          className="flex flex-col items-center gap-1"
        >
          <Wallet className={`w-6 h-6 ${activeTab === 'home' ? 'text-purple-700' : 'text-gray-400'}`} />
          <span className={`text-xs ${activeTab === 'home' ? 'text-purple-700 font-medium' : 'text-gray-400'}`}>
            Home
          </span>
        </button>
        <button 
          onClick={() => onTabChange('history')}
          className="flex flex-col items-center gap-1"
        >
          <Clock className={`w-6 h-6 ${activeTab === 'history' ? 'text-purple-700' : 'text-gray-400'}`} />
          <span className={`text-xs ${activeTab === 'history' ? 'text-purple-700 font-medium' : 'text-gray-400'}`}>
            History
          </span>
        </button>
        <button 
          onClick={() => onTabChange('cards')}
          className="flex flex-col items-center gap-1"
        >
          <CreditCard className={`w-6 h-6 ${activeTab === 'cards' ? 'text-purple-700' : 'text-gray-400'}`} />
          <span className={`text-xs ${activeTab === 'cards' ? 'text-purple-700 font-medium' : 'text-gray-400'}`}>
            Cards
          </span>
        </button>
        <button 
          onClick={() => onTabChange('profile')}
          className="flex flex-col items-center gap-1"
        >
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
            activeTab === 'profile' ? 'bg-purple-700 text-white' : 'bg-gray-200'
          }`}>
            <span className="text-xs">JD</span>
          </div>
          <span className={`text-xs ${activeTab === 'profile' ? 'text-purple-700 font-medium' : 'text-gray-400'}`}>
            Profile
          </span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigation;