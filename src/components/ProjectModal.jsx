import React, { useState } from 'react';
import { 
  X, 
  Layers, 
  Server, 
  Database, 
  CheckCircle2, 
  Terminal, 
  ExternalLink, 
  Lock, 
  Users, 
  ShieldCheck, 
  Activity 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Close Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {project.category} Project
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginTop: '4px' }}>
              {project.title}
            </h3>
          </div>
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

        {/* Modal Inner Tabs */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
          <button 
            onClick={() => setActiveTab("overview")}
            className={`tag-pill ${activeTab === 'overview' ? 'active' : ''}`}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Overview & Key Features
          </button>
          <button 
            onClick={() => setActiveTab("architecture")}
            className={`tag-pill ${activeTab === 'architecture' ? 'active' : ''}`}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Full Stack Architecture
          </button>
          <button 
            onClick={() => setActiveTab("demoApi")}
            className={`tag-pill ${activeTab === 'demoApi' ? 'active' : ''}`}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            REST API Endpoint Schema
          </button>
        </div>

        {/* Tab Content 1: Overview */}
        {activeTab === "overview" && (
          <div>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              {project.shortDescription}
            </p>

            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={18} style={{ color: '#10b981' }} /> Key Implementation Highlights
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {project.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', marginTop: '8px' }}></div>
                  <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{h}</span>
                </div>
              ))}
            </div>

            <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '12px' }}>
              Technologies & Tools Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38bdf8', padding: '4px 12px', borderRadius: '16px', fontSize: '0.85rem', fontWeight: 500 }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 2: Architecture */}
        {activeTab === "architecture" && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#38bdf8', fontWeight: 700, marginBottom: '8px' }}>
                <Layers size={18} /> Frontend Architecture (React)
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.925rem' }}>{project.architectureDetails.frontend}</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a855f7', fontWeight: 700, marginBottom: '8px' }}>
                <Server size={18} /> Backend API Gateway (Django & DRF)
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.925rem' }}>{project.architectureDetails.backend}</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10b981', fontWeight: 700, marginBottom: '8px' }}>
                <Database size={18} /> Relational Data Layer (PostgreSQL)
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.925rem' }}>{project.architectureDetails.database}</p>
            </div>
          </div>
        )}

        {/* Tab Content 3: REST API Schema */}
        {activeTab === "demoApi" && (
          <div style={{ background: '#0a0d16', padding: '20px', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.2)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            <div style={{ color: '#10b981', marginBottom: '10px' }}>// Sample DRF API Endpoint Response ({project.id})</div>
            <div style={{ color: '#cbd5e1' }}>
              <span style={{ color: '#f472b6' }}>GET</span> <span style={{ color: '#38bdf8' }}>/api/v1/{project.id}/status/</span><br />
              <span style={{ color: '#a78bfa' }}>Headers</span>: &#123; <span style={{ color: '#a3e635' }}>"Authorization"</span>: <span style={{ color: '#a3e635' }}>"Bearer eyJhbGciOi..."</span> &#125;<br /><br />
              &#123;<br />
              &nbsp;&nbsp;<span style={{ color: '#38bdf8' }}>"status"</span>: <span style={{ color: '#a3e635' }}>"success"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#38bdf8' }}>"project"</span>: <span style={{ color: '#a3e635' }}>"{project.title}"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#38bdf8' }}>"authenticated_role"</span>: <span style={{ color: '#a3e635' }}>"Admin / Staff"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#38bdf8' }}>"database_engine"</span>: <span style={{ color: '#a3e635' }}>"PostgreSQL"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#38bdf8' }}>"modules_loaded"</span>: [<br />
              {project.highlights.map((h, i) => (
                <span key={i}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#a3e635' }}>"{h.slice(0, 45)}..."</span>{i < project.highlights.length - 1 ? ',' : ''}<br /></span>
              ))}
              &nbsp;&nbsp;]<br />
              &#125;
            </div>
          </div>
        )}

        {/* Modal Footer Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            Close
          </button>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            <GithubIcon size={16} /> View GitHub Repo
          </a>
        </div>

      </div>
    </div>
  );
}
