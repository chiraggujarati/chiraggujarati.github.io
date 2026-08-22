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
          initial: 'S',
          color: '#5C6BC0',
          company: 'Syncly',
          role: 'Senior iOS App Developer',
          period: 'Feb 2024 - Present',
          current: true,
          text: 'Lookupp, Silver Stream, DamageID, Fluid Focus, TherapyAI and DreamTime - ScreenTime API work, an Objective-C to Swift migration, and SwiftUI interface rebuilds.',
        },
        {
          initial: 'S',
          color: '#14B8A6',
          company: 'SculptSoft',
          role: 'iOS Developer',
          period: 'Nov 2022 - Jan 2024',
          text: 'Skandika, a German fitness platform pairing over Bluetooth with gym equipment in six languages, and Virtual Site Inspections, an offline-first property inspection tool.',
        },
        {
          initial: 'C',
          color: '#F97316',
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
      { value: 'iOS + RN', label: 'Native and cross-platform' },
    ],
    toolbox: {
      title: 'Toolbox',
      primary: [
        { icon: 'ios', label: 'iOS' },
        { icon: 'reactnative', label: 'React Native' },
        { icon: 'firebase', label: 'Firebase' },
        { icon: 'supabase', label: 'Supabase' },
        { icon: 'python', label: 'Python' },
        { icon: 'aws', label: 'AWS' },
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
        icon: 'lock',
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
        icon: 'film',
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
    subtitle: 'Verified reviews from client work delivered through Upwork.',
    pendingLabel: 'Awaiting reply',
    verifiedLabel: 'Verified',
    sourceLabel: 'Upwork',
    ctaLabel: 'See my Upwork profile',
    ctaHref: 'https://www.upwork.com/freelancers/~017b8533e11d1e6002?mp_source=share',
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
          'Chirag is a pleasure to work with. He has worked on several iOS projects for me and has always gone above and beyond to ensure a successful project.',
        name: 'Health app client',
        role: 'Endorsed by client',
        project: 'iOS Developer for a Health App',
        date: 'Dec 2022 - Oct 2023',
        rating: 5,
      },
      {
        pending: true,
        name: 'Atiksh Bhan',
        project: 'Testimonial request sent',
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
    faq: 'FAQ',
    articles: 'Articles',
    contact: 'Contact',
  },
  footer: {
    text: 'Mobile App Developer',
  },
};
