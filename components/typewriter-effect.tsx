'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterEffectProps {
  words: string[];
  className?: string;
}

export function TypewriterEffect({ words, className }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typeSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText(word.substring(0, isDeleting ? currentText.length - 1 : currentText.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className={cn('relative', className)}>
      <span>{currentText}</span>
      <span className="animate-blink">|</span>
    </div>
  );
}