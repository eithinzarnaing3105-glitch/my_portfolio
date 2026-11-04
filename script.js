(() => {
  const $ = (s) => document.querySelector(s),
    R = document.documentElement;
  const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;

  const PROJECT_DETAILS = {
    taskieee: {
      title: 'Taskieee Task Manager',
      description:
        'Built with a focus on a clean, intuitive UI and dynamic task workflows with status filtering.',
      progress: [
        'Planned the system architecture with a High-Level Design (HLD) document before development',
        'Built a Laravel REST API backend paired with a Vue.js frontend',
        'Implemented authentication and dynamic task workflows',
        'Designed a clean, user-friendly interface',
        'Added status filtering and billing for effective task handling',
      ],
      images: [
        {
          src: 'images/t1.jpg',
          label: 'Dashboard',
          desc: 'Central hub showing task summaries, progress stats, and upcoming deadlines at a glance.',
        },
        {
          src: 'images/t2.png',
          label: 'Login',
          desc: 'Secure sign-in screen where returning users access their account with email and password.',
        },
        {
          src: 'images/t3.png',
          label: 'Sign Up',
          desc: 'Registration page where new users create an account to start managing their tasks.',
        },
        {
          src: 'images/t4.png',
          label: 'Home',
          desc: 'Landing page giving users a quick overview of the app and easy navigation to key features.',
        },
        {
          src: 'images/t7.png',
          label: 'Tasks Creation',
          desc: 'Creation of tasks with entering the title, description, and choosing the color.',
        },
        {
          src: 'images/t8.png',
          label: 'Tasks',
          desc: 'Task list view with status filtering, priority tags, and quick actions to update or complete tasks.',
        },
        {
          src: 'images/t5.png',
          label: 'Profile',
          desc: 'User profile page for checking account preferences.',
        },
        {
          src: 'images/t6.png',
          label: 'Billing',
          desc: 'Billing and subscription page for managing plans, payment methods, and invoices.',
        },
      ],
    },
    cinegrid: {
      title: 'CineGrid Movie Website',
      description:
        'A modern, responsive movie browsing web application focused on seamless user experience, with clean UI components, a modular frontend structure, and responsive layout styling.',
      progress: [
        'Designed a 5-page user flow: Splash, Login, Register, Home, and Details',
        'Built a fully responsive layout using HTML, CSS, and JavaScript',
        'Implemented search and filter logic (genre, year, rating) using dummy data',
        'Created horizontal carousels for Featured, Top 10, and recommended titles',
        'Designed a Details page with cast info, reviews, and production details',
      ],

      images: [
        {
          src: 'images/c1.png',
          label: 'Splash',
          desc: 'The first screen users see, with the CineGrid logo, a hero headline, and two clear actions: Login and Register.',
        },
        {
          src: 'images/c2.png',
          label: 'Login',
          desc: 'A simple username and password form that always redirects to the Home page.',
        },
        {
          src: 'images/c3.png',
          label: 'Register',
          desc: 'A registration form requesting username, email, password, and confirm password, redirecting to Home once submitted.',
        },
        {
          src: 'images/c4.png',
          label: 'Home',
          desc: 'The central hub with a search bar, genre/year/rating filters, and horizontal carousels like Featured and Top 10 on CineGrid.',
        },
        {
          src: 'images/c5.png',
          label: 'Details',
          desc: 'Full information on a selected title, including poster, trailer background, overview, cast, and audience reviews.',
        },
      ],
    },
    skillgap: {
      title: 'Skill Gap Recommender',
      description:
        "An AI capstone project that helps IT students and fresh graduates identify skills to learn next. The system analyzes skill patterns from LinkedIn job posts and uses Gemini API to explain recommendations based on the user's current skills and target job.",
      progress: [
        'Cleaned and prepared 22,673 IT job posts across 19 job categories using Python and pandas',
        'Compared demand for AI-related skills across different IT roles',
        'Used FP-Growth and association rule mining in RapidMiner to discover 2,005 frequent item sets and 5,278 association rules',
        "Selected relevant rules based on the user's skills and ranked them by confidence and lift",
        'Connected the Gemini API to generate simple learning suggestions using the selected patterns',
        'Built a Streamlit interface with recommendations and an expandable section showing supporting rules',
        'Manually reviewed recommendations across example students with different skills and target jobs',
      ],

      images: [
        {
          src: 'images/s4.png',
          label: 'Data Mining Workflow',
          desc: 'RapidMiner workflow using FP-Growth and Create Association Rules to identify skills that appear together in job posts.',
        },
        {
          src: 'images/s1.png',
          label: 'Recommendation Interface',
          desc: 'Streamlit interface where users enter their current skills and target IT job.',
        },
        {
          src: 'images/s2.png',
          label: 'Skill Recommendations Result',
          desc: "Suggested skills with short explanations based on the user's input and selected job-post patterns.",
        },
        {
          src: 'images/s3.png',
          label: 'Supporting Evidence',
          desc: 'Association rules with confidence and lift values that support the recommendations.',
        },
      ],
    },
    market: {
      title: 'Global Market Web Analysis',
      description:
        'A data analysis project that studies how 44 global assets move together and how that changes in a crisis. It combines Yahoo Finance and FRED data, Python data cleaning, rolling correlation analysis, and a 6-page interactive Power BI dashboard to test popular beliefs, such as whether gold is a safe haven.',
      progress: [
        'Collected daily prices for 44 assets (2000 to 2026) from Yahoo Finance, plus 8 macro indicators from FRED',
        "Cleaned the data and converted prices to returns, including oil's negative price in April 2020",
        'Calculated rolling correlations for every asset pair using 60, 120, and 250-day windows',
        'Found that average correlation rose from 0.064 in calm markets to 0.245 in the COVID crash',
        'Built a safe-haven scorecard: Treasuries rose on about 66% of the worst stock days, gold on about half',
        'Designed a 6-page Power BI dashboard with DAX measures, slicers, a heatmap, and a pair explorer',
      ],

      images: [
        {
          src: 'images/m2.png',
          label: 'Summary',
          desc: 'Market connectedness over time, with the current regime and key findings.',
        },
        {
          src: 'images/m3.png',
          label: 'Market Overview',
          desc: 'Asset growth rebased to 100, with category, asset, and date filters.',
        },
        {
          src: 'images/m4.png',
          label: 'Correlation Heatmap',
          desc: 'A color-coded grid showing which assets move together or opposite for any month.',
        },
        {
          src: 'images/m5.png',
          label: 'Pair Explorer',
          desc: 'How the correlation between any two assets changes over time, with selectable windows.',
        },
        {
          src: 'images/m6.png',
          label: 'Crisis Comparison',
          desc: 'Average correlation in each crisis compared with a calm baseline year.',
        },
        {
          src: 'images/m7.png',
          label: 'Safe-Haven Scorecard',
          desc: 'What held up on the worst stock market days, by hit rate and average return.',
        },
      ],
    },
    glamore: {
      title: 'Glamoré Cosmetics Retail System',
      description:
        'A cosmetics retail database application developed as a final project using Oracle APEX and Oracle SQL. The system connects ten related tables to manage retail operations.',
      progress: [
        'Designed an ER diagram connecting customers, orders, products, payments, delivery services, and stock records',
        'Built Oracle APEX forms, interactive reports, and editable grids for creating, viewing, updating, and deleting records',
        'Created a dashboard with category-sales and order-status charts',
        'Used SQL joins, subqueries, ROLLUP, and reporting views to summarize business information',
        'Applied a consistent beauty-themed interface with clear navigation',
      ],

      images: [
        {
          src: 'images/g1.png',
          label: 'HomePage',
          desc: 'Beauty-themed home page with navigation links to the main retail management features.',
        },
        {
          src: 'images/g2.png',
          label: 'Dashboard',
          desc: 'Category-sales bar chart and order-status donut chart summarizing retail activity.',
        },
        {
          src: 'images/g3.png',
          label: 'Customer Management',
          desc: 'Interactive customer report and form for adding, viewing, updating, and deleting customer details.',
        },
        {
          src: 'images/g4.png',
          label: 'Order Management',
          desc: 'Order grid showing customer and delivery information, with options to update order status and delivery service.',
        },
        {
          src: 'images/g9.png',
          label: 'Delivery Services',
          desc: 'Delivery service information and maintenance page with a general Thailand reference map.',
        },
        {
          src: 'images/g11.png',
          label: 'Stock Transactions',
          desc: 'Stock movement report and entry form for recording incoming and outgoing products with the responsible stock manager.',
        },
        {
          src: 'images/g12.png',
          label: 'Payments',
          desc: 'Payment report and form for recording payments against existing orders.',
        },
      ],
    },
    bizscope: {
  title: 'BizScope Data Exploration App',
  description:
    'BizScope is a application for exploring and analyzing tabular data from business, education, research, and other sources. It uses Pandas for data processing and visualization, with an optional AI assistant for explaining results in plain language.',
  progress: [
    'Built a multi-file CSV and Excel upload system with support for multiple worksheets',
    'Added data inspection with previews, data types, missing values, duplicates, and summary statistics',
    'Developed data cleaning tools for handling missing values, duplicates, text formatting, and column modifications',
    'Created automatic chart suggestions and a custom chart builder using Pandas',
    'Added table joining to combine related datasets using shared columns',
    'Integrated an optional AI assistant for answering questions through supported data calculations',
    'Implemented CSV downloads and Markdown analysis reports, and deployed the app using Streamlit',
  ],
  images: [
    {
      src: 'images/b1.png',
      label: '1. Start screen',
      desc: 'The homepage introduces BizScope and its three-step workflow: upload, prepare, and explore data. Users can upload CSV or Excel files or try the sample dataset.',
    },
    {
      src: 'images/b2.png',
      label: '2. Overview',
      desc: 'Displays key dataset summaries, including total records, columns, missing values, and duplicate rows, with tabs for the main analysis tools.',
    },
    {
      src: 'images/b3.png',
      label: '3. Data profile',
      desc: 'Shows column data types, missing and unique values, and descriptive statistics to help users understand their dataset.',
    },
    {
      src: 'images/b4.png',
      label: '4. Prepare data',
      desc: 'Provides tools to clean data, handle missing values and duplicates, convert data types, and rename or remove columns.',
    },
    {
      src: 'images/b5.png',
      label: '5. Connect tables',
      desc: 'Allows users to combine related datasets using shared columns, with match counts and warnings for repeated keys.',
    },
    {
      src: 'images/b6.png',
      label: '6. Suggested charts',
      desc: 'Recommends suitable visualizations based on dataset fields, with explanations of how the displayed values are calculated.',
    },
    {
      src: 'images/b7.png',
      label: '7. Build a chart',
      desc: 'Lets users create custom bar, pie, line, area, histogram, and scatter charts by selecting fields and calculations.',
    },
    {
      src: 'images/b8.png',
      label: '8. Ask BizScope',
      desc: 'Allows users to ask questions in plain language and receive answers based on supported calculations performed on their data.',
    },
  ],
},
    linguage: {
      title: 'Linguage Online Language Learning System',
      description:
        'A project for System Analysis, Design, and Implementation. Linguage proposes an organized language learning experience through system requirements, use case and ER diagrams, and Figma interface designs for learners and administrators.',
      progress: [
        'Created a use case diagram showing learner and administrator actions',
        'Designed an ER diagram connecting users, languages, courses, lessons, progress, subscriptions, and administrators',
        'Designed learner interfaces for language and level selection, lessons, practice, and progress tracking',
        'Created interface variations for beginners, returning learners, and premium users',
        'Designed popup navigation and profile panels for quick access to account options',
        'Designed administrator interfaces for managing lessons, users, subscriptions, and cancellation requests',
      ],

      images: [
        {
          src: 'images/l2.png',
          label: 'Learner interfaces',
          desc: 'Language and level selection, lessons, practice, progress tracking, profiles, and subscriptions.',
        },
        {
          src: 'images/l3.png',
          label: 'Admin Interfaces',
          desc: 'Dashboard, course content, user accounts, and subscription management.',
        },
      ],
    },

    
    IoT: {
      title: 'Boom Gate & Street Lamp IoT System',
      description:
        'An ESP32-based IoT system built for small-scale enterprises to automate toll gate control, vehicle detection, and street lighting. Remotely monitored and controlled via the Blynk mobile app with real-time status updates and manual override capability.',
      progress: [
        'Designed the system architecture, including feasibility study and hardware/software planning',
        'Wired and integrated an ultrasonic sensor, servo motor, and LEDs with an ESP32',
        'Programmed automatic vehicle detection and gate control logic in Arduino IDE',
        'Built a Blynk dashboard for real-time monitoring, manual override, and street lamp control',
      ],
      images: [
        {
          src: 'images/i3.jpg',
          label: 'Hardware Setup',
          desc: 'The wired prototype connecting the ESP32, ultrasonic sensor, servo motor, and LEDs on a breadboard.',
        },
        {
          src: 'images/i4.png',
          label: 'Circuit Diagram',
          desc: 'The full wiring schematic showing the ESP32 connected to the ultrasonic sensor, push button, traffic light LEDs, streetlamp LEDs, and servo motor.',
        },
        {
          src: 'images/i5.jpg',
          label: 'Blynk Dashboard',
          desc: 'The mobile app interface used to monitor vehicle detection, control the gate remotely, and toggle street lamps.',
        },
      ],
    },
  };

  /* ---------- theme ---------- */
  let th = 'dark';
  try {
    th = localStorage.getItem('theme') || 'dark';
  } catch {}
  R.setAttribute('data-theme', th);
  $('#th').onclick = () => {
    th = R.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    R.setAttribute('data-theme', th);
    try {
      localStorage.setItem('theme', th);
    } catch {}
    cols();
  };

  /* ---------- mobile menu ---------- */
  const nv = $('#nv'),
    hb = $('#hb');
  hb.onclick = () => hb.setAttribute('aria-expanded', nv.classList.toggle('open'));
  nv.querySelectorAll('a.l').forEach(
    (a) =>
      (a.onclick = () => {
        nv.classList.remove('open');
        hb.setAttribute('aria-expanded', 'false');
      }),
  );

  /* ---------- projects ---------- */
  const GH = 'https://github.com/eithinzarnaing3105-glitch/';
  const P = [
    {
      k: 'cinegrid',
      n: 'CineGrid Movie Website',
      l: 'Front-end \u00b7 UI/UX',
      d: 'Front-end prototype of a cinema website, focused on how a streaming platform should look and feel. Final project for ITE 120.',
      t: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Responsive'],
      g: ['#f27a96', '#f9c7a4'],
      im: 'images/cinegrid.jpg',
      r: GH + 'web-development-project',
    },
    {
      k: 'taskieee',
      n: 'Taskieee Task Manager',
      l: 'Full-stack web',
      d: 'Full-stack task management web app that helps users organize, prioritize and track everyday tasks. Capstone for a Vue.js course.',
      t: ['Laravel', 'Vue.js', 'Full Stack', 'REST API', 'UI/UX'],
      g: ['#f9c7a4', '#d4a5ff'],
      im: 'images/t1.jpg',
      r: GH + 'taskieee_project',
    },
    {
      k: 'skillgap',
      n: 'Skill-Gap Recommender',
      l: 'Data \u00b7 AI',
      d: 'Helps IT students and fresh graduates choose what to learn next by combining skill patterns from real job posts with AI-generated explanations.',
      t: ['Python', 'pandas', 'RapidMiner', 'FP-Growth', 'Gemini API', 'Streamlit'],
      g: ['#d4a5ff', '#f27a96'],
      im: 'images/s1.png',
      r: GH + 'skill-gap-recommender',
      x: ['Website', 'https://skill-gap-recommender.streamlit.app/'],
    },
    {
      k: 'glamore',
      n: 'Glamor\u00e9 Cosmetics Retail System',
      l: 'Database app',
      d: 'Cosmetics retail database application for products, customers, orders, payments and stock, built with Oracle APEX forms, reports and dashboards.',
      t: ['Oracle APEX', 'SQL', 'Database Design', 'ER Diagram'],
      g: ['#f27a96', '#d4a5ff'],
      im: 'images/g1.png',
      r: GH + 'glamore-cosmetics-retail-application',
    },
    {
      k: 'bizscope',
      n: 'BizScope Data Exploration App',
      l: 'Data \u00b7 To Descisions',
      d: 'Interactive app for exploring tabular data: prepare and join tables, build charts, and ask questions in plain language with an optional AI assistant.',
      t: ['Python', 'Pandas', 'Streamlit', 'AI API', 'Data Visualization'],
      g: ['#d4a5ff', '#f9c7a4'],
      im: 'images/b0.png',
      r: GH + 'biz_scope',
      x: ['Website', 'https://bizscope114.streamlit.app/'],
    },
    {
      k: 'market',
      n: 'Global Market Web Analysis',
      l: 'Data analysis',
      d: 'How do 44 global assets move together, and does that change in a crisis? 26 years of data, rolling correlations and a 6-page Power BI dashboard.',
      t: ['Python', 'Pandas', 'Power BI', 'DAX', 'Yahoo Finance', 'FRED API'],
      g: ['#f27a96', '#d4a5ff'],
      im: 'images/m1.png',
      r: GH + 'global_market_web_analysis',
    },
     {
      k: 'linguage',
      n: 'Linguage Language Learning System',
      l: 'UI/UX \u00b7 System analysis',
      d: 'Online language learning system that brings courses, lessons, practice, progress tracking and subscriptions together, with learner and admin interfaces.',
      t: ['Figma', 'UI/UX Design', 'System Analysis', 'ER & Use Case'],
      g: ['#f9c7a4', '#f27a96'],
      im: 'images/l1.png',
      r: GH + 'linguage-learning-system-design',
      x: [
        'Figma',
        'https://www.figma.com/design/dRLC0BOCLYjy1IvLS35wuo/Linguage?t=Xg8b6ZlLAZkYhSf4-1',
      ],
    },
  
    
    {
      k: 'IoT',
      n: 'Boom Gate & Street Lamp IoT',
      l: 'IoT \u00b7 Embedded',
      d: 'ESP32 system that automates toll gate control, vehicle detection and street lighting, controlled remotely through the Blynk app.',
      t: ['ESP32', 'IoT', 'Arduino', 'Blynk'],
      g: ['#d4a5ff', '#f9c7a4'],
      im: 'images/i3.jpg',
      r: GH + 'boom-gate-and-street-lamp-IoT',
    },
  ];
  const tg = (a) => `<div class="tg">${a.map((x) => `<span>${x}</span>`).join('')}</div>`;
  $('#stack').innerHTML = P.map(
    (p, i) =>
      `<article class="pcd${i > 5 ? ' xp2' : ''}"${i > 5 ? ' hidden' : ''}>
  <div class="pim" style="background:linear-gradient(135deg,${p.g[0]},${p.g[1]})">
    <b>0${i + 1}</b>${p.im ? `<img src="${p.im}" alt="${p.n}" loading="lazy" onerror="this.remove()">` : ''}
  </div>
  <div class="pb">
    <span class="lb">0${i + 1} \u00b7 ${p.l}</span>
    <h3>${p.n}</h3>
    <p>${p.d}</p>
    ${tg(p.t)}
    <div class="ln">
      <a class="bt s btn-details" href="#" data-project="${p.k}"><i class="fa-solid fa-circle-info"></i> More details</a>
      <a class="bt s" href="${p.r}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Repo \u2197</a>
      ${p.x ? `<a class="bt s" href="${p.x[1]}" target="_blank" rel="noopener"><i class="${p.x[0].toLowerCase().includes('figma') ? 'fa-brands fa-figma' : 'fa-solid fa-globe'}"></i> ${p.x[0]} \u2197</a>` : ''}
    </div>
  </div>
</article>`,
  ).join('');
  const vb = $('#vmb');
  vb.onclick = () => {
    const ex = vb.getAttribute('aria-expanded') !== 'true';
    document.querySelectorAll('.xp2').forEach((c) => (c.hidden = !ex));
    vb.textContent = ex ? 'Show Less' : 'View More Projects';
    vb.setAttribute('aria-expanded', ex);
    if (!ex) vb.scrollIntoView({ block: 'nearest' });
  };

  /* ---------- project modal ---------- */
  const mo = $('#projectModalOverlay'),
    lo = $('#lightboxOverlay'),
    li = $('#lightboxImg');
  function openModal(key) {
    const d = PROJECT_DETAILS[key];
    if (!d) return;
    $('#projectModalTitle').textContent = d.title;
    $('#projectModalDesc').textContent = d.description;
    const pl = $('#projectModalProgress');
    pl.innerHTML = '';
    if (d.progress && d.progress.length) {
      pl.style.display = '';
      d.progress.forEach((s) => {
        const e = document.createElement('li');
        e.textContent = s;
        pl.appendChild(e);
      });
    } else pl.style.display = 'none';
    const g = $('#projectModalGallery');
    g.innerHTML = '';
    d.images.forEach((im) => {
      const f = document.createElement('figure');
      f.className = 'project-modal-item';
      const i = document.createElement('img');
      i.src = im.src;
      i.alt = d.title + ' - ' + im.label;
      i.loading = 'lazy';
      i.onerror = function () {
        this.src = 'https://via.placeholder.com/400x260?text=' + encodeURIComponent(im.label);
      };
      i.onclick = () => {
        li.src = i.src;
        lo.classList.add('active');
      };
      const c = document.createElement('figcaption');
      c.innerHTML =
        '<span class="project-modal-item-label"></span><span class="project-modal-item-desc"></span>';
      c.children[0].textContent = im.label;
      c.children[1].textContent = im.desc || '';
      f.append(i, c);
      g.appendChild(f);
    });
    mo.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    mo.classList.remove('active');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('.btn-details').forEach((b) =>
    b.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(b.dataset.project);
    }),
  );
  $('#projectModalClose').onclick = closeModal;
  mo.addEventListener('click', (e) => {
    if (e.target === mo) closeModal();
  });
  lo.onclick = () => lo.classList.remove('active');
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      lo.classList.remove('active');
    }
  });

  /* ---------- skills ticker ---------- */
  const S = [
    'PYTHON',
    'POWER BI',
    'SQL',
    'DAX',
    'PANDAS',
    'LARAVEL',
    'VUE.JS',
    'ORACLE APEX',
    'TABLEAU',
    'JAVA',
    'AWS',
    'FIGMA',
    'GIT',
  ];
  const q = S.map((s) => `<span>${s}</span>`).join('');
  $('#tk').innerHTML = q + q;

  /* ---------- cursor glow + card spotlight ---------- */
  const gl = $('#gl');
  addEventListener(
    'pointermove',
    (e) => {
      gl.style.left = e.clientX + 'px';
      gl.style.top = e.clientY + 'px';
      const s = e.target.closest && e.target.closest('.sp');
      if (s) {
        const r = s.getBoundingClientRect();
        s.style.setProperty('--mx', e.clientX - r.left + 'px');
        s.style.setProperty('--my', e.clientY - r.top + 'px');
      }
    },
    { passive: true },
  );

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((x) => {
        if (x.isIntersecting) {
          x.target.classList.add('on');
          io.unobserve(x.target);
        }
      }),
    { threshold: 0.06 },
  );
  document.querySelectorAll('.rv').forEach((e) => io.observe(e));

  /* ---------- experience + education timeline (line and bullet follow scroll) ---------- */
  const tl = $('#tl'),
    eg = $('.eg');
  eg.insertAdjacentHTML('afterbegin', '<i class="hd"></i>');
  function tp() {
    const hd = $('.hd'),
      e1 = $('.ed>.sp:nth-child(1)'),
      e2 = $('.ed>.sp:nth-child(2)');
    const t = tl.getBoundingClientRect(),
      a = e1.getBoundingClientRect(),
      b = e2.getBoundingClientRect(),
      eb = eg.getBoundingClientRect();
    const y0 = t.top + 6,
      tEnd = t.bottom - 6,
      y1 = b.top + 7,
      y = Math.max(y0, Math.min(y1, innerHeight * 0.65));
    tl.style.setProperty('--p', Math.max(0, Math.min(1, (y - y0) / (tEnd - y0))));
    e1.style.setProperty(
      '--q',
      Math.max(0, Math.min(1, (y - (a.top - 6)) / (b.top + 7 - (a.top - 6)))),
    );
    hd.style.setProperty('--hy', y - eb.top + 'px');
  }
  addEventListener('scroll', tp, { passive: true });
  addEventListener('resize', tp);
  tp();

  /* ---------- hero network ---------- */
  const cv = $('#net'),
    cx = cv.getContext('2d'),
    D = Math.min(devicePixelRatio || 1, 2);
  let W,
    H,
    N = [],
    m = { x: -999, y: -999 },
    cA = '242,122,150',
    cF = '252,240,241',
    on = true;
  function rgb(v) {
    const h = getComputedStyle(R).getPropertyValue(v).trim().replace('#', '');
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)).join(',');
  }
  function cols() {
    cA = rgb('--a');
    cF = rgb('--fg');
  }
  function size() {
    W = cv.clientWidth;
    H = cv.clientHeight;
    cv.width = W * D;
    cv.height = H * D;
    cx.setTransform(D, 0, 0, D, 0, 0);
    N = Array.from({ length: Math.min(110, Math.floor((W * H) / 12500)) }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));
  }
  function tick() {
    cx.clearRect(0, 0, W, H);
    for (const p of N) {
      const dx = m.x - p.x,
        dy = m.y - p.y,
        d = Math.hypot(dx, dy);
      if (d < 280 && d > 1) {
        p.vx += (dx / d) * 0.014;
        p.vy += (dy / d) * 0.014;
      }
      p.vx *= 0.993;
      p.vy *= 0.993;
      const s = Math.hypot(p.vx, p.vy);
      if (s > 1.1) {
        p.vx = (p.vx / s) * 1.1;
        p.vy = (p.vy / s) * 1.1;
      }
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    }
    for (let i = 0; i < N.length; i++) {
      const a = N[i];
      for (let j = i + 1; j < N.length; j++) {
        const b = N[j],
          d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 145) {
          const near = Math.hypot((a.x + b.x) / 2 - m.x, (a.y + b.y) / 2 - m.y) < 240;
          cx.strokeStyle = `rgba(${near ? cA : cF},${(1 - d / 145) * (near ? 0.85 : 0.22)})`;
          cx.lineWidth = near ? 1.3 : 1;
          cx.beginPath();
          cx.moveTo(a.x, a.y);
          cx.lineTo(b.x, b.y);
          cx.stroke();
        }
      }
      cx.fillStyle = `rgba(${Math.hypot(a.x - m.x, a.y - m.y) < 240 ? cA : cF},.8)`;
      cx.beginPath();
      cx.arc(a.x, a.y, 1.8, 0, 7);
      cx.fill();
    }
    if (!rm && on) requestAnimationFrame(tick);
  }
  cols();
  size();
  tick();
  addEventListener('resize', () => {
    size();
    if (rm) tick();
  });
  const hr = $('.hero');
  hr.addEventListener('pointermove', (e) => {
    const r = cv.getBoundingClientRect();
    m.x = e.clientX - r.left;
    m.y = e.clientY - r.top;
  });
  hr.addEventListener('pointerleave', () => {
    m.x = m.y = -999;
  });
  new IntersectionObserver((e) => {
    const v = e[0].isIntersecting;
    if (v && !on && !rm) {
      on = true;
      tick();
    }
    on = v;
  }).observe(hr);
})();