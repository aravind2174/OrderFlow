import { useState } from "react";
import DeviceMockups from "./device-mockups";

const slides = [
  {
    type: "mobile" as const,
    title: "Mobile-first ordering experience that customers love",
    bgGradient: "from-brand-green/10 to-brand-green-light/10",
    content: "Mobile ordering interface"
  },
  {
    type: "monitor" as const,
    title: "Powerful analytics dashboard for data-driven decisions",
    bgGradient: "from-blue-50 to-indigo-50",
    content: "Restaurant analytics dashboard"
  },
  {
    type: "monitor" as const,
    title: "Streamlined kitchen operations and order management",
    bgGradient: "from-purple-50 to-pink-50",
    content: "Kitchen management dashboard"
  },
  {
    type: "mobile" as const,
    title: "Staff mobile app for seamless order coordination",
    bgGradient: "from-green-50 to-emerald-50",
    content: "Staff mobile app interface"
  },
  {
    type: "delivery" as const,
    title: "Reliable delivery network with real-time tracking",
    bgGradient: "from-orange-50 to-yellow-50",
    content: "Professional delivery person with food"
  },
];

export default function InfiniteSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      {/* Main Slider */}
      <div className="slider-container h-96 rounded-2xl overflow-hidden">
        <div className="slider-track h-full">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`slider-item flex items-center justify-center bg-gradient-to-r ${slide.bgGradient}`}
              data-testid={`slide-${index + 1}`}
            >
              <div className="text-center">
                {slide.type === "delivery" ? (
                  <div 
                    className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl hover-lift mx-auto cursor-pointer"
                    onClick={() => handleSlideClick(index)}
                    data-testid={`delivery-image-${index}`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <div className="text-6xl mb-4">🚚</div>
                        <div className="text-lg font-medium">Delivery Service</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <DeviceMockups 
                    type={slide.type}
                    interactive={true}
                    onClick={() => handleSlideClick(index)}
                    content={slide.content}
                  />
                )}
                <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto">
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
          
          {/* Duplicate first slide for seamless loop */}
          <div className={`slider-item flex items-center justify-center bg-gradient-to-r ${slides[0].bgGradient}`}>
            <div className="text-center">
              <DeviceMockups 
                type={slides[0].type}
                interactive={true}
                onClick={() => handleSlideClick(0)}
                content={slides[0].content}
              />
              <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto">
                {slides[0].title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-brand-green' : 'bg-gray-300'
            }`}
            data-testid={`slide-indicator-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
