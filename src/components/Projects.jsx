import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  Shield, 
  TrendingUp, 
  ShoppingBag, 
  CheckSquare 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = ["All", "EdTech", "FinTech", "E-Commerce", "Productivity"];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "EdTech": return <Shield size={16} style={{ color: '#38bdf8' }} />;
      case "FinTech": return <TrendingUp size={16} style={{ color: '#10b981' }} />;
      case "E-Commerce": return <ShoppingBag size={16} style={{ color: '#a855f7' }} />;
      case "Productivity": return <CheckSquare size={16} style={{ color: '#f59e0b' }} />;
      default: return <Layers size={16} />;
    }
  };

  const filteredProjects = projects.filter(p => {
    if (selectedCategory !== "All" && p.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} /> Featured Portfolio
          </div>
          <h2 className="section-title">
            Production-Grade <span className="gradient-text">Full-Stack Projects</span>
          </h2>
          <p className="section-description">
            End-to-end web applications featuring React frontends, Django REST Framework APIs, PostgreSQL databases, and role-based security.
          </p>
        </div>

        {/* Category Filters */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '10px', 
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`tag-pill ${selectedCategory === cat ? 'active' : ''}`}
              style={{ padding: '8px 20px', fontSize: '0.9rem', cursor: 'pointer' }}
            >
              {cat !== "All" && getCategoryIcon(cat)}
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
            gap: '30px' 
          }}
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px',
                border: project.featured ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                {/* Category & Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#38bdf8',
                      background: 'rgba(56, 189, 248, 0.1)',
                      padding: '4px 12px',
                      borderRadius: '14px',
                      border: '1px solid rgba(56, 189, 248, 0.2)'
                    }}
                  >
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>

                  {project.featured && (
                    <span 
                      style={{ 
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#10b981',
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Sparkles size={12} /> Flagship App
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {project.shortDescription}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      style={{
                        fontSize: '0.8rem',
                        color: '#cbd5e1',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '4px 10px',
                        borderRadius: '8px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveProjectModal(project); }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#38bdf8',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: 0
                  }}
                >
                  Details <ArrowRight size={16} />
                </button>

                <div style={{ display: 'flex', gap: '16px' }}>
                  {project.link && (
                    <a
                      onClick={(e) => e.stopPropagation()}
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: '#10b981',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => (e.target.style.color = '#34d399')}
                      onMouseLeave={(e) => (e.target.style.color = '#10b981')}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}

                  <a
                    onClick={(e) => e.stopPropagation()}
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#fff')}
                    onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                  >
                    <GithubIcon size={16} /> Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProjectModal && (
          <ProjectModal 
            project={activeProjectModal} 
            onClose={() => setActiveProjectModal(null)} 
          />
        )}

      </div>
    </section>
  );
}
