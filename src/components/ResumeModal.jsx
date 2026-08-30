import React, { useState } from 'react';
import { X, Download, Copy, Check, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, technicalSkills, projects, education, certifications, softSkills, languages } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopyCV = () => {
    const cvText = `
${personalInfo.name}
${personalInfo.title}
Location: ${personalInfo.location} | Phone: ${personalInfo.phone} | Email: ${personalInfo.email}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

PROFESSIONAL SUMMARY:
${personalInfo.bio} ${personalInfo.objective}

TECHNICAL SKILLS:
- Languages: Python, JavaScript
- Frontend: React.js, HTML5, CSS3, Bootstrap
- Backend: Django, Django REST Framework (DRF)
- Databases: PostgreSQL, MySQL
- Cloud & DevOps: AWS (EC2, S3, RDS, IAM), Docker
- Tools: Git, GitHub, Postman, Visual Studio Code

PROJECTS:
${projects.map(p => `- ${p.title}\n  Tech: ${p.technologies.join(', ')}\n  Highlights:\n  ${p.highlights.map(h => `  * ${h}`).join('\n')}`).join('\n\n')}

EDUCATION:
${education.map(e => `- ${e.degree} (${e.period}), ${e.institution}, ${e.university}`).join('\n')}

CERTIFICATIONS:
${certifications.map(c => `- ${c.title}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content printable-area" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '900px' }}
      >
        
        {/* Header Actions */}
        <div 
          className="no-print"
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '24px', 
            paddingBottom: '16px', 
            borderBottom: '1px solid rgba(255,255,255,0.08)' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
              <Briefcase size={20} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
              Official CV Document - {personalInfo.name}
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={handleCopyCV} 
              className="btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            >
              {copied ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy Text'}
            </button>
            
            <button 
              onClick={handlePrint} 
              className="btn-primary"
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            >
              <Printer size={16} /> Print / Save PDF
            </button>

            <button 
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                padding: '8px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* CV Body Document */}
        <div 
          style={{ 
            background: 'rgba(255,255,255,0.02)', 
            padding: '36px', 
            borderRadius: '16px', 
            border: '1px solid rgba(255,255,255,0.06)',
            color: '#e2e8f0',
            lineHeight: 1.6
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '28px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', margin: 0 }}>
              {personalInfo.name}
            </h1>
            <div style={{ fontSize: '1.1rem', color: '#38bdf8', fontWeight: 600, marginTop: '4px' }}>
              {personalInfo.title}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '12px', fontSize: '0.875rem', color: '#94a3b8' }}>
              <span><MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} />{personalInfo.location}</span>
              <span><Phone size={14} style={{ display: 'inline', marginRight: '4px' }} />{personalInfo.phone}</span>
              <span><Mail size={14} style={{ display: 'inline', marginRight: '4px' }} />{personalInfo.email}</span>
              <span><GithubIcon size={14} style={{ display: 'inline', marginRight: '4px' }} />{personalInfo.githubUsername}</span>
              <span><LinkedinIcon size={14} style={{ display: 'inline', marginRight: '4px' }} />{personalInfo.linkedinUsername}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', paddingBottom: '4px' }}>
              Professional Summary
            </h2>
            <p style={{ fontSize: '0.925rem', color: '#cbd5e1' }}>
              {personalInfo.bio} {personalInfo.objective}
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', paddingBottom: '4px' }}>
              Technical Skills
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', fontSize: '0.9rem' }}>
              {technicalSkills.map((cat, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px' }}>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>{cat.category}:</strong>
                  <span style={{ color: '#94a3b8' }}>{cat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', paddingBottom: '4px' }}>
              Projects
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {projects.map((p) => (
                <div key={p.id} style={{ fontSize: '0.9rem' }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>{p.title}</div>
                  <div style={{ color: '#a855f7', fontSize: '0.825rem', marginBottom: '6px' }}>Technologies: {p.technologies.join(', ')}</div>
                  <ul style={{ paddingLeft: '20px', color: '#94a3b8' }}>
                    {p.highlights.map((h, i) => (
                      <li key={i} style={{ marginBottom: '3px' }}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', paddingBottom: '4px' }}>
                Education
              </h2>
              {education.map((e, idx) => (
                <div key={idx} style={{ fontSize: '0.9rem' }}>
                  <strong style={{ color: '#fff' }}>{e.degree}</strong> ({e.period})<br />
                  <span style={{ color: '#cbd5e1' }}>{e.institution}</span><br />
                  <span style={{ color: '#94a3b8', fontSize: '0.825rem' }}>{e.university}</span>
                </div>
              ))}
            </div>

            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', paddingBottom: '4px' }}>
                Certifications
              </h2>
              <ul style={{ paddingLeft: '18px', color: '#cbd5e1', fontSize: '0.9rem' }}>
                {certifications.map((c, idx) => (
                  <li key={idx}>{c.title}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>

      {/* Styles for print mode */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .printable-area, .printable-area * {
            visibility: visible;
          }
          .printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
