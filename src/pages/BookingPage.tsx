// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Navigation as NavigationIcon, Clock, CreditCard } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import Navigation from '../components/Navigation';
// import VehicleCard from '../components/VehicleCard';
// import { useAuth } from '../contexts/AuthContext';

// const BookingPage: React.FC = () => {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [selectedVehicle, setSelectedVehicle] = useState<string>('');
//   const [bookingData, setBookingData] = useState({
//     pickup: '',
//     destination: '',
//     date: '',
//     time: '',
//     passengers: 1,
//   });

//   const vehicles = [
//     {
//       id: 'bike-1',
//       name: 'Quick Bike',
//       type: 'Motorcycle',
//       image: 'https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=100',
//       capacity: 1,
//       pricePerKm: 2.5,
//       estimatedTime: '5-8 min',
//       rating: 4.7,
//       features: ['Helmet included', 'Fast arrival', 'Eco-friendly'],
//     },
//     {
//       id: 'car-1',
//       name: 'Comfort Car',
//       type: 'Sedan',
//       image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=100',
//       capacity: 4,
//       pricePerKm: 4.0,
//       estimatedTime: '8-12 min',
//       rating: 4.8,
//       features: ['AC', 'Music system', 'Child seat available'],
//     },
//     {
//       id: 'rickshaw-1',
//       name: 'Auto Rickshaw',
//       type: 'Three Wheeler',
//       image: 'https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=100',
//       capacity: 3,
//       pricePerKm: 1.8,
//       estimatedTime: '6-10 min',
//       rating: 4.5,
//       features: ['Budget friendly', 'Local routes', 'Quick stops'],
//     },
//     {
//       id: 'luxury-1',
//       name: 'Luxury SUV',
//       type: 'Premium SUV',
//       image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=100',
//       capacity: 6,
//       pricePerKm: 12.0,
//       estimatedTime: '10-15 min',
//       rating: 4.9,
//       features: ['Premium interior', 'Chauffeur', 'Refreshments', 'WiFi'],
//       isLuxury: true,
//     },
//   ];

//   const handleBookingSubmit = () => {
//     if (!isAuthenticated) {
//       toast.error('Please sign in to book a ride');
//       navigate('/auth');
//       return;
//     }

//     if (!selectedVehicle) {
//       toast.error('Please select a vehicle');
//       return;
//     }

//     if (!bookingData.pickup || !bookingData.destination) {
//       toast.error('Please enter pickup and destination');
//       return;
//     }

//     // Simulate booking process
//     toast.loading('Booking your ride...', { duration: 2000 });
    
//     setTimeout(() => {
//       toast.success('Ride booked successfully!');
//       navigate('/tracking');
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen pt-16">
//       <Navigation />
      
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8"
//         >
//           <h1 className="text-4xl font-bold text-white mb-4">Book Your Ride</h1>
//           <div className="flex items-center space-x-4">
//             {[1, 2, 3].map((num) => (
//               <div key={num} className="flex items-center">
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
//                   step >= num ? 'bg-primary-500 text-white' : 'bg-gray-600 text-gray-300'
//                 }`}>
//                   {num}
//                 </div>
//                 {num < 3 && <div className={`w-12 h-0.5 ${step > num ? 'bg-primary-500' : 'bg-gray-600'}`} />}
//               </div>
//             ))}
//             <div className="ml-4 text-gray-300">
//               <span className="font-medium">
//                 {step === 1 && 'Trip Details'}
//                 {step === 2 && 'Choose Vehicle'}
//                 {step === 3 && 'Confirm Booking'}
//               </span>
//             </div>
//           </div>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Form */}
//           <div className="lg:col-span-2">
//             {step === 1 && (
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="glass p-8 rounded-2xl"
//               >
//                 <h2 className="text-2xl font-bold text-white mb-6">Trip Details</h2>
                
