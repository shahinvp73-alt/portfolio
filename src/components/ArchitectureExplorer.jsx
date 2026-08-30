import React, { useState } from 'react';
import { 
  Network, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  ArrowRight, 
  Lock, 
  Check, 
  Code, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';

export default function ArchitectureExplorer() {
  const [selectedLayer, setSelectedLayer] = useState("frontend");

  const layers = [
    {
      id: "frontend",
      title: "1. React Frontend Layer",
      icon: <Layout size={20} />,
      color: "#38bdf8",
      summary: "Dynamic SPA with Hooks, Router, and Modular State",
      techs: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Bootstrap"],
      codeSnippet: `// React Custom Hook for Authenticated DRF Requests
import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetchData(endpoint) {
  const [data, setData] = useState(null);
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    axios.get(\`/api/v1/\${endpoint}/\`, {
      headers: { Authorization: \`Bearer \${token}\` }
    }).then(res => setData(res.data));
  }, [endpoint]);

  return { data };
}`
    },
    {
      id: "api",
      title: "2. RESTful API Gateway",
      icon: <Network size={20} />,
      color: "#a855f7",
      summary: "JWT Authentication & Endpoint Routing",
      techs: ["Django REST Framework", "JWT Auth", "CORS Headers", "Swagger / OpenAPI"],
      codeSnippet: `# DRF URL Configuration & JWT Token Pairing
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/v1/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/students/', include('students.urls')),
]`
    },
    {
      id: "backend",
      title: "3. Django Backend & ORM",
      icon: <Server size={20} />,
      color: "#10b981",
      summary: "Business Logic, Serializers & Role-Based Security",
      techs: ["Django", "Python", "DRF Serializers", "Role-Based Access Control"],
      codeSnippet: `# DRF ViewSet with Custom Model Serializer & Permissions
from rest_framework import viewsets, permissions
from .models import Student
from .serializers import StudentSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)`
    },
    {
      id: "cloud",
      title: "4. Database & AWS Cloud",
      icon: <Cloud size={20} />,
      color: "#f59e0b",
      summary: "PostgreSQL Relational DB & AWS Infrastructure",
      techs: ["PostgreSQL", "AWS EC2", "AWS S3", "AWS RDS", "AWS IAM", "Docker"],
      codeSnippet: `# Docker Compose Production Setup for Django + React + Postgres
version: '3.8'
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: hideandseek_db
      POSTGRES_USER: shahin_dev
  backend:
    build: ./backend
    command: gunicorn hideandseek.wsgi:application --bind 0.0.0.0:8000
    depends_on:
      - db`
    }
  ];

  const currentLayer = layers.find(l => l.id === selectedLayer);

  return (
    <section id="architecture" className="section-padding" style={{ background: 'rgba(13, 17, 26, 0.6)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Network size={14} /> System Architecture
          </div>
          <h2 className="section-title">
            Full-Stack <span className="gradient-text">Architecture Flow</span>
          </h2>
          <p className="section-description">
            Interactive breakdown of how Shahin structures data flow from React UI components down to Django ORM & AWS cloud deployment.
          </p>
        </div>

        {/* Layer Selector Bar */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '16px', 
            marginBottom: '40px' 
          }}
        >
          {layers.map((layer) => {
            const isSelected = selectedLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id)}
                style={{
                  background: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                  border: isSelected ? `2px solid ${layer.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '20px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isSelected ? `0 0 20px ${layer.color}33` : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: layer.color, marginBottom: '8px', fontWeight: 700 }}>
                  {layer.icon}
                  <span>{layer.title}</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.825rem' }}>
                  {layer.summary}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Showcase Card */}
        <div className="glass-card" style={{ padding: '36px', border: `1px solid ${currentLayer.color}44` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', lg: '1fr 1fr', gap: '36px' }} className="architecture-grid">
            
            {/* Left: Explanation & Techs */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: `${currentLayer.color}22`, color: currentLayer.color }}>
                  {currentLayer.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                    {currentLayer.title}
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: currentLayer.color, fontWeight: 600 }}>
                    {currentLayer.summary}
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: '24px', color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Shahin implements decoupling between the presentation layer and the backend engine. Using RESTful standards, authentication headers, and database models ensures production reliability and fast rendering performance.
              </div>

              <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} style={{ color: '#10b981' }} /> Key Technologies in this Layer
              </h4>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {currentLayer.techs.map((t, idx) => (
                  <span 
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#f1f5f9',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Check size={14} style={{ color: currentLayer.color }} />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Code Sample Window */}
            <div 
              style={{
                background: '#07090e',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.08)',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div 
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  padding: '10px 16px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#64748b',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Code size={14} style={{ color: currentLayer.color }} />
                <span>shahin_architecture_snippet.py</span>
              </div>

              <pre 
                style={{ 
                  padding: '20px', 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.825rem', 
                  color: '#cbd5e1',
                  overflowX: 'auto',
                  lineHeight: 1.6
                }}
              >
                <code>{currentLayer.codeSnippet}</code>
              </pre>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .architecture-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
