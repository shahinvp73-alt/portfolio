import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div className="section-subtitle">Contact</div>
        <h2 className="section-title">Let's Project & Get a <span>Free Consultation</span>.</h2>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px', marginTop: '60px' }}>
          
          {/* Contact Info (Left) */}
          <div style={{ background: 'var(--bg-card)', padding: '50px 40px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" alt="Contact" style={{ width: '100%', borderRadius: '4px', marginBottom: '30px' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '10px' }}>{personalInfo.name}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>{personalInfo.title}</p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: 1.8 }}>
              I am available for freelance work and entry-level developer roles. Connect with me via phone or email.
            </p>
            
            <div style={{ marginBottom: '15px' }}>
              <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>Phone: </span> 
              <span style={{ color: 'var(--text-muted)' }}>{personalInfo.phone}</span>
            </div>
            <div>
              <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>Email: </span> 
              <span style={{ color: 'var(--text-muted)' }}>{personalInfo.email}</span>
            </div>
          </div>

          {/* Form (Right) */}
          <div style={{ background: 'var(--bg-card)', padding: '50px 40px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'flex', gap: '25px', flexDirection: 'column', sm: 'row' }} className="form-row">
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '10px', fontSize: '0.9rem' }}>YOUR NAME</label>
                  <input type="text" />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '10px', fontSize: '0.9rem' }}>PHONE NUMBER</label>
                  <input type="text" />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '10px', fontSize: '0.9rem' }}>EMAIL</label>
                <input type="email" />
              </div>
              
              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '10px', fontSize: '0.9rem' }}>SUBJECT</label>
                <input type="text" />
              </div>
              
              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '10px', fontSize: '0.9rem' }}>YOUR MESSAGE</label>
                <textarea rows="6"></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ padding: '16px 30px', marginTop: '10px' }}>SEND MESSAGE</button>
            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1.5fr !important;
          }
          .form-row {
            flex-direction: row !important;
          }
        }
      `}</style>
    </section>
  );
}
