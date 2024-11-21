import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TransactionItemProps {
  icon: LucideIcon;
  name: string;
  amount: string;
  date: string;
  type: 'credit' | 'debit';
}

const TransactionItem: React.FC<TransactionItemProps> = ({ 
  icon: Icon, 
  name, 
  amount, 
  date,
  type
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
          <Icon className="w-5 h-5 text-purple-700" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <span className={`font-semibold ${type === 'credit' ? 'text-purple-600' : 'text-gray-900'}`}>
        {amount}
      </span>
    </div>
  );
};

export default TransactionItem;