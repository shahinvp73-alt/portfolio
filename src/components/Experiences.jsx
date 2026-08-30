import React from 'react';
import { skillAndWorkExperiences } from '../data/portfolioData';
import { Award, Globe } from 'lucide-react';

const iconMap = {
  Award: Award,
  Globe: Globe
};

export default function Experiences() {
  return (
    <section id="experiences" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div className="section-subtitle">Qualifications</div>
        <h2 className="section-title">My Skill & Work <span>Experiences</span>.</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 60px auto' }}>
          Additional achievements, certifications, and language proficiencies that complement my technical profile.
        </p>

        <div className="exp-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
          {skillAndWorkExperiences.map((section, index) => {
            const Icon = iconMap[section.icon];
            return (
              <div 
                key={index} 
                style={{ 
                  background: 'var(--bg-card)', 
                  padding: '40px', 
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(249,0,77,0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{section.title}</h3>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {section.items.map((item, i) => (
                    <li key={i} style={{ 
                      padding: '15px 0', 
                      borderBottom: i !== section.items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .exp-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
