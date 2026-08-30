import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Building2, 
  FileCheck2, 
  Workflow 
} from 'lucide-react';
import { education, certifications } from '../data/portfolioData';

export default function ExperienceEducation() {
  const methodologies = [
    { title: "RESTful API Development", desc: "Standardized API resource endpoints, HTTP methods, and status codes." },
    { title: "MVC Architecture", desc: "Model-View-Controller separation for structured, maintainable codebases." },
    { title: "Agile & Scrum Workflow", desc: "Iterative sprints, continuous integration, and rapid feature delivery." },
    { title: "Role-Based Security (RBAC)", desc: "Fine-grained permissions and JWT token verification." }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} /> Background & Credentials
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-description">
            Academic qualifications, verified technology certifications, and software engineering methodologies.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lg: '1fr 1fr', gap: '32px' }} className="exp-grid">
          
          {/* Left: Education Card */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
                <GraduationCap size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                Higher Education
              </h3>
            </div>

            {education.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  position: 'relative', 
                  paddingLeft: '24px', 
                  borderLeft: '2px solid rgba(56, 189, 248, 0.4)' 
                }}
              >
                <div 
                  style={{ 
                    position: 'absolute', 
                    left: '-7px', 
                    top: '0', 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    background: '#38bdf8',
                    boxShadow: '0 0 10px #38bdf8'
                  }} 
                />

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>

                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                  {item.degree}
                </h4>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, marginBottom: '4px' }}>
                  <Building2 size={16} style={{ color: '#a855f7' }} />
                  <span>{item.institution}</span>
                </div>

                <div style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '16px' }}>
                  {item.university}
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Certifications Card */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                Verified Certifications
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '14px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FileCheck2 size={20} style={{ color: '#10b981' }} />
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                        {cert.title}
                      </h4>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '2px 8px', borderRadius: '10px', fontWeight: 600 }}>
                      Verified
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {cert.skills.map((s, i) => (
                      <span key={i} style={{ fontSize: '0.775rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '6px' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Methodologies Banner */}
        <div style={{ marginTop: '40px' }} className="glass-card">
          <div style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#38bdf8', fontWeight: 700, marginBottom: '20px', fontSize: '1.1rem' }}>
              <Workflow size={20} /> Software Engineering Methodologies
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {methodologies.map((m, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={14} style={{ color: '#10b981' }} />
                    {m.title}
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .exp-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
