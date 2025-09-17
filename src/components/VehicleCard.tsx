import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star } from 'lucide-react';

interface VehicleCardProps {
  id: string;
  name: string;
  type: string;
  image: string;
  capacity: number;
  pricePerKm: number;
  estimatedTime: string;
  rating: number;
  features: string[];
  isLuxury?: boolean;
  onSelect: (vehicleId: string) => void;
  isSelected: boolean;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  id,
  name,
  type,
  image,
  capacity,
  pricePerKm,
  estimatedTime,
  rating,
  features,
  isLuxury = false,
  onSelect,
  isSelected,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
        isSelected
          ? 'bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border-2 border-primary-400'
          : 'glass hover:glass-dark border border-white/10'
      } ${isLuxury ? 'ring-2 ring-luxury-400/50' : ''}`}
      onClick={() => onSelect(id)}
    >
      {isLuxury && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-luxury-400 to-luxury-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
          LUXURY
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-gray-300 text-sm">{type}</p>
        </div>
        <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center">
          <img src={image} alt={name} className="w-12 h-12 object-contain" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 text-gray-300">
          <Users className="h-4 w-4" />
          <span className="text-sm">{capacity} seats</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <Clock className="h-4 w-4" />
          <span className="text-sm">{estimatedTime}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <Star className="h-4 w-4 text-luxury-400 fill-current" />
          <span className="text-sm">{rating}</span>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-white">${pricePerKm}</span>
          <span className="text-gray-300 text-sm">/km</span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Features</p>
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-4 right-4 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-3 h-3 bg-white rounded-full"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default VehicleCard;