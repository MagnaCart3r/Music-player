import React, { useState } from 'react';
import { 
  Wallet, 
  Send, 
  QrCode, 
  Receipt, 
  Phone, 
  ShoppingCart, 
  CreditCard,
  TrendingUp
} from 'lucide-react';
import QuickAction from './components/QuickAction';
import TransactionItem from './components/TransactionItem';
import SendMoneyModal from './components/SendMoneyModal';
import BottomNavigation from './components/BottomNavigation';

function App() {
  const [isSendMoneyOpen, setIsSendMoneyOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [activeQuickAction, setActiveQuickAction] = useState<string | null>(null);

  const handleQuickAction = (action: string) => {
    if (action === 'send') {
      setIsSendMoneyOpen(true);
    }
    setActiveQuickAction(action);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Wallet className="w-8 h-8" />
            <h1 className="text-2xl font-bold">PayPro</h1>
          </div>
          <div className="flex items-center gap-4">
            <QrCode className="w-6 h-6" />
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-sm font-semibold">JD</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-sm opacity-80">Total Balance</p>
          <h2 className="text-3xl font-bold mt-1">$2,459.50</h2>
          <div className="flex items-center gap-2 mt-2">
            <TrendingUp className="w-4 h-4 text-purple-200" />
            <span className="text-sm text-purple-200">+2.4% this week</span>
          </div>
        </div>
      </header>

      {/* Quick Actions */}
      <div className="px-6 py-8">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-4">
          <QuickAction 
            icon={Send} 
            label="Send Money" 
            onClick={() => handleQuickAction('send')}
            isActive={activeQuickAction === 'send'}
          />
          <QuickAction 
            icon={Phone} 
            label="Airtime" 
            onClick={() => handleQuickAction('airtime')}
            isActive={activeQuickAction === 'airtime'}
          />
          <QuickAction 
            icon={Receipt} 
            label="Pay Bills" 
            onClick={() => handleQuickAction('bills')}
            isActive={activeQuickAction === 'bills'}
          />
          <QuickAction 
            icon={ShoppingCart} 
            label="Shopping" 
            onClick={() => handleQuickAction('shopping')}
            isActive={activeQuickAction === 'shopping'}
          />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-6 pb-24">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <button className="text-purple-700 text-sm font-medium">See All</button>
        </div>
        
        <div className="space-y-4">
          <TransactionItem 
            name="Netflix Subscription"
            amount="-$15.99"
            date="Today"
            icon={CreditCard}
            type="debit"
          />
          <TransactionItem 
            name="Sarah Johnson"
            amount="+$250.00"
            date="Yesterday"
            icon={Send}
            type="credit"
          />
          <TransactionItem 
            name="Electric Bill"
            amount="-$84.50"
            date="Mar 15"
            icon={Receipt}
            type="debit"
          />
          <TransactionItem 
            name="Phone Recharge"
            amount="-$20.00"
            date="Mar 14"
            icon={Phone}
            type="debit"
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Send Money Modal */}
      <SendMoneyModal 
        isOpen={isSendMoneyOpen} 
        onClose={() => {
          setIsSendMoneyOpen(false);
          setActiveQuickAction(null);
        }} 
      />
    </div>
  );
}

export default App;