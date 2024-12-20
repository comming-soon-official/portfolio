import Link from 'next/link';
import React from 'react';
import HyperText from './ui/hyper-text';

function ContactMe() {
  return (
    <div className="flex flex-col gap-4 mb-20">
      <HyperText className="text-2xl font-bold" text="Contact Me" />

      <p className="text-sm text-gray-500 dark:text-gray-300">
        Want to chat? Just shoot me a dm with a{' '}
        <Link
          href="https://www.instagram.com/himal_official/"
          target="_blank"
          className="text-blue-500"
        >
          direct question on Instagram
        </Link>{' '}
        or email me directly at{' '}
        <Link target="_blank" href="mailto:himal9626@gmail.com" className="text-blue-500">
          himal9626@gmail.com{' '}
        </Link>
      </p>
    </div>
  );
}

export default ContactMe;
