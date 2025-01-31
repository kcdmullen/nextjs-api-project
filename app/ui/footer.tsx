import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

const links = [
  {
    name: 'Home',
    href: '/',
    src: '/globe.svg',
    alt: 'Globe icon',
    type: 'internal',
  },
  {
    name: 'Purchase Orders',
    href: '/dashboard',
    src: '/globe.svg',
    alt: 'Globe icon',
    type: 'internal',
  },
  {
    name: 'Election Notices',
    href: '/dashboard/about',
    src: '/file.svg',
    alt: 'File icon',
    type: 'internal',
  },
  {
    name: 'Blog',
    href: '/dashboard/blog',
    src: '/window.svg',
    alt: 'Window icon',
    type: 'internal',
  },
  {
    name: 'Examples →',
    href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    src: '/window.svg',
    alt: 'Window icon',
    type: 'external',
  },
  {
    name: 'Go to nextjs.org →',
    href: 'https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    src: '/globe.svg',
    alt: 'Globe icon',
    type: 'external',
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.name}
            {...(link.type === 'external' && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            <Image
              aria-hidden
              src={link.src}
              alt={link.alt}
              width={16}
              height={16}
            />
            {link.name}
          </Link>
        );
      })}
    </footer>
  );
}
