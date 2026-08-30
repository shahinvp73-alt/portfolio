import React from 'react';
import { 
  User, 
  Code2, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  Languages as LangIcon, 
  Brain
} from 'lucide-react';
import { personalInfo, softSkills, languages, coreCompetencies } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: "Frontend Engineering",
      icon: <Code2 size={24} style={{ color: '#38bdf8' }} />,
      desc: "Creating sleek, reactive, and mobile-first user interfaces with React.js, modern CSS, and component-driven architecture."
    },
    {
      title: "Backend & REST APIs",
      icon: <Cpu size={24} style={{ color: '#a855f7' }} />,
      desc: "Designing robust server-side architecture using Django & DRF with JWT authentication, custom serializers, and role-based permissions."
    },
    {
      title: "Databases & Security",
      icon: <ShieldCheck size={24} style={{ color: '#10b981' }} />,
      desc: "Architecting structured relational databases with PostgreSQL & MySQL, ensuring data integrity, optimized queries, and RBAC."
    },
    {
      title: "Cloud & DevOps Integration",
      icon: <Globe size={24} style={{ color: '#f59e0b' }} />,
      desc: "Deploying applications to AWS (EC2, S3, RDS, IAM) and containerizing services using Docker for production reliability."
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} /> About Shahin VP
          </div>
          <h2 className="section-title">
            Passionate Full Stack Developer Crafting <span className="gradient-text">Modern Web Solutions</span>
          </h2>
          <p className="section-description">
            Hands-on experience building scalable applications from client interface to cloud infrastructure.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '24px', 
            marginBottom: '60px' 
          }}
        >
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '30px' }}>
              <div 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '14px', 
                  background: 'rgba(255, 255, 255, 0.04)', 
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '20px' 
                }}
              >
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                {pillar.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: 1.6 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Languages & Soft Skills Dual Section */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            md: '1fr 1fr', 
            gap: '30px' 
          }}
          className="about-split"
        >
          
          {/* Soft Skills */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
                <Brain size={22} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>
                Soft Skills & Attributes
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {softSkills.map((skill, idx) => (
                <div 
                  key={idx} 
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#f1f5f9',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Sparkles size={14} style={{ color: '#38bdf8' }} />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Languages Spoken */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7' }}>
                <LangIcon size={22} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>
                Languages Proficiency
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {languages.map((lang, idx) => (
                <div 
                  key={idx} 
                  style={{
                    padding: '14px 18px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ fontWeight: 600, color: '#fff', fontSize: '1rem' }}>{lang.name}</span>
                  <span style={{ fontSize: '0.85rem', color: '#a855f7', background: 'rgba(168, 85, 247, 0.1)', padding: '4px 12px', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-split {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
