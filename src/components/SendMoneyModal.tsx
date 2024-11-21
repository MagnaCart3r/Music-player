import React from 'react';
import { X, Search, User } from 'lucide-react';

interface SendMoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const recentContacts = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah.j@email.com' },
  { id: 2, name: 'Mike Peters', email: 'mike.p@email.com' },
  { id: 3, name: 'Emma Wilson', email: 'emma.w@email.com' },
];

const SendMoneyModal: React.FC<SendMoneyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center">
      <div className="bg-white w-full sm:w-[480px] sm:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-auto">
        <div className="p-4 border-b sticky top-0 bg-white z-10">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold">Send Money</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search name or email"
              className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Recent</h3>
          <div className="space-y-3">
            {recentContacts.map(contact => (
              <button
                key={contact.id}
                className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                  <User className="w-6 h-6 text-purple-700" />
                </div>
                <div className="text-left">
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-gray-500">{contact.email}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 border-t sticky bottom-0 bg-white">
          <button className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
            New Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoneyModal;