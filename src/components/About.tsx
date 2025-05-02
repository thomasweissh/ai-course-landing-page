import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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
      id="about"
      className="py-24 bg-[#FFFDF8]"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 fade-in"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-relaxed">
            זה לא עוד קורס טכנולוגי.
            <br />
            זה קורס מעשי בעברית –
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            שמלמד אותך איך להכניס את ChatGPT ו-Sora לתוך שגרת העבודה שלך:
            <br />
            מהשלב של בניית קונספט – ועד לשלב שבו את.ה עומד מול הלקוח ומרשים אותו באמת.
          </p>
          
          <div className="relative h-48 md:h-64 my-16 overflow-hidden rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8] via-transparent to-[#FFFDF8] z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/7937461/pexels-photo-7937461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">תכנון מדויק יותר, מהיר יותר</h3>
              <p className="text-lg text-gray-700">תוך שימוש בכלים החדשניים ביותר</p>
            </div>
          </div>
          
          <div className="mt-12">
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

export default About;