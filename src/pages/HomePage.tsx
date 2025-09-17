import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Car, Bike, Truck, Crown, Shield, Clock, MapPin, Star } from 'lucide-react';
import Navigation from '../components/Navigation';

const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );
    }

    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.children,
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  const vehicles = [
    {
      icon: Bike,
      name: 'Bikes',
      description: 'Quick & eco-friendly',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Car,
      name: 'Cars',
      description: 'Comfortable rides',
      color: 'from-blue-400 to-blue-500',
    },
    {
      icon: Truck,
      name: 'Auto-Rickshaw',
      description: 'Budget-friendly',
      color: 'from-orange-400 to-red-500',
    },
    {
      icon: Crown,
      name: 'Luxury Events',
      description: 'Premium experience',
      color: 'from-yellow-400 to-amber-500',
    },
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Available anytime, anywhere',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified drivers & vehicles',
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Track your ride live',
    },
    {
      icon: Star,
      title: 'Top Rated',
      description: '4.8+ rating from users',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900/20 to-secondary-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-luxury-500/10 rounded-full blur-3xl animate-float" />
        </div>
        
        <div ref={heroRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl sm:text-7xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ride
            <span className="gradient-text"> AnyTime</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From bikes to luxury vehicles - your perfect ride is just a tap away
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/booking" className="btn-primary text-lg px-8 py-4">
              Book Your Ride
            </Link>
            <Link to="/auth" className="btn-secondary text-lg px-8 py-4">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Ride</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From quick bike rides to luxury event transportation - we've got every journey covered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                className="glass p-8 rounded-2xl text-center group cursor-pointer hover:glass-dark transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${vehicle.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <vehicle.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                <p className="text-gray-300">{vehicle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AnyTime?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experience the future of transportation with our premium features
            </p>
          </motion.div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="glass p-12 rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Premium Transportation?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust AnyTime for their daily commute and special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn-primary text-lg px-8 py-4">
                Start Your Journey
              </Link>
              <Link to="/auth" className="btn-luxury text-lg px-8 py-4">
                Join AnyTime
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;