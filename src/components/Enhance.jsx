import React from 'react';
import { skillsProgress } from '../data/portfolioData';

export default function Enhance() {
  return (
    <section id="enhance" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div className="section-subtitle">Features</div>
        <h2 className="section-title">Innovative Solution to <span>Enhance</span>.</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 60px auto' }}>
          Continuous learning and adapting to modern web technologies to build efficient, scalable software solutions.
        </p>

        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
          {skillsProgress.map((skill, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontWeight: 500, letterSpacing: '1px' }}>{skill.name}</span>
                <span style={{ color: 'var(--text-muted)' }}>{skill.level}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#333', borderRadius: '4px', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    height: '100%', 
                    width: `${skill.level}%`, 
                    background: 'var(--accent)', 
                    borderRadius: '4px',
                    boxShadow: '0 0 10px rgba(249, 0, 77, 0.5)'
                  }} 
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr 1fr !important;
            column-gap: 80px !important;
          }
        }
      `}</style>
    </section>
  );
}