//                 <div className="space-y-6">
//                   <div className="relative">
//                     <label className="block text-sm font-medium text-gray-300 mb-2">
//                       Pickup Location
//                     </label>
//                     <div className="relative">
//                       <MapPin className="absolute left-3 top-3 h-5 w-5 text-primary-400" />
//                       <input
//                         type="text"
//                         value={bookingData.pickup}
//                         onChange={(e) => setBookingData({...bookingData, pickup: e.target.value})}
//                         className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
//                         placeholder="Enter pickup location"
//                       />
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <label className="block text-sm font-medium text-gray-300 mb-2">
//                       Destination
//                     </label>
//                     <div className="relative">
//                       <Navigation className="absolute left-3 top-3 h-5 w-5 text-secondary-400" />
//                       <input
//                         type="text"
//                         value={bookingData.destination}
//                         onChange={(e) => setBookingData({...bookingData, destination: e.target.value})}
//                         className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
//                         placeholder="Where are you going?"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">
//                         Date
//                       </label>
//                       <input
//                         type="date"
//                         value={bookingData.date}
//                         onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
//                         className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">
//                         Time
//                       </label>
//                       <input
//                         type="time"
//                         value={bookingData.time}
//                         onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
//                         className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-2">
//                       Number of Passengers
//                     </label>
//                     <select
//                       value={bookingData.passengers}
//                       onChange={(e) => setBookingData({...bookingData, passengers: parseInt(e.target.value)})}
//                       className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
//                     >
//                       {[1, 2, 3, 4, 5, 6].map(num => (
//                         <option key={num} value={num}>{num} passenger{num > 1 ? 's' : ''}</option>
//                       ))}
//                     </select>
//                   </div>

//                   <button
//                     onClick={() => setStep(2)}
//                     className="w-full btn-primary text-lg py-4"
//                   >
//                     Continue to Vehicle Selection
//                   </button>
//                 </div>
//               </motion.div>
//             )}

//             {step === 2 && (
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//               >
//                 <div className="mb-6">
//                   <h2 className="text-2xl font-bold text-white mb-2">Choose Your Vehicle</h2>
//                   <p className="text-gray-300">Select the perfect ride for your journey</p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {vehicles.map((vehicle) => (
//                     <VehicleCard
//                       key={vehicle.id}
//                       {...vehicle}
//                       onSelect={setSelectedVehicle}
//                       isSelected={selectedVehicle === vehicle.id}
//                     />
//                   ))}
//                 </div>

//                 <div className="flex justify-between mt-8">
//                   <button
//                     onClick={() => setStep(1)}
//                     className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors"
//                   >
//                     Back
//                   </button>
//                   <button
//                     onClick={() => setStep(3)}
//                     disabled={!selectedVehicle}
//                     className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     Continue to Payment
//                   </button>
//                 </div>
//               </motion.div>
//             )}

//             {step === 3 && (
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="glass p-8 rounded-2xl"
//               >
//                 <h2 className="text-2xl font-bold text-white mb-6">Confirm Your Booking</h2>
                
//                 <div className="space-y-6">
//                   <div className="border border-gray-600 rounded-xl p-6">
//                     <h3 className="text-lg font-semibold text-white mb-4">Trip Summary</h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between">
//                         <span className="text-gray-300">From:</span>
//                         <span className="text-white">{bookingData.pickup}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-300">To:</span>
//                         <span className="text-white">{bookingData.destination}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-300">Date & Time:</span>
//                         <span className="text-white">{bookingData.date} {bookingData.time}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-300">Passengers:</span>
//                         <span className="text-white">{bookingData.passengers}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="border border-gray-600 rounded-xl p-6">
//                     <h3 className="text-lg font-semibold text-white mb-4">Vehicle Details</h3>
//                     {selectedVehicle && (
//                       <div className="space-y-3">
//                         <div className="flex justify-between">
//                           <span className="text-gray-300">Vehicle:</span>
//                           <span className="text-white">{vehicles.find(v => v.id === selectedVehicle)?.name}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-gray-300">Estimated Total:</span>
//                           <span className="text-white font-bold">$24.50</span>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="border border-gray-600 rounded-xl p-6">
//                     <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
//                       <CreditCard className="h-5 w-5 mr-2" />
//                       Payment Method
//                     </h3>
//                     <div className="space-y-3">
//                       <label className="flex items-center space-x-3">
//                         <input type="radio" name="payment" value="card" defaultChecked className="text-primary-500" />
//                         <span className="text-white">Credit/Debit Card</span>
//                       </label>
//                       <label className="flex items-center space-x-3">
//                         <input type="radio" name="payment" value="wallet" className="text-primary-500" />
//                         <span className="text-white">Digital Wallet</span>
//                       </label>
//                       <label className="flex items-center space-x-3">
//                         <input type="radio" name="payment" value="cash" className="text-primary-500" />
//                         <span className="text-white">Cash</span>
//                       </label>
//                     </div>
//                   </div>

