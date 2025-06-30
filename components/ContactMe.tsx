import Link from 'next/link';
import React from 'react';
import HyperText from './ui/hyper-text';

function ContactMe() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Himal',
    description:
      'Get in touch with Himal for collaboration opportunities, project discussions, or professional inquiries.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'himal9626@gmail.com',
      contactType: 'professional',
      availableLanguage: ['English', 'Hindi', 'Nepali'],
    },
  };

  return (
    <div className="flex flex-col gap-4 mb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HyperText className="text-3xl font-bold uppercase" text="Contact Me" />

      <address className="text-sm text-gray-500 dark:text-gray-300 not-italic">
        Want to chat? Just shoot me a dm with a{' '}
        <Link
          href="https://www.instagram.com/himal_official/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
          aria-label="Contact Himal on Instagram"
        >
          direct question on Instagram
        </Link>{' '}
        or email me directly at{' '}
        <Link
          target="_blank"
          href="mailto:himal9626@gmail.com"
          className="text-blue-500 hover:underline"
          rel="noopener noreferrer"
          aria-label="Send email to Himal"
        >
          himal9626@gmail.com{' '}
        </Link>
      </address>
    </div>
  );
}

export default ContactMe;
