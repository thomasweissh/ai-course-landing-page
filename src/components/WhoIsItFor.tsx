import React, { useEffect, useRef } from 'react';

const WhoIsItFor: React.FC = () => {
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
      id="who"
      className="py-24 bg-[#FFFDF8]"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 fade-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          למי הקורס מתאים?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start">
            <div className="text-3xl ml-4">🎯</div>
            <div>
              <h3 className="text-xl font-bold mb-2">לאדריכלים ומעצבים שרוצים להתקדם</h3>
              <p className="text-gray-600">מחפשים דרכים לשפר את העבודה ולהישאר רלוונטיים בשוק המשתנה</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start">
            <div className="text-3xl ml-4">🎯</div>
            <div>
              <h3 className="text-xl font-bold mb-2">למנהלי משרדים</h3>
              <p className="text-gray-600">רוצים לייעל תהליכים ולהכניס טכנולוגיות חדשות למשרד</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start">
            <div className="text-3xl ml-4">🎯</div>
            <div>
              <h3 className="text-xl font-bold mb-2">לפרילנסרים</h3>
              <p className="text-gray-600">מחפשים דרכים להגדיל את ההכנסה ולעבוד יותר חכם</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start">
            <div className="text-3xl ml-4">🎯</div>
            <div>
              <h3 className="text-xl font-bold mb-2">למי שלא דובר אנגלית</h3>
              <p className="text-gray-600">הכל בעברית - לא צריך לדעת אנגלית כדי להשתמש בכלים</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#join" 
            className="cta-button"
          >
            להצטרפות לקורס – לחצו כאן
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;