//                   <div className="flex justify-between">
//                     <button
//                       onClick={() => setStep(2)}
//                       className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors"
//                     >
//                       Back
//                     </button>
//                     <button
//                       onClick={handleBookingSubmit}
//                       className="btn-primary px-8 py-3 text-lg"
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </div>

//           {/* Right Column - Map Placeholder */}
//           <div className="lg:col-span-1">
//             <div className="glass p-6 rounded-2xl sticky top-24">
//               <h3 className="text-lg font-semibold text-white mb-4">Route Preview</h3>
//               <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center">
//                 <div className="text-center text-gray-300">
//                   <MapPin className="h-12 w-12 mx-auto mb-3 opacity-50" />
//                   <p>Interactive map will appear here</p>
//                   <p className="text-sm mt-1">Real-time route tracking</p>
//                 </div>
//               </div>

//               {bookingData.pickup && bookingData.destination && (
//                 <div className="mt-6 space-y-3">
//                   <div className="flex items-center justify-between text-sm">
//                     <span className="text-gray-300">Estimated Distance:</span>
//                     <span className="text-white font-medium">8.5 km</span>
//                   </div>
//                   <div className="flex items-center justify-between text-sm">
//                     <span className="text-gray-300">Estimated Time:</span>
//                     <span className="text-white font-medium">12-18 min</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingPage;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation as NavigationIcon,CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Navigation from '../components/Navigation';
import VehicleCard from '../components/VehicleCard';
import { useAuth } from '../contexts/AuthContext';

const BookingPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [bookingData, setBookingData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: 1,
  });

  const vehicles = [
    {
      id: 'bike-1',
      name: 'Quick Bike',
      type: 'Motorcycle',
      image: 'https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=100',
      capacity: 1,
      pricePerKm: 2.5,
      estimatedTime: '5-8 min',
      rating: 4.7,
      features: ['Helmet included', 'Fast arrival', 'Eco-friendly'],
    },
    {
      id: 'car-1',
      name: 'Comfort Car',
      type: 'Sedan',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=100',
      capacity: 4,
      pricePerKm: 4.0,
      estimatedTime: '8-12 min',
      rating: 4.8,
      features: ['AC', 'Music system', 'Child seat available'],
    },
    {
      id: 'rickshaw-1',
      name: 'Auto Rickshaw',
      type: 'Three Wheeler',
      image: 'https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=100',
      capacity: 3,
      pricePerKm: 1.8,
      estimatedTime: '6-10 min',
      rating: 4.5,
      features: ['Budget friendly', 'Local routes', 'Quick stops'],
    },
    {
      id: 'luxury-1',
      name: 'Luxury SUV',
      type: 'Premium SUV',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=100',
      capacity: 6,
      pricePerKm: 12.0,
      estimatedTime: '10-15 min',
      rating: 4.9,
      features: ['Premium interior', 'Chauffeur', 'Refreshments', 'WiFi'],
      isLuxury: true,
    },
  ];

  const handleBookingSubmit = () => {
    if (!isAuthenticated) {
      toast.error('Please sign in to book a ride');
      navigate('/auth');
      return;
    }

    if (!selectedVehicle) {
      toast.error('Please select a vehicle');
      return;
    }

    if (!bookingData.pickup || !bookingData.destination) {
      toast.error('Please enter pickup and destination');
      return;
    }

    // Simulate booking process
    toast.loading('Booking your ride...', { duration: 2000 });
    
    setTimeout(() => {
      toast.success('Ride booked successfully!');
      navigate('/tracking');
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Book Your Ride</h1>
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= num ? 'bg-primary-500 text-white' : 'bg-gray-600 text-gray-300'
                }`}>
                  {num}
                </div>
                {num < 3 && <div className={`w-12 h-0.5 ${step > num ? 'bg-primary-500' : 'bg-gray-600'}`} />}
              </div>
            ))}
            <div className="ml-4 text-gray-300">
              <span className="font-medium">
                {step === 1 && 'Trip Details'}
                {step === 2 && 'Choose Vehicle'}
                {step === 3 && 'Confirm Booking'}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Trip Details</h2>
                
                <div className="space-y-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-primary-400" />
                      <input
                        type="text"
                        value={bookingData.pickup}
                        onChange={(e) => setBookingData({...bookingData, pickup: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder="Enter pickup location"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Destination
                    </label>
                    <div className="relative">
                      <NavigationIcon className="absolute left-3 top-3 h-5 w-5 text-secondary-400" />
                      <input
                        type="text"
                        value={bookingData.destination}
                        onChange={(e) => setBookingData({...bookingData, destination: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder="Where are you going?"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Time
                      </label>
                      <input
                        type="time"
                        value={bookingData.time}
                        onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Number of Passengers
                    </label>
                    <select
                      value={bookingData.passengers}
                      onChange={(e) => setBookingData({...bookingData, passengers: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} passenger{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full btn-primary text-lg py-4"
                  >
                    Continue to Vehicle Selection
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2 - Vehicle Selection */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Choose Your Vehicle</h2>
                  <p className="text-gray-300">Select the perfect ride for your journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {vehicles.map((vehicle) => (
                    <VehicleCard
                      key={vehicle.id}
                      {...vehicle}
                      onSelect={setSelectedVehicle}
                      isSelected={selectedVehicle === vehicle.id}
                    />
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!selectedVehicle}
                    className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Payment
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3 - Confirm Booking */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Confirm Your Booking</h2>
                
                <div className="space-y-6">
                  <div className="border border-gray-600 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Trip Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">From:</span>
                        <span className="text-white">{bookingData.pickup}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">To:</span>
                        <span className="text-white">{bookingData.destination}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Date & Time:</span>
                        <span className="text-white">{bookingData.date} {bookingData.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Passengers:</span>
                        <span className="text-white">{bookingData.passengers}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-600 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Vehicle Details</h3>
                    {selectedVehicle && (
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Vehicle:</span>
                          <span className="text-white">{vehicles.find(v => v.id === selectedVehicle)?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Estimated Total:</span>
                          <span className="text-white font-bold">$24.50</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border border-gray-600 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Payment Method
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="radio" name="payment" value="card" defaultChecked className="text-primary-500" />
                        <span className="text-white">Credit/Debit Card</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="radio" name="payment" value="wallet" className="text-primary-500" />
                        <span className="text-white">Digital Wallet</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="radio" name="payment" value="cash" className="text-primary-500" />
                        <span className="text-white">Cash</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleBookingSubmit}
                      className="btn-primary px-8 py-3 text-lg"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Map Placeholder */}
          <div className="lg:col-span-1">
            <div className="glass p-6 rounded-2xl sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-4">Route Preview</h3>
              <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-300">
                  <MapPin className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Interactive map will appear here</p>
                  <p className="text-sm mt-1">Real-time route tracking</p>
                </div>
              </div>

              {bookingData.pickup && bookingData.destination && (
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Estimated Distance:</span>
                    <span className="text-white font-medium">8.5 km</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Estimated Time:</span>
                    <span className="text-white font-medium">12-18 min</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
