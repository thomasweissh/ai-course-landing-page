import React, { useEffect, useRef } from 'react';

const WhatYouGet: React.FC = () => {
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          מה מקבלים בקורס
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#F4EDE4] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-6">📘</div>
            <h3 className="text-xl font-bold mb-4">מחברת פרומפטים</h3>
            <p className="text-gray-700">אוסף של פרומפטים מוכנים שעובדים מעולה לעולם העיצוב והאדריכלות</p>
          </div>
          
          <div className="bg-[#F4EDE4] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-6">🎥</div>
            <h3 className="text-xl font-bold mb-4">שיעורים מוקלטים</h3>
            <p className="text-gray-700">גישה לכל השיעורים המוקלטים שתוכלו לצפות בהם בכל זמן שנוח לכם</p>
          </div>
          
          <div className="bg-[#F4EDE4] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-6">📂</div>
            <h3 className="text-xl font-bold mb-4">תבניות</h3>
            <p className="text-gray-700">תבניות מוכנות לשימוש עבור פרזנטציות, תיאורי פרויקט וקונספטים</p>
          </div>
          
          <div className="bg-[#F4EDE4] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-6">💬</div>
            <h3 className="text-xl font-bold mb-4">תסריטים מוכנים</h3>
            <p className="text-gray-700">תסריטים ל-Sora שעובדים בצורה מיטבית - רק להעתיק ולשנות לצרכים שלכם</p>
          </div>
          
          <div className="bg-[#F4EDE4] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-6">🤝</div>
            <h3 className="text-xl font-bold mb-4">קהילה מקצועית</h3>
            <p className="text-gray-700">הצטרפות לקהילה סגורה של אדריכלים ומעצבים שמתעניינים ב-AI</p>
          </div>
          
          <div className="bg-[#F4EDE4] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-6">🔄</div>
            <h3 className="text-xl font-bold mb-4">עדכונים שוטפים</h3>
            <p className="text-gray-700">גישה לכל העדכונים והתוספות שיתווספו לקורס בעתיד</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;