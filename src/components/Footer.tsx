import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#333333] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">ChatGPT & Sora לעיצוב</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} כל הזכויות שמורות</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">תנאי שימוש</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">מדיניות פרטיות</a>
            <a href="mailto:info@designai-course.com" className="text-gray-300 hover:text-white transition-colors">צור קשר</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;