import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050816',
};

export const metadata: Metadata = {
  title: 'Juan Pablo - Desenvolvedor Web & Designer Criativo',
  description: 'Portfolio de Juan Pablo, desenvolvedor web e designer criativo especializado em criar soluções digitais inovadoras e visualmente impactantes.',
  keywords: 'desenvolvedor web, designer, portfolio, Juan Pablo, desenvolvimento web, design criativo, front-end, back-end',
  authors: [{ name: 'Juan Pablo' }],
  creator: 'Juan Pablo',
  publisher: 'Juan Pablo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Juan Pablo - Desenvolvedor Web & Designer Criativo',
    description: 'Portfolio de Juan Pablo, desenvolvedor web e designer criativo especializado em criar soluções digitais inovadoras e visualmente impactantes.',
    url: 'https://juanpablo.tech',
    siteName: 'Juan Pablo Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Pablo - Desenvolvedor Web & Designer Criativo',
    description: 'Portfolio de Juan Pablo, desenvolvedor web e designer criativo especializado em criar soluções digitais inovadoras e visualmente impactantes.',
    creator: '@juanpablo_tech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verificação-a-ser-adicionada',
  },
  alternates: {
    canonical: 'https://juanpablo.tech',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Schema.org JSON-LD para Person */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Juan Pablo',
              url: 'https://juanpablo.tech',
              jobTitle: 'Desenvolvedor Web & Designer Criativo',
              knowsAbout: ['Desenvolvimento Web', 'Design', 'React', 'Next.js', 'Tailwind CSS', 'Node.js'],
              sameAs: [
                'https://instagram.com/juanpablo.tech/',
                'https://wa.me/+5511987787415'
                // Adicionar outros perfis sociais quando disponíveis
              ]
            })
          }}
        />
        
        {/* Schema.org JSON-LD para WebSite */}
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Juan Pablo Portfolio',
              url: 'https://juanpablo.tech',
              description: 'Portfolio de Juan Pablo, desenvolvedor web e designer criativo especializado em criar soluções digitais inovadoras e visualmente impactantes.',
              author: {
                '@type': 'Person',
                name: 'Juan Pablo'
              },
              inLanguage: 'pt-BR'
            })
          }}
        />
        
        {/* Google Tag Manager (pode ser configurado posteriormente) */}
        {/* <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`
          }}
        /> */}
      </body>
    </html>
  );
}
