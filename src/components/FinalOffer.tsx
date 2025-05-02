import React, { useEffect, useRef } from 'react';

const FinalOffer: React.FC = () => {
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
      className="py-24 bg-gradient-to-b from-[#FFFDF8] to-[#F4EDE4]"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 fade-in"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 inline-block px-6 py-3 bg-[#D5C3A8] text-white font-bold rounded-full">
            ההרשמה פתוחה במחיר השקה!
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            רוצה להיות מעצב.ת שמבין את השפה של הדור הבא?
          </h2>
          
          <div className="my-12">
            <a 
              href="#join" 
              className="cta-button text-xl py-5 px-12"
            >
              להצטרפות לקורס – לחצו כאן
            </a>
          </div>
          
          <div className="mt-16 text-sm text-gray-600 max-w-2xl mx-auto">
            <p className="mb-2">הקורס מופעל על ידי "דה וואן גרופ"</p>
            <p className="mb-2">לרכישת רישיון למשרד: info@designai-course.com</p>
            <p>המידע שלך שמור אצלנו בלבד.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalOffer;