import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Wrench, 
  Search, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Programming Languages",
    "Frontend Development",
    "Backend Development",
    "Databases",
    "Cloud & DevOps",
    "Tools & Methodologies"
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Programming Languages": return <Code2 size={18} />;
      case "Frontend Development": return <Layout size={18} />;
      case "Backend Development": return <Server size={18} />;
      case "Databases": return <Database size={18} />;
      case "Cloud & DevOps": return <Cloud size={18} />;
      case "Tools & Methodologies": return <Wrench size={18} />;
      default: return <Cpu size={18} />;
    }
  };

  const filteredCategories = technicalSkills.filter(cat => {
    if (activeCategory !== "All" && cat.category !== activeCategory) {
      return false;
    }
    return true;
  });

  return (
    <section id="skills" className="section-padding" style={{ background: 'rgba(13, 17, 26, 0.4)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} /> Technical Arsenal
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-description">
            Comprehensive skill set built through hands-on full-stack development and cloud deployments.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
          
          {/* Category Tabs */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '10px', 
              justifyContent: 'center' 
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`tag-pill ${activeCategory === cat ? 'active' : ''}`}
                style={{
                  padding: '8px 18px',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                {cat !== "All" && getCategoryIcon(cat)}
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div 
            style={{ 
              maxWidth: '400px', 
              margin: '0 auto', 
              width: '100%', 
              position: 'relative' 
            }}
          >
            <Search 
              size={18} 
              style={{ 
                position: 'absolute', 
                left: '14px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: '#64748b' 
              }} 
            />
            <input 
              type="text"
              placeholder="Search skill (e.g. React, Django, AWS)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px 10px 42px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#fff',
                outline: 'none',
                fontSize: '0.9rem'
              }}
            />
          </div>

        </div>

        {/* Skill Category Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {filteredCategories.map((cat, catIdx) => {
            const visibleSkills = cat.skills.filter(s => 
              s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              s.highlight.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (visibleSkills.length === 0) return null;

            return (
              <div key={catIdx} className="glass-card" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>
                    {cat.category}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {visibleSkills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.9rem' }}>
                        <span style={{ fontWeight: 600, color: '#f1f5f9', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <CheckCircle2 size={14} style={{ color: '#10b981' }} />
                          {skill.name}
                        </span>
                        <span style={{ color: '#38bdf8', fontWeight: 500, fontSize: '0.8rem' }}>
                          {skill.highlight}
                        </span>
                      </div>
                      
                      {/* Skill Level Progress Bar */}
                      <div 
                        style={{ 
                          width: '100%', 
                          height: '6px', 
                          borderRadius: '3px', 
                          background: 'rgba(255, 255, 255, 0.08)',
                          overflow: 'hidden' 
                        }}
                      >
                        <div 
                          style={{ 
                            width: `${skill.level}%`, 
                            height: '100%', 
                            background: 'var(--gradient-primary)',
                            borderRadius: '3px',
                            transition: 'width 1s ease-in-out'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
