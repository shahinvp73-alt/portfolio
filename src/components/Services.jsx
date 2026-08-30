import React from 'react';
import { Monitor, Server, Database, Shield, Layout, Code, GitBranch, Cloud } from 'lucide-react';
import { services } from '../data/portfolioData';

const iconMap = {
  Monitor: Monitor,
  Server: Server,
  Database: Database,
  Shield: Shield,
  Layout: Layout,
  Code: Code,
  GitBranch: GitBranch,
  Cloud: Cloud
};

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div className="section-subtitle">Services</div>
        <h2 className="section-title">I will Help you Build <span>Business</span>.</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 60px auto' }}>
          Delivering robust full-stack solutions and high-performance applications tailored to your business needs.
        </p>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <div 
                key={index} 
                className="service-card"
                style={{ 
                  background: 'var(--bg-card)', 
                  padding: '40px 30px', 
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Accent line on top/bottom */}
                <div className="card-accent" style={{ position: 'absolute', bottom: 0, left: 0, width: '0%', height: '3px', background: 'var(--accent)', transition: 'width 0.4s ease' }}></div>
                
                <div style={{ color: 'var(--accent)', marginBottom: '25px' }}>
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '15px' }}>{service.title}</h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .service-card:hover .card-accent {
          width: 100% !important;
        }
      `}</style>
    </section>
  );
}
