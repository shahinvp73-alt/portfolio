import React from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
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
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
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
              
              <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>{project.category}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{project.date}</span>
                </div>
                
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '15px' }} className="news-title">
                  {project.title}
                </h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '25px', flexGrow: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', gap: '15px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', marginTop: 'auto' }}>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        background: 'var(--accent)',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        transition: 'opacity 0.3s'
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  <a 
                    href={project.githubUrl || "#"} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 16px',
                      background: 'transparent',
                      border: '1px solid var(--accent)',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
                  >
                    <GithubIcon size={16} /> View Code
                  </a>
                </div>
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
