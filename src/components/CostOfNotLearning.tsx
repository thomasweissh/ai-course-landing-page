import React, { useEffect, useRef } from 'react';

const CostOfNotLearning: React.FC = () => {
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
      className="py-24 bg-white"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 fade-in"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            המחיר של אי-למידה
          </h2>
          
          <div className="bg-[#F4EDE4] p-8 rounded-lg shadow-md">
            <p className="text-xl md:text-2xl text-center leading-relaxed mb-8">
              אז כמה זמן אתה מבזבז על ניסוחים ופרזנטציות שלא עובדות?
              <br />
              אפשר לתת ל-AI לעזור לך לדייק ולהרשים – במקום להסתבך.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold mb-3">חסכון בזמן</h3>
                <p className="text-gray-700">פחות זמן על טקסטים ויותר זמן על עיצוב</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">הגדלת הכנסות</h3>
                <p className="text-gray-700">יותר פרויקטים, יותר יעילות, יותר רווחיות</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3">יתרון תחרותי</h3>
                <p className="text-gray-700">להיות בין הראשונים שמשתמשים בטכנולוגיה החדשה</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfNotLearning;