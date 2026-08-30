import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: scrolled ? '15px 0' : '25px 0',
      background: scrolled ? 'rgba(17, 17, 17, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <div style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '1px', fontFamily: 'var(--font-serif)' }}>
          <span style={{ color: 'var(--accent)' }}>S</span>HAHIN
        </div>

        {/* Links */}
        <div style={{ display: 'none', gap: '30px', alignItems: 'center' }} className="nav-links">
          <a href="#home" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: '0.3s' }}>HOME</a>
          <a href="#enhance" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: '0.3s' }}>SKILLS</a>
          <a href="#services" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: '0.3s' }}>SERVICES</a>
          <a href="#projects" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: '0.3s' }}>PROJECTS</a>
          <a href="#contact" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: '0.3s' }}>CONTACT</a>
        </div>

        {/* CTA */}
        <div>
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
            HIRE ME
          </a>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .nav-links {
            display: flex !important;
          }
        }
        .nav-links a:hover {
          color: var(--accent) !important;
        }
      `}</style>
    </nav>
  );
}
