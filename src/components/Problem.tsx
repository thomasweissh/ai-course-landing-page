import React, { useEffect, useRef } from 'react';

const Problem: React.FC = () => {
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
      className="py-20 bg-white"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 fade-in"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
            נמאס לך לשמוע ש-AI זה העתיד –
            <br />
            אבל לא באמת להבין איך זה משתלב ביום-יום שלך כאדריכל.ית או מעצב.ת?
          </h2>
          
          <p className="text-xl md:text-2xl font-medium text-[#666666] mt-10">
            זה בדיוק מה שנפתור כאן.
          </p>
          
          <div className="mt-12 max-w-xl mx-auto">
            <div className="relative p-8 bg-[#F4EDE4] rounded-lg shadow-sm">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#D5C3A8] rounded-full flex items-center justify-center text-white font-bold">
                ?
              </div>
              <p className="italic text-lg text-gray-700">
                "אני מבזבז.ת יותר מדי זמן על כתיבת תיאורים, פרזנטציות וקונספטים – במקום להתמקד בעיצוב"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;