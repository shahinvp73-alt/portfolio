import React from 'react';
import { history } from '../data/portfolioData';

export default function History() {
  return (
    <section id="history" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div className="section-subtitle">History</div>
        <h2 className="section-title">My History of <span>Success</span>.</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 60px auto' }}>
          My educational journey and professional project milestones in software development.
        </p>

        <div className="history-timeline" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {history.map((item, index) => (
            <div 
              key={index} 
              className="timeline-item" 
              style={{ 
                display: 'flex', 
                gap: '30px', 
                marginBottom: '40px',
                position: 'relative'
              }}
            >
              {/* Year column */}
              <div style={{ flex: '0 0 150px', textAlign: 'right', paddingTop: '5px' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)' }}>{item.year.split(' ')[0]}</span>
                <br/>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.year}</span>
              </div>
              
              {/* Divider with dot */}
              <div className="timeline-divider" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '15px', height: '15px', borderRadius: '50%', background: 'var(--accent)', border: '4px solid var(--bg-secondary)', zIndex: 2, marginTop: '7px' }}></div>
                <div className="line" style={{ width: '2px', background: 'rgba(255,255,255,0.05)', flex: 1, position: 'absolute', top: '22px', bottom: '-40px' }}></div>
              </div>

              {/* Content column */}
              <div style={{ flex: 1, background: 'var(--bg-card)', padding: '30px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '5px' }}>{item.title}</h3>
                <div style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '15px', fontWeight: 500 }}>{item.role}</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column;
            gap: 15px !important;
          }
          .timeline-item > div:first-child {
            text-align: left !important;
            flex: auto !important;
          }
          .timeline-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
