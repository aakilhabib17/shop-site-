'use client'; // ✅ Only the interactive part needs 'use client'

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    try {
      // Replace with your actual API endpoint
      // await fetch('/api/newsletter', {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      // });

      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="newsletterForm">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="emailInput"
        required
        disabled={status === 'loading'}
      />
      <button 
        type="submit" 
        className="subscribeButton"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
      </button>
      
      {status === 'success' && (
        <p className="newsletterStatus success">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="newsletterStatus error">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
