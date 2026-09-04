export const translations = {
  hero: {
    eyebrow: [
      { icon: 'apple', label: 'iOS' },
      { icon: 'react', label: 'React Native' },
      { icon: 'backend', label: 'Backend' },
      { icon: 'ai', label: 'AI agents' },
    ],
    heading: ['Your app deserves better', 'than a wrapped website.'],
    subtitle:
      'Native iOS. Cross-platform React Native. AI agents built in. I take apps from an empty project to a live App Store listing.',
    proofPoints: ['5+ years in mobile', '30+ apps on the App Store', 'Replies within 24 h'],
    alt: 'Chirag Gujarati iOS and React Native developer',
    cta: {
      primary: {
        label: 'Schedule a discovery call (30 min)',
        href: 'https://cal.com/chirag-gujarati-5sthcq/30min',
      },
      secondary: { label: 'See how I work', href: '#how-it-works' },
      reassurance:
        "Bring your idea - you'll leave with a clear next step, I clarify your need and see if I'm really the right fit.",
    },
  },
  about: {
    title: 'About Me',
    subtitle:
      'An iOS and React Native developer from Ahmedabad, building for domestic and international clients since 2021.',
    paragraphs: [
      'I build mobile apps end to end - architecture, interface, device integrations and the App Store release itself. Five years in, across three product companies, most of that time has gone into native iOS with React Native alongside it when a client needs both platforms from one codebase.',
      "The work I enjoy most is the part that's hard to fake: pairing with Bluetooth hardware, keeping data intact with no connection, bending Apple's ScreenTime and HealthKit frameworks into shape, and making apps fast again after they've grown heavy. Lately I've been folding AI agents into that mix.",
    ],
    timeline: {
      title: 'Where I have worked',
      items: [
        {
          logo: '/logo-syncly.webp',
          company: 'Syncly',
          role: 'Senior iOS App Developer',
          period: 'Feb 2024 - Present',
          current: true,
          text: 'Lookupp, Silver Stream, DamageID, Fluid Focus, TherapyAI and DreamTime - ScreenTime API work, an Objective-C to Swift migration, and SwiftUI interface rebuilds.',
        },
        {
          logo: '/logo-sculptsoft.webp',
          company: 'SculptSoft',
          role: 'iOS Developer',
          period: 'Nov 2022 - Jan 2024',
          text: 'Skandika, a German fitness platform pairing over Bluetooth with gym equipment in six languages, and Virtual Site Inspections, an offline-first property inspection tool.',
        },
        {
          logo: '/logo-codonnier.webp',
          company: 'Codonnier Solutions',
          role: 'Full Stack Developer',
          period: 'Apr 2021 - Nov 2022',
          text: 'The Recs App, PurpleHeylo with WebRTC live streaming, DealsAtlas, Zapitto and Global Glamping - social, commerce and community products.',
        },
      ],
    },
    method: {
      title: 'How I work',
      items: [
        'Ship to the App Store, not to a demo - review, entitlements and release included.',
        'Native where it matters, cross-platform where it pays. The choice follows the product.',
        'Design for the offline case first. Connectivity is a feature, not an assumption.',
        'Stay on after launch for the crash reports and the follow-up releases.',
      ],
    },
    stats: [
      { value: '5+', label: 'Years building mobile apps' },
      { value: '30+', label: 'Apps shipped to the App Store' },
      { value: 'iOS + React Native', label: 'Native and cross-platform' },
    ],
    toolbox: {
      title: 'Tech & Toolbox',
      // Platforms and languages first, then the day-to-day tools - the order
      // the list is read in.
      primary: [
        { icon: 'ios', label: 'iOS' },
        { icon: 'xcode', label: 'Xcode' },
        { icon: 'reactnative', label: 'React Native' },
        { icon: 'python', label: 'Python' },
        { icon: 'firebase', label: 'Firebase' },
        { icon: 'supabase', label: 'Supabase' },
        { icon: 'aws', label: 'AWS' },
        { icon: 'vscode', label: 'VS Code' },
        { icon: 'postman', label: 'Postman' },
        { icon: 'figma', label: 'Figma' },
        { icon: 'jira', label: 'Jira' },
        { icon: 'trello', label: 'Trello' },
        { icon: 'notion', label: 'Notion' },
      ],
      secondary: [
        'Swift',
        'SwiftUI',
        'UIKit',
        'MVVM',
        'CoreBluetooth',
        'HealthKit',
        'ScreenTime API',
        'App Clip',
        'WebRTC',
        'Socket.IO',
        'CI/CD',
        'Realm',
      ],
    },
    education: {
      title: 'Education & awards',
      items: [
        { label: 'BE, Computer Engineering', detail: 'SCET - Surat, Gujarat' },
        { label: 'Bright Beginner Award', detail: 'November 2021' },
        { label: 'Monthly Performer', detail: 'Recognised for delivery' },
      ],
    },
  },
  howItWorks: {
    title: 'How I work',
    subtitle: 'Four steps from first call to a live App Store listing - you always know what happens next.',
    steps: [
      {
        title: 'Discovery call',
        text: "Thirty minutes to understand the app you want and who opens it. I'll say honestly whether I'm the right fit.",
      },
      {
        title: 'Scope and estimate',
        text: 'A written plan: what ships in version one, what waits for later, how long it takes and what it costs.',
      },
      {
        title: 'Build in the open',
        text: 'TestFlight builds early and often, so you are using the real app on a real device long before launch day.',
      },
      {
        title: 'Ship and stay on',
        text: 'I handle submission, review and release - then stick around for crash reports and the next version.',
      },
    ],
  },
  proofBand: {
    title: 'Three apps, three hard problems',
    subtitle:
      'Real work that shipped to the App Store - a fitness platform that talks to gym hardware, a screen-time app that actually enforces focus, and a streaming catalogue rebuilt for speed.',
    linkLabel: 'View on the App Store',
    cases: [
      {
        icon: 'bluetooth',
        tag: 'Hardware that needed an app',
        client: 'Skandika - German fitness platform',
        text: 'Native iOS app that pairs over Bluetooth with ergometers, rowing machines and bikes - live metrics in, guided training programs out. Shipped in six languages with HealthKit sync.',
        stack: [
          { icon: 'ios', label: 'iOS' },
          { icon: 'android', label: 'Android' },
          { icon: 'python', label: 'Python' },
        ],
        href: 'https://apps.apple.com/cz/app/skandika-fitness/id6473820107',
      },
      {
        icon: 'screentime',
        tag: 'Screen time, actually enforced',
        client: 'Lookupp',
        text: "Built on Apple's ScreenTime API to lock distracting apps and pay users back in points for staying focused. Getting that framework to behave reliably was most of the work.",
        stack: [
          { icon: 'firebase', label: 'Firebase' },
          { icon: 'supabase', label: 'Supabase' },
          { icon: 'ios', label: 'iOS' },
        ],
        href: 'https://apps.apple.com/in/app/lookupp/id1666548055',
      },
      {
        icon: 'redesign',
        tag: 'Redesign and rescue',
        client: 'Silver Stream',
        text: 'A 1,500-title catalogue of classic film and television. I redesigned the interface and fixed the performance problems that made a library that size stutter.',
        stack: [
          { icon: 'ios', label: 'iOS' },
          { icon: 'aws', label: 'AWS' },
          { icon: 'design', label: 'UI/UX' },
        ],
        href: 'https://apps.apple.com/us/app/silver-stream/id1451791823',
      },
    ],
    footerPoints: ['5+ years in mobile', 'Swift, SwiftUI & React Native', '30+ apps shipped'],
  },
  services: {
    title: 'Services',
    subtitle:
      'Everything an app needs across its life - building it, proving it works, shipping it, and keeping it healthy afterwards.',
    categories: [
      {
        icon: 'app',
        title: 'App development',
        description: 'Native iOS in Swift and SwiftUI, or React Native when you need both platforms from one codebase.',
        items: [
          'New apps from first screen to App Store listing',
          'Native iOS in Swift, SwiftUI and UIKit',
          'React Native for iOS and Android together',
          'Device features: Bluetooth, HealthKit, ScreenTime, notifications',
        ],
      },
      {
        icon: 'qa',
        title: 'QA and testing',
        description: 'Finding what breaks before your users do - on the devices and OS versions they actually own.',
        items: [
          'Manual test passes across real devices and iOS versions',
          'Unit and UI test coverage where it earns its keep',
          'TestFlight beta rounds with your own testers',
          'Pre-submission checks against App Store review rules',
        ],
      },
      {
        icon: 'maintenance',
        title: 'Bug fixing and maintenance',
        description: 'Keeping a shipped app healthy - crashes triaged, regressions caught, dependencies current.',
        items: [
          'Crash triage from Crashlytics and Xcode Organizer',
          'Fixes for the major iOS release every September',
          'SDK and dependency upgrades before they break you',
          'Small feature changes on an ongoing basis',
        ],
      },
      {
        icon: 'release',
        title: 'Release and CI/CD',
        description: 'Automating the tedious half of shipping, so a release stops being an event you dread.',
        items: [
          'Xcode Cloud and CI pipelines set up end to end',
          'Signing, certificates and provisioning handled',
          'Automated builds to TestFlight on every merge',
          'App Store submission, review and phased release',
        ],
      },
      {
        icon: 'performance',
        title: 'Performance and redesign',
        description: 'For apps that already work but feel slow, dated, or awkward to move around in.',
        items: [
          'Profiling with Instruments to find the real bottleneck',
          'Smooth scrolling for large lists and media catalogues',
          'Interface redesign and migration to SwiftUI',
          'Objective-C to Swift migration without downtime',
        ],
      },
      {
        icon: 'backend',
        title: 'Backend and AI',
        description: 'The part behind the app - data, accounts, and AI features where they genuinely help.',
        items: [
          'Firebase and Supabase: auth, database and storage',
          'Custom APIs in Python, deployed on AWS',
          'Realtime sync and offline-first data',
          'AI features and agent workflows inside the app',
        ],
      },
    ],
  },
  clientApps: {
    title: 'Client projects',
    subtitle: 'Apps built and shipped for clients - every one of these is live on a store today.',
    appStoreLabel: 'Download on the App Store',
    googlePlayLabel: 'Get it on Google Play',
    items: [
      {
        name: 'Lookupp',
        icon: '/app-lookupp.webp',
        category: 'Productivity',
        description:
          'Start a phone-free zone with the people around you and earn real rewards for staying off the screen.',
        appStore: 'https://apps.apple.com/us/app/lookupp/id1666548055',
      },
      {
        name: 'Silver Stream',
        icon: '/app-silver-stream.webp',
        category: 'Entertainment',
        description:
          'A streaming library of more than 1,500 restored classic films, TV shows and serials from the golden age.',
        appStore: 'https://apps.apple.com/us/app/silver-stream/id1451791823',
      },
      {
        name: 'Fluid Focus',
        icon: '/app-fluid-focus.webp',
        category: 'Productivity',
        description:
          'Screen time limits that turn into rewards - block the distracting apps for a session and earn your way back.',
        appStore: 'https://apps.apple.com/us/app/fluid-focus-app/id6477136445',
        googlePlay: 'https://play.google.com/store/apps/details?id=com.fluidfocusltd.fluidfocus',
      },
      {
        name: 'PDF Scanner: Document Camera',
        icon: '/app-pdf-scanner.webp',
        category: 'Productivity',
        description:
          'Scan anything into a clean, sharp PDF, then summarise, question or sign it - all on device with Apple Intelligence.',
        appStore: 'https://apps.apple.com/us/app/pdf-scanner-document-camera/id6654918235',
      },
      {
        name: 'DAMAGE iD',
        icon: '/app-damage-id.webp',
        category: 'Business',
        description:
          'Photo and video vehicle inspection for rental fleets - damage recorded and proven before and after every trip.',
        appStore: 'https://apps.apple.com/us/app/damage-id/id1024284443',
      },
      {
        name: 'Skandika Fitness',
        icon: '/app-skandika.webp',
        category: 'Health & Fitness',
        description:
          'Bluetooth companion for Skandika ergometers - live workout metrics and guided sessions, in six languages.',
        appStore: 'https://apps.apple.com/de/app/skandika-fitness/id6473820107',
      },
      {
        name: 'AviMaps',
        icon: '/app-avimaps.webp',
        category: 'Lifestyle',
        description: 'Log every bird, wildlife and plant sighting, put it on the map and share the find with friends.',
        appStore: 'https://apps.apple.com/us/app/avimaps/id6759719027',
        googlePlay: 'https://play.google.com/store/apps/details?id=com.avimaps.myapp',
      },
      {
        name: 'DreamTime Stories & Sounds',
        icon: '/app-dreamtime.webp',
        category: 'Health & Fitness',
        description: 'Bedtime stories, meditations and sleep sounds that help children settle and fall asleep faster.',
        appStore: 'https://apps.apple.com/us/app/dreamtime-stories-sounds/id6504247314',
      },
    ],
  },
  projects: {
    title: 'Open source',
    subtitle:
      'Small, focused iOS components and demos I keep public - custom controls, SwiftUI experiments and integration samples.',
    starsNote: 'GitHub stars',
    ctaLabel: 'See all repositories',
    ctaHref: 'https://github.com/chiraggujarati',
    items: [
      {
        name: 'CustomTabbarSwiftUI',
        language: 'Swift',
        stars: 16,
        description:
          'A custom SwiftUI tab bar with an animated selected state, built as a drop-in replacement for the system one. My most-starred public repo.',
        tags: ['SwiftUI', 'UI component'],
        href: 'https://github.com/chiraggujarati/CustomTabbarSwiftUI',
      },
      {
        name: 'MovieList',
        language: 'Swift',
        description:
          'A SwiftUI movie browser wired to a remote catalogue API - list, detail and image loading. The largest of my public samples.',
        tags: ['SwiftUI', 'REST API'],
        href: 'https://github.com/chiraggujarati/MovieList',
      },
      {
        name: 'SwiftUIFirestore',
        language: 'Swift',
        description:
          'A working SwiftUI and Cloud Firestore integration - reading and writing live collections without the boilerplate.',
        tags: ['SwiftUI', 'Firebase'],
        href: 'https://github.com/chiraggujarati/SwiftUIFirestore',
      },
      {
        name: 'SemiCircularSlider',
        language: 'Swift',
        description:
          'A semi-circular slider control with gesture-driven value tracking, for dials and gauges the standard slider cannot express.',
        tags: ['Custom control', 'Gestures'],
        href: 'https://github.com/chiraggujarati/SemiCircularSlider',
      },
      {
        name: 'CurvedTabbar',
        language: 'Swift',
        description:
          'A curved tab bar for iOS with a raised centre action, the pattern most commonly asked for and least well supported by UIKit.',
        tags: ['UIKit', 'UI component'],
        href: 'https://github.com/chiraggujarati/CurvedTabbar',
      },
      {
        name: 'OCRDemo',
        language: 'Swift',
        description:
          'Text recognition from the camera and photo library, built on the Vision framework with CocoaPods for dependency management.',
        tags: ['Vision', 'OCR'],
        href: 'https://github.com/chiraggujarati/OCRDemo',
      },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'The things clients usually want settled before we start.',
    items: [
      {
        question: 'Should I build native iOS or React Native?',
        answer:
          'It depends on what the app actually does. If it leans on the device - Bluetooth, HealthKit, ScreenTime, background work, heavy animation - native Swift will save you pain later. If it is mostly screens, forms and API calls and you want iOS and Android from one codebase, React Native gets you there for less money. I build both, so I have no reason to push you toward either. We decide from your feature list, not from fashion.',
      },
      {
        question: 'Can you take over an app somebody else built?',
        answer:
          'Yes, and often that is the job. I have migrated a production app from Objective-C to Swift without disrupting its live users, and picked up half-finished codebases more than once. Send me the repository and a build; I will come back with what is solid, what is risky, and what I would fix first - before you commit to anything.',
      },
      {
        question: 'Do you handle App Store submission, and what if Apple rejects it?',
        answer:
          'Signing, entitlements, submission and review are part of the work, not an extra line item. Some of the apps I have shipped use restricted frameworks like ScreenTime, where Apple asks pointed questions about why you need the permission at all. Rejections do happen to everyone; what matters is reading the actual rejection reason and turning a fix around in days rather than guessing for weeks.',
      },
      {
        question: 'Do I need a backend, and can you build it?',
        answer:
          'Most apps need somewhere to keep data. For many products Firebase or Supabase covers it - authentication, database and storage working in days instead of weeks, and far cheaper than building your own. When something more custom is needed I write it in Python and deploy on AWS. If you already have a backend and an API, I will simply connect to it.',
      },
      {
        question: 'What does an app cost, and how long does it take?',
        answer:
          'Nobody can answer that honestly before seeing the feature list - anyone who quotes you from a one-line brief is guessing. After a 30-minute call I can usually give you a realistic range, and after scoping you get a written estimate that separates version one from everything that can wait. A small, well-defined app is weeks. Anything involving hardware, offline sync or payments is months.',
      },
      {
        question: 'Do you work with AI?',
        answer:
          'Yes, where it earns its place. I have shipped an AI-guided wellness app built in SwiftUI, and I am currently building agent workflows into mobile products. I will also tell you when AI is the wrong tool - plenty of problems that get pitched as AI are solved better and more cheaply by a clear rule and a good interface.',
      },
      {
        question: 'What happens after launch?',
        answer:
          'Apps do not stay finished. iOS gets a major release every September, screen sizes change, and SDKs get deprecated underneath you. I stay on afterwards for crash reports, small fixes and the next version. Several apps in my portfolio I have worked on for years rather than months.',
      },
      {
        question: 'Who owns the code?',
        answer:
          'You do. On delivery the repository, the assets and the App Store listing are yours, under your own developer account. If you later bring in another developer, everything they need to continue is already in your hands.',
      },
    ],
  },
  testimonials: {
    title: 'What clients say',
    subtitle: 'Verified reviews from client after work delivered.',
    pendingLabel: 'Awaiting reply',
    verifiedLabel: 'Verified',
    sourceLabel: 'Upwork',
    appStoreLabel: 'Download on the App Store',
    ctaLabel: 'See my Upwork profile',
    ctaHref: 'https://www.upwork.com/freelancers/~017b8533e11d1e6002?mp_source=share',
    // The featured video review. `uploadDate` and `durationISO` are not copy -
    // they feed the VideoObject JSON-LD in pages/+Head.jsx, which is what makes
    // the video eligible for a video rich result in search.
    video: {
      label: 'Video review',
      heading: 'Hear it from a client',
      body: 'Ninety seconds, unscripted: what it was like to build and ship the app together.',
      name: 'Atiksh B.',
      role: 'Lookupp - iOS app',
      date: 'August 2026',
      videoId: 'rshJIeOqTes',
      videoTitle: 'Client review of Chirag Gujarati, iOS developer',
      playLabel: 'Play the video review',
      duration: '1:34',
      durationISO: 'PT1M34S',
      uploadDate: '2026-08-15',
      poster: '/testimonial-video-poster.webp',
      posterWidth: 406,
      posterHeight: 720,
      watchLabel: 'Watch on YouTube',
      watchHref: 'https://www.youtube.com/watch?v=rshJIeOqTes',
    },
    items: [
      {
        quote:
          "Highly Skilled iOS Developer! I had the pleasure of working with Chirag G on an iOS app project, and I couldn't be more satisfied with the results. From the beginning, he showcased exceptional expertise in Swift and iOS development, ensuring a smooth and efficient workflow. Chirag is not only technically skilled but also highly professional and proactive. He communicates clearly, meets deadlines, and goes the extra mile to improve the project with his valuable insights. His problem-solving skills and attention to detail truly set him apart. If you're looking for a top-notch iOS developer, I highly recommend Chirag G. I would love to collaborate with him again in the future!",
        name: 'Stephen C.',
        role: 'iOS / Android Engineer',
        date: 'February 2025',
        rating: 5,
        verified: true,
      },
      {
        quote:
          'Chirag is the very best. We have worked together for several years and will be starting a new project this week.',
        name: 'Josh',
        role: 'Silver Stream',
        appStoreApp: 'Silver Stream',
        appStoreHref: 'https://apps.apple.com/us/app/silver-stream/id1451791823',
        project: 'Interface redesign & performance work',
        rating: 5,
        verified: true,
      },
      {
        quote:
          "Chirag has been fantastic to work with! He's extremely responsive, communicates clearly, works incredibly fast, and consistently delivers high-quality work at a very reasonable price. We've worked with him extensively on a major overhaul of our app's backend logic, numerous new features, UI refinements, bug fixes, and much more. What really sets Chirag apart is how much he goes above and beyond. He genuinely cares about the product, proactively identifies things we can improve, suggests new features, and even shares ideas for how we can grow and scale the app. He's extremely flexible, dependable, and always willing to help. On top of all that, he's just a genuinely great guy and a pleasure to work with. I couldn't recommend Chirag more highly!",
        name: 'Atiksh B.',
        role: 'Lookupp',
        appStoreApp: 'Lookupp',
        appStoreHref: 'https://apps.apple.com/us/app/lookupp/id1666548055',
        project: 'Backend overhaul, new features & UI refinements',
        date: 'August 2026',
        rating: 5,
        verified: true,
      },
    ],
  },
  articles: {
    title: 'Writing',
    subtitle: 'Notes from day-to-day iOS work - the settings, pipelines and skills that actually move a project along.',
    comingSoon: 'Coming soon',
    readLabel: 'Read',
    items: [
      {
        title: 'Essential Xcode Settings You Should Enable Immediately',
        excerpt:
          'The hidden Xcode preferences that quietly pay for themselves - a sound when a build starts, continuing to build after errors, and auto-showing the debug area.',
        date: 'March 2025',
        source: 'medium',
        sourceLabel: 'Medium',
        href: 'https://medium.com/@chiraggj6353/essential-xcode-settings-you-should-enable-immediately-9e27d6ca20ee',
      },
      {
        title: 'CI/CD for iOS Development',
        excerpt:
          'What I found after putting Xcode Cloud to work on a real pipeline: far less manual release work, and noticeably faster shipping.',
        date: 'April 2025',
        source: 'linkedin',
        sourceLabel: 'LinkedIn',
        href: 'https://www.linkedin.com/posts/chirag-gujarati-5520751ab_cicd-ios-activity-7316728094961164288-NveF',
      },
      {
        title: 'iOS Development Roadmap 2025',
        excerpt:
          'The skills worth owning this year, start to finish - Swift 6, SwiftUI and UIKit, MVVM, Combine and async/await, REST and GraphQL, and cloud integration.',
        date: 'March 2025',
        source: 'medium',
        sourceLabel: 'Medium',
        href: 'https://medium.com/@chiraggj6353/ios-development-roadmap-2025-284ab12369f5',
      },
    ],
  },
  contact: {
    title: "Let's discuss your project",
    paragraphs: [
      "Have a project, an idea, or just a need you can't quite put into words yet? Let's talk.",
      "The easiest way is to schedule a 30-minute first call. We clarify your need, I tell you honestly whether I'm the right person, and we see where it leads - no commitment.",
    ],
    primary: { label: 'Schedule a discovery call (30 min)', href: 'https://cal.com/chirag-gujarati-5sthcq/30min' },
    secondary: { label: 'Email me instead', href: 'mailto:chiraggj6353@gmail.com' },
    socials: [
      { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/chirag-gujarati-5520751ab' },
      { icon: 'github', label: 'GitHub', href: 'https://github.com/chiraggujarati' },
      {
        icon: 'upwork',
        label: 'Upwork',
        href: 'https://www.upwork.com/freelancers/~017b8533e11d1e6002?mp_source=share',
      },
      { icon: 'x', label: 'X', href: 'https://x.com/ChiragGujarati4' },
      {
        icon: 'stackoverflow',
        label: 'Stack Overflow',
        href: 'https://stackoverflow.com/users/14504695/chirag-gujarati',
      },
    ],
  },
  nav: {
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    testimonials: 'Testimonials',
    faq: 'FAQ',
    articles: 'Articles',
    contact: 'Contact',
  },
  footer: {
    text: 'Mobile App Developer',
  },
};
