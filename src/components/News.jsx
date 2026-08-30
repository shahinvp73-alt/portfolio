import React from 'react';
import { projects } from '../data/portfolioData';

export default function News() {
  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div className="section-subtitle">Projects</div>
        <h2 className="section-title">My Latest <span>Projects</span>.</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 60px auto' }}>
          Check out my latest software development projects, academic works, and technical achievements.
        </p>

        <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={{ 
                background: 'var(--bg-card)', 
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              className="news-card"
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  className="news-image"
                />
              </div>
              
              <div style={{ padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>{project.category}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{project.date}</span>
                </div>
                
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '15px', cursor: 'pointer' }} className="news-title">
                  {project.title}
                </h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {project.description.substring(0, 100)}...
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .news-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .news-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .news-card:hover .news-image {
          transform: scale(1.1);
        }
        .news-title:hover {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}
