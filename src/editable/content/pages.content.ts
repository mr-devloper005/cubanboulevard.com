import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Cuban stories, culture, and thoughtful articles',
      description: 'Read articles about Cuban culture, food, travel, creativity, community, and everyday life.',
      openGraphTitle: 'Cuban stories and thoughtful perspectives',
      openGraphDescription: 'Discover useful guides, cultural essays, and original articles from Cuban Boulevard.',
      keywords: ['Cuban articles', 'Cuban culture', 'Cuban stories', 'Cuban food', 'Cuban travel'],
    },
    hero: {
      badge: 'The Cuban Boulevard journal',
      title: ['Stories that bring Cuban culture', 'and everyday life closer.'],
      description: 'Explore thoughtful articles about culture, food, travel, creativity, community, and the ideas connecting Cubans around the world.',
      primaryCta: { label: 'Read latest stories', href: '/article' },
      secondaryCta: { label: 'Search articles', href: '/search' },
      searchPlaceholder: 'Search articles by topic or title',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Fresh articles from across Cuban Boulevard.',
      featureCardDescription: 'Recent stories, essays, and guides stay at the center of the reading experience.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for thoughtful reading and meaningful discovery.',
      paragraphs: [
        'Cuban Boulevard brings together useful guides, cultural essays, and original perspectives in one focused reading experience.',
        'Articles explore food, travel, heritage, creativity, community, and the everyday ideas shaping Cuban life.',
        'Readers can move naturally between recent stories and related topics without losing their place.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Article-focused sections for culture, guides, and original perspectives.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'Search articles', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore Cuban stories and useful ideas in one reading experience.',
      description: 'Move between thoughtful articles, practical guides, and related cultural perspectives with ease.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Us', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A calmer, clearer way to explore content.',
    description: `${slot4BrandConfig.siteName} is built to make long-form reading, visual discovery, and supporting resources feel like one unified experience.`,
    paragraphs: [
      'Instead of splitting everything into disconnected pages, the platform keeps related content easy to move through and easy to understand.',
      'Whether someone starts with an article, listing, image post, or resource page, they can continue exploring without losing context.',
    ],
    values: [
      {
        title: 'Reading-first experience',
        description: 'We prioritize clarity, pacing, and structure so people can read, browse, and discover without noise.',
      },
      {
        title: 'Connected content surfaces',
        description: 'Articles, visual posts, listings, resources, and profiles stay connected so discovery feels natural across the site.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on clean navigation and clear page structure to help visitors find useful content faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'A support page that matches the product, not a generic contact form.',
    description: 'Tell us what you are trying to publish, fix, or launch. We will route it through the right lane instead of forcing every request into the same support bucket.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find stories, listings, visuals, and resources faster.',
      description: 'Use keywords, categories, and content types to discover posts from every active section of the site.',
      placeholder: 'Search by keyword, topic, category, or title',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create an article',
      description: 'Write and submit an article for Cuban Boulevard.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create an article.',
      description: 'Use your account to open the article workspace and share a useful guide, cultural essay, or original perspective.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Share a story with Cuban Boulevard.',
      description: 'Add a clear title, helpful summary, relevant image, and well-written article for readers across the boulevard.',
    },
    formTitle: 'Article details',
    submitLabel: 'Submit article',
    successTitle: 'Article submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your publishing space.',
      description: 'Login to continue browsing, managing submissions, and creating new content from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start publishing.',
      description: 'Create an account to access the publishing workspace, save details, and submit content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
