'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, X } from 'lucide-react'
import { useState } from 'react'

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState<typeof awards[0] | null>(null)
  const awards = [
    {
      title: "Appreciation Certificate",
      company: "Tata Consultancy Services",
      year: "2024",
      image: "/Appreciation_Certificate_page-0001.jpg",
      category: "Recognition"
    },
    {
      title: "Best Team Award",
      company: "Tata Consultancy Services", 
      year: "2024",
      image: "/Best_Team_Award_page-0001.jpg",
      category: "Teamwork"
    },
    {
      title: "On the Spot (Team) Award",
      company: "Tata Consultancy Services",
      year: "2024",
      image: "/On_the_Spot_(Team)_Award_page-0001.jpg",
      category: "Recognition"
    },
    {
      title: "Star of the Month Award",
      company: "Tata Consultancy Services",
      year: "2024",
      image: "/Star_of_the_Month_Award_page-0001.jpg",
      category: "Performance"
    },
    {
      title: "Star Team Award",
      company: "Tata Consultancy Services",
      year: "2024",
      image: "/Star_Team_Award_pages-to-jpg-0001.jpg",
      category: "Team Excellence"
    }
  ]

  return (
    <section id="awards" className="container-custom section-bg">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            Awards & Recognition
          </h2>
          <div className="w-12 h-0.5 bg-gray-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
            <motion.div
              className="flex space-x-4 sm:space-x-6 md:space-x-8"
              animate={{
                x: [0, -60 * awards.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* First set of awards */}
              {awards.map((award, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-48 sm:w-56 md:w-64 group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedAward(award)}
                  >
                    {/* Award Image */}
                    <div className="relative mb-3 sm:mb-4">
                      <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-yellow-500/30 overflow-hidden">
                        <img 
                          src={award.image} 
                          alt={award.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center text-yellow-400 hidden">
                          <Trophy size={32} className="sm:w-8 sm:h-8" />
                        </div>
                      </div>
                      
                      {/* Company Badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full border border-white/20">
                        TCS
                      </div>
                    </div>

                    {/* Award Info */}
                    <div className="text-center">
                      <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                        {award.title}
                      </h3>
                      
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-300 font-medium">
                          {award.company}
                        </span>
                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-400">
                          {award.year}
                        </span>
                      </div>

                      <div className="inline-block bg-yellow-500/20 text-yellow-400 text-xs font-medium px-2 py-1 rounded-full border border-yellow-500/30">
                        {award.category}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Second set of awards for seamless loop */}
              {awards.map((award, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-48 sm:w-56 md:w-64 group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedAward(award)}
                  >
                    {/* Award Image */}
                    <div className="relative mb-3 sm:mb-4">
                      <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-yellow-500/30 overflow-hidden">
                        <img 
                          src={award.image} 
                          alt={award.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center text-yellow-400 hidden">
                          <Trophy size={32} className="sm:w-8 sm:h-8" />
                        </div>
                      </div>
                      
                      {/* Company Badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full border border-white/20">
                        TCS
                      </div>
                    </div>

                    {/* Award Info */}
                    <div className="text-center">
                      <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                        {award.title}
                      </h3>
                      
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-300 font-medium">
                          {award.company}
                        </span>
                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-400">
                          {award.year}
                        </span>
                      </div>

                      <div className="inline-block bg-yellow-500/20 text-yellow-400 text-xs font-medium px-2 py-1 rounded-full border border-yellow-500/30">
                        {award.category}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 lg:w-16 bg-gradient-to-r from-gray-900/30 to-transparent z-10 rounded-l-xl sm:rounded-l-2xl"></div>
            <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 lg:w-16 bg-gradient-to-l from-gray-900/30 to-transparent z-10 rounded-r-xl sm:rounded-r-2xl"></div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedAward && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAward(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-5xl max-h-[95vh] bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedAward(null)}
              className="absolute top-2 right-2 z-10 w-8 h-8 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
            >
              <X size={18} />
            </button>

            {/* Certificate Image Only */}
            <div className="relative">
              <img
                src={selectedAward.image}
                alt={selectedAward.title}
                className="w-full h-auto max-h-[95vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center text-yellow-400 hidden rounded-lg">
                <div className="text-center">
                  <Trophy size={48} className="mx-auto mb-4" />
                  <p className="text-lg font-medium">Certificate Image</p>
                  <p className="text-sm text-gray-400">Unable to load image</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Awards
