import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Star, Clock, CreditCard, Settings, LogOut } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const rideHistory = [
    {
      id: '1',
      date: '2024-01-15',
      from: 'Downtown Plaza',
      to: 'Airport Terminal',
      vehicle: 'Comfort Car',
      fare: '$24.50',
      rating: 5,
      status: 'completed',
    },
    {
      id: '2',
      date: '2024-01-12',
      from: 'Home',
      to: 'Shopping Mall',
      vehicle: 'Quick Bike',
      fare: '$8.25',
      rating: 4,
      status: 'completed',
    },
    {
      id: '3',
      date: '2024-01-10',
      from: 'Office',
      to: 'Restaurant',
      vehicle: 'Auto Rickshaw',
      fare: '$6.75',
      rating: 5,
      status: 'completed',
    },
  ];

  const paymentMethods = [
    {
      id: '1',
      type: 'card',
      last4: '1234',
      brand: 'Visa',
      isDefault: true,
    },
    {
      id: '2',
      type: 'card',
      last4: '5678',
      brand: 'Mastercard',
      isDefault: false,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">My Profile</h1>
          <p className="text-gray-300 text-lg">Manage your account and preferences</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">{user?.name}</h2>
                <p className="text-gray-300 text-sm">{user?.email}</p>
              </div>

              <nav className="space-y-2">
                {[
                  { id: 'profile', label: 'Profile', icon: User },
                  { id: 'rides', label: 'Ride History', icon: Clock },
                  { id: 'payments', label: 'Payment Methods', icon: CreditCard },
                  { id: 'settings', label: 'Settings', icon: Settings },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.id
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        value={user?.name || ''}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        value={user?.email || ''}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        value={user?.phone || ''}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Home Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder="Enter your home address"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="btn-primary px-8 py-3">
                    Save Changes
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'rides' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Ride History</h2>
                
                <div className="space-y-4">
                  {rideHistory.map((ride, index) => (
                    <motion.div
                      key={ride.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-600 rounded-xl p-6 hover:border-gray-500 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{ride.vehicle}</h3>
                          <p className="text-gray-300 text-sm">{ride.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-white">{ride.fare}</p>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < ride.rating ? 'text-luxury-400 fill-current' : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-primary-500 rounded-full" />
                          <span className="text-gray-300">{ride.from}</span>
                        </div>
                        <div className="ml-1.5 border-l-2 border-dashed border-gray-600 h-4" />
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-secondary-500 rounded-full" />
                          <span className="text-gray-300">{ride.to}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'payments' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Payment Methods</h2>
                  <button className="btn-primary px-6 py-2">
                    Add New Card
                  </button>
                </div>
                
                <div className="space-y-4">
                  {paymentMethods.map((method, index) => (
                    <motion.div
                      key={method.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-600 rounded-xl p-6 hover:border-gray-500 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded flex items-center justify-center">
                            <CreditCard className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-medium">
                              {method.brand} •••• {method.last4}
                            </p>
                            <p className="text-gray-400 text-sm">Expires 12/25</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          {method.isDefault && (
                            <span className="px-3 py-1 bg-primary-500 text-white text-sm rounded-full">
                              Default
                            </span>
                          )}
                          <button className="text-gray-400 hover:text-white transition-colors">
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-gray-600 pb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Notifications</h3>
                    <div className="space-y-3">
                      {[
                        'Push notifications',
                        'Email updates',
                        'SMS alerts',
                        'Promotional offers',
                      ].map((setting) => (
                        <label key={setting} className="flex items-center justify-between">
                          <span className="text-gray-300">{setting}</span>
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-5 h-5 text-primary-500 bg-gray-800 border-gray-600 rounded focus:ring-primary-500 focus:ring-2"
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-b border-gray-600 pb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Privacy</h3>
                    <div className="space-y-3">
                      {[
                        'Share ride data for better experience',
                        'Location tracking',
                        'Data analytics',
                      ].map((setting) => (
                        <label key={setting} className="flex items-center justify-between">
                          <span className="text-gray-300">{setting}</span>
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-5 h-5 text-primary-500 bg-gray-800 border-gray-600 rounded focus:ring-primary-500 focus:ring-2"
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Account</h3>
                    <div className="space-y-3">
                      <button className="w-full text-left px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-white transition-colors">
                        Change Password
                      </button>
                      <button className="w-full text-left px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-white transition-colors">
                        Download My Data
                      </button>
                      <button className="w-full text-left px-4 py-3 bg-red-600 hover:bg-red-700 rounded-xl text-white transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;