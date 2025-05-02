import React, { useEffect, useRef } from 'react';

const WhatYouLearn: React.FC = () => {
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
      id="learn"
      className="py-24 bg-white"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 fade-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          מה תלמדו בקורס
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-[#F4EDE4] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-6">🧠</div>
            <h3 className="text-2xl font-bold mb-6">ChatGPT</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-[#D5C3A8] rounded-full mt-1 ml-3"></span>
                <span>איך לנסח פרומפטים מדויקים</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-[#D5C3A8] rounded-full mt-1 ml-3"></span>
                <span>איך לכתוב תיאורי פרויקטים וקונספטים</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-[#D5C3A8] rounded-full mt-1 ml-3"></span>
                <span>איך לתקשר עם לקוחות</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-[#D5C3A8] rounded-full mt-1 ml-3"></span>
                <span>איך להשתמש בו כחלק מתהליך העבודה</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#F4EDE4] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-6">🎥</div>
            <h3 className="text-2xl font-bold mb-6">Sora</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-[#D5C3A8] rounded-full mt-1 ml-3"></span>
                <span>מה זה Sora ולמה זה חשוב</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-[#D5C3A8] rounded-full mt-1 ml-3"></span>
                <span>איך נראים תסריטים שעובדים</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-[#D5C3A8] rounded-full mt-1 ml-3"></span>
                <span>איך להתכונן ולהקדים את השוק</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-[#D5C3A8] rounded-full mt-1 ml-3"></span>
                <span>איך לשלב בין ChatGPT ל-Sora</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            כל השיעורים מוקלטים ונגישים לצמיתות - תוכלו לחזור אליהם בכל זמן שתרצו
          </p>
          
          <div className="mt-8">
            <a 
              href="#join" 
              className="cta-button"
            >
              להצטרפות לקורס – לחצו כאן
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;