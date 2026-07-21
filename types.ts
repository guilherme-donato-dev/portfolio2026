import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string;
  icon?: React.ReactNode;
  color?: string;
  url: string;
}

export interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}