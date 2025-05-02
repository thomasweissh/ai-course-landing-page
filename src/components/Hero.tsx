import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FFFDF8] to-[#F4EDE4] pt-20"
    >
      <div 
        ref={sectionRef} 
        className="container mx-auto px-6 py-16 flex flex-col items-center text-center fade-in"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-8">
          <span className="block mb-4 text-2xl md:text-3xl text-[#666666]">הקורס שיעשה לך סדר:</span>
          איך לעבוד עם ChatGPT ו-Sora בעולמות האדריכלות והעיצוב – 
          <span className="block mt-2">בצורה מדויקת, מקצועית ופרקטית.</span>
        </h1>
        
        <div className="mt-8 mb-16 w-full max-w-xl">
          <a 
            href="#join" 
            className="cta-button w-full md:w-auto md:px-12"
            id="join"
          >
            להצטרפות לקורס – לחצו כאן
          </a>
        </div>
        
        <div className="mt-16 w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-semibold text-xl mb-2">פרומפטים מדויקים</h3>
              <p className="text-gray-600">נלמד לתקשר עם AI בשפה שלו</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-xl mb-2">התמקדות בעיצוב</h3>
              <p className="text-gray-600">קורס ייחודי לאדריכלים ומעצבים</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="font-semibold text-xl mb-2">שילוב מעשי</h3>
              <p className="text-gray-600">מהתיאוריה אל הפרקטיקה היומיומית</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;