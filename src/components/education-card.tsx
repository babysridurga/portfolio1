"use client";

import React, { useRef, useEffect } from 'react';
import type { education as TEducation } from '@/lib/data';

type EducationCardProps = {
  education: (typeof TEducation)[number];
};

export function EducationCard({ education }: EducationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cardRef} className="holographic-card">
      <div className="holographic-card-content">
        <h3>{education.institution}</h3>
        <p>{education.degree}</p>
        <p className="font-semibold mt-2">{education.duration}</p>
        <p className="font-semibold">{education.cgpa}</p>
      </div>
    </div>
  );
}
