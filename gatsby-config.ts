import type { GatsbyConfig } from 'gatsby'
import adapter from 'gatsby-adapter-netlify'

const config: GatsbyConfig = {
  trailingSlash: "never",
  adapter: adapter({
    excludeDatastoreFromEngineFunction: true,
  }),
  siteMetadata: {
    title: 'Donald Boulton - Dimension V4',
    author: 'Donald Boulton',
    siteUrl: 'https://donboulton.com',
    siteImage: '/static/assets/bg.jpg',
    description: 'A Gatsby.js v5 Starter based on Dimension by HTML5 UP',
  },
  headers: [
    {
      source: `*`,
      headers: [
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
        // Opt-out of Google FLoC: https://amifloced.org/
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
        },
        {
          key: 'X-Robots-Tag',
          value: 'index',
        },
        {
          key: 'Vary',
          value: 'accept-encoding',
        },
        {
          key: 'Access-Control-Max-Age',
          value: '3600',
        },
        {
          key: 'Access-Control-Allow-Credentials',
          value: 'true',
        },
        {
          key: 'Access-Control-Allow-Headers',
          value: 'Content-Type, Authorization, Time-Zone',
        },
        {
          key: 'Access-Control-Allow-Methods',
          value: 'POST, GET, PUT, DELETE, PATCH, OPTIONS, HEAD',
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=2592000',
        },
      ],
    },
  ],
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'donaldboulton',
        short_name: 'Landing Site',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/assets/apple-touch-icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/', '/thanks'],
        workboxConfig: {
          importWorkboxFrom: 'cdn',
        },
      },
    },
  ],
}

export default config
