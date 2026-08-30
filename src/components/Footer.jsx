import React from 'react';
import { ArrowUp, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
        background: 'var(--bg-primary)',
        padding: '50px 0 30px 0',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginBottom: '30px' }} className="footer-top">
          
          {/* Logo */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 800,
              fontSize: '1.2rem',
              fontFamily: 'var(--font-serif)'
            }}
          >
            <span>
              <span style={{ color: 'var(--accent)' }}>S</span>HAHIN
            </span>
          </a>

          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#home" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>HOME</a>
            <a href="#enhance" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>SKILLS</a>
            <a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>SERVICES</a>
            <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>PROJECTS</a>
            <a href="#history" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>HISTORY</a>
            <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>CONTACT</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title="Scroll to Top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Bottom Line */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. {personalInfo.title}.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Crafted with</span>
            <span style={{ color: 'var(--accent)' }}>♥</span>
            <span>in React.js & Pure CSS</span>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-top {
            flex-direction: row !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </footer>
  );
}
