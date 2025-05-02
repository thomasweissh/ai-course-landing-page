import React, { useEffect, useRef } from 'react';

const Instructor: React.FC = () => {
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
      id="instructor"
      className="py-24 bg-[#FFFDF8]"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 fade-in"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                על המדריכה
              </h2>
              
              <h3 className="text-2xl font-medium mb-6">
                אני ריקי פרננד,
                <br />
                אדריכלית, מעצבת פנים ומרצה עם 22 שנות ניסיון.
              </h3>
              
              <p className="text-lg mb-6">
                אני לא מלמדת טכנולוגיה – אני מלמדת איך להשתמש בטכנולוגיה כדי להיות יותר טוב.ה בעיצוב.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-[#D5C3A8] rounded-full mt-1 ml-3"></span>
                  <span>בעלת סטודיו לאדריכלות ועיצוב פנים</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-[#D5C3A8] rounded-full mt-1 ml-3"></span>
                  <span>מומחית בשילוב טכנולוגיות בתהליכי עיצוב</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-[#D5C3A8] rounded-full mt-1 ml-3"></span>
                  <span>מרצה באוניברסיטת תל אביב ובצלאל</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <a 
                  href="#join" 
                  className="cta-button"
                >
                  להצטרפות לקורס – לחצו כאן
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent"></div>
                <div className="absolute bottom-6 right-6 text-white text-right">
                  <p className="text-2xl font-bold">ריקי פרננד</p>
                  <p className="text-lg">אדריכלית ומעצבת פנים</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;