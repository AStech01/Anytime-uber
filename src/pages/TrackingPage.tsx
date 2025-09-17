import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Star, Navigation as NavigationIcon, Clock, User } from 'lucide-react';
import Navigation from '../components/Navigation';

const TrackingPage: React.FC = () => {
  const [rideStatus, setRideStatus] = useState('searching'); // searching, driver_assigned, en_route, arrived, completed
  const [estimatedTime, setEstimatedTime] = useState(8);

  useEffect(() => {
    // Simulate ride status updates
    const statusFlow = ['searching', 'driver_assigned', 'en_route', 'arrived'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < statusFlow.length - 1) {
        currentIndex++;
        setRideStatus(statusFlow[currentIndex]);
        if (statusFlow[currentIndex] === 'en_route') {
          setEstimatedTime(5);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusMessage = () => {
    switch (rideStatus) {
      case 'searching':
        return 'Finding you the perfect ride...';
      case 'driver_assigned':
        return 'Driver found! Getting ready to pick you up';
      case 'en_route':
        return 'Driver is on the way';
      case 'arrived':
        return 'Your driver has arrived!';
      default:
        return 'Processing...';
    }
  };

  const driverInfo = {
    name: 'Alex Johnson',
    rating: 4.9,
    vehicle: 'Honda Civic - ABC 123',
    phone: '+1 234 567 8900',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
  };

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Track Your Ride</h1>
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${rideStatus === 'searching' ? 'bg-yellow-400 animate-pulse' : 'bg-primary-500'}`} />
            <span className="text-gray-300 text-lg">{getStatusMessage()}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-6 rounded-2xl"
          >
            <div className="w-full h-80 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center text-gray-300">
                <NavigationIcon className="h-16 w-16 mx-auto mb-4 opacity-50 animate-pulse" />
                <p className="text-lg font-medium">Live Map Tracking</p>
                <p className="text-sm mt-1">Real-time location updates</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Pickup Location</p>
                  <p className="text-gray-300 text-sm">123 Main Street, Downtown</p>
                </div>
              </div>
              <div className="ml-1.5 border-l-2 border-dashed border-gray-600 h-6" />
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-secondary-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Destination</p>
                  <p className="text-gray-300 text-sm">456 Oak Avenue, Uptown</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Ride Details */}
          <div className="space-y-6">
            {/* Trip Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Trip Status</h2>
                <div className="flex items-center space-x-2 text-primary-400">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">{estimatedTime} min</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${rideStatus !== 'searching' ? 'bg-primary-500' : 'bg-gray-400'}`} />
                    <span className="text-white">Ride Confirmed</span>
                  </div>
                  {rideStatus !== 'searching' && (
                    <span className="text-primary-400 text-sm">✓</span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${['driver_assigned', 'en_route', 'arrived'].includes(rideStatus) ? 'bg-primary-500' : 'bg-gray-400'}`} />
                    <span className="text-white">Driver Assigned</span>
                  </div>
                  {['driver_assigned', 'en_route', 'arrived'].includes(rideStatus) && (
                    <span className="text-primary-400 text-sm">✓</span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${['en_route', 'arrived'].includes(rideStatus) ? 'bg-primary-500 animate-pulse' : 'bg-gray-400'}`} />
                    <span className="text-white">On the Way</span>
                  </div>
                  {rideStatus === 'arrived' && (
                    <span className="text-primary-400 text-sm">✓</span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${rideStatus === 'arrived' ? 'bg-primary-500' : 'bg-gray-400'}`} />
                    <span className="text-white">Arrived</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Driver Information */}
            {rideStatus !== 'searching' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-6">Your Driver</h3>
                
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={driverInfo.avatar}
                    alt={driverInfo.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">{driverInfo.name}</h4>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-luxury-400 fill-current" />
                      <span className="text-gray-300">{driverInfo.rating}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{driverInfo.vehicle}</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 btn-primary flex items-center justify-center space-x-2 py-3">
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </button>
                  <button className="flex-1 btn-secondary flex items-center justify-center space-x-2 py-3">
                    <MessageCircle className="h-4 w-4" />
                    <span>Message</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Trip Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-6">Trip Details</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Vehicle Type</span>
                  <span className="text-white font-medium">Comfort Car</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Distance</span>
                  <span className="text-white font-medium">8.5 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Estimated Fare</span>
                  <span className="text-white font-medium">$24.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Payment Method</span>
                  <span className="text-white font-medium">Card ending •••• 1234</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;