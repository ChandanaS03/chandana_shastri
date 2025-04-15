
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'art gallery', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-primary font-mono tracking-wide">
            <span className="text-foreground"></span>chandana<span className="text-primary">S</span>hastri
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Art', href: '#art' },
              { name: 'Contact', href: '#contact' },
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className={`nav-item ${activeSection === item.href.substring(1) ? 'nav-item-active' : ''}`}
              >
                <span className="text-primary mr-1 font-mono">0{
                  item.name === 'Home' ? 1 : 
                  item.name === 'About' ? 2 : 
                  item.name === 'Projects' ? 3 : 
                  item.name === 'Art' ? 4 : 5
                }.</span> {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ChandanaS03" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/chandanas03" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          <a href="https://github-production-user-asset-6210df.s3.amazonaws.com/101421793/428726906-ce962d8c-06bc-4f95-b49d-745aa8bb8948.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250413%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250413T150614Z&X-Amz-Expires=300&X-Amz-Signature=ff6d35236420a01e83596d2b3d51ac15e483368a2769ec2721affbe6133ac60f&X-Amz-SignedHeaders=host">
            Resume
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {[
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Projects', href: '#projects' },
            { name: 'Art', href: '#art' },
            { name: 'Contact', href: '#contact' },
          ].map((item) => (
            <a 
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="text-foreground hover:text-primary text-2xl font-medium transition-colors"
            >
              <span className="text-primary font-mono">0{
                item.name === 'Home' ? 1 : 
                item.name === 'About' ? 2 : 
                item.name === 'Projects' ? 3 : 
                item.name === 'Art' ? 4 : 5
              }.</span> {item.name}
            </a>
          ))}
          <div className="flex items-center space-x-6 mt-8">
            <a href="https://github.com/ChandanaS03" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/chandanas03" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:chandanashastri12@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <a href="https://github-production-user-asset-6210df.s3.amazonaws.com/101421793/428726906-ce962d8c-06bc-4f95-b49d-745aa8bb8948.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250413%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250413T150614Z&X-Amz-Expires=300&X-Amz-Signature=ff6d35236420a01e83596d2b3d51ac15e483368a2769ec2721affbe6133ac60f&X-Amz-SignedHeaders=host">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
