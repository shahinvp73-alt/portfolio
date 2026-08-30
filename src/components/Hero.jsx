import React, { useState } from 'react';
import { Mail, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ResumeModal from './ResumeModal';
// Custom SVGs for brand icons removed from lucide-react
const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="home" style={{ padding: '150px 0 100px 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px', alignItems: 'center' }}>

          {/* Text Content */}
          <div>
            <div style={{ textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 500 }}>
              Welcome To My World
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px', fontFamily: 'var(--font-sans)' }}>
              Hello, I'm <span style={{ color: 'var(--accent)' }}>{personalInfo.firstName}</span>.<br />
              {personalInfo.title}
            </h1>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '40px', lineHeight: 1.8 }}>
              A passionate developer based in {personalInfo.location}. {personalInfo.roleSubtitle}. I specialize in React, Django, and scalable REST APIs.
            </p>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowResume(true)}
                className="btn btn-primary"
                style={{ padding: '0 24px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', border: 'none', borderRadius: '4px', background: 'var(--accent)', color: '#fff', fontWeight: 'bold', height: '50px' }}
              >
                <FileText size={20} />
                VIEW CV
              </button>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon">
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                <LinkedinIcon size={20} />
              </a>
              {/* <a href={`mailto:${personalInfo.email}`} className="social-icon">
                <Mail size={20} />
              </a>
              <a href="#" className="social-icon">
                <TwitterIcon size={20} />
              </a> */}
            </div>
          </div>



        </div>
      </div>

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}

      <style>{`
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--bg-secondary);
          border-radius: 4px;
          color: var(--text-main);
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        .social-icon:hover {
          background: var(--accent);
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}
