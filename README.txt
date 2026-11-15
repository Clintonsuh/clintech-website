
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#f4f0e8">
  <meta name="description" content="ClinTech delivers intelligent digital solutions, website development, software, AI and technology training.">
  <title>ClinTech | Intelligent Digital Solutions</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<header class="header">
  <a href="#home" class="logo">Clin<span>Tech</span><small>INTELLIGENT SOLUTIONS</small></a>
  <nav id="nav">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#pricing">Pricing</a>
    <a href="#contact">Contact</a>
  </nav>
  <div class="header-actions">
    <button id="themeToggle" class="theme-btn" aria-label="Toggle theme">☾</button>
    <a class="nav-cta" href="#contact">Let's Talk ↗</a>
    <button id="menuToggle" class="menu-btn" aria-label="Open menu">☰</button>
  </div>
</header>

<main>
<section class="hero section" id="home">
  <div class="hero-copy reveal">
    <span class="eyebrow"><i></i> TECHNOLOGY WITH PURPOSE</span>
    <h1>Building a smarter <span>digital future.</span></h1>
    <p>We transform ideas into intelligent digital experiences through technology, innovation and practical solutions.</p>
    <div class="hero-buttons">
      <a href="#services" class="btn primary">Explore Our Services ↗</a>
      <a href="#portfolio" class="btn secondary">View Our Work</a>
    </div>
    <div class="hero-note">
      <span class="online-dot"></span>
      Innovation. Technology. Possibility.
    </div>
  </div>

  <div class="hero-visual reveal">
    <div class="hero-orbit orbit-one"></div>
    <div class="hero-orbit orbit-two"></div>
    <div class="hero-image">
      <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1100&auto=format&fit=crop" alt="Modern professional technology workspace">
    </div>
    <div class="floating-card float-top">
      <span>✦</span><div><strong>Smart solutions</strong><small>Designed for progress</small></div>
    </div>
    <div class="floating-card float-bottom">
      <span>↗</span><div><strong>Digital growth</strong><small>Technology that works</small></div>
    </div>
  </div>
</section>

<section class="stats section reveal" id="about">
  <div><strong class="counter" data-target="3">0</strong><span>Core service areas</span></div>
  <div><strong class="counter" data-target="100">0</strong><span>Percent commitment</span></div>
  <div><strong class="counter" data-target="24">0</strong><span>Hour digital availability</span></div>
  <div><strong>∞</strong><span>Possibilities</span></div>
</section>

<section class="section about-section">
  <div class="section-heading reveal">
    <span class="eyebrow">WHO WE ARE</span>
    <h2>Technology should make life <span>simpler.</span></h2>
  </div>
  <div class="about-grid">
    <div class="about-image reveal">
      <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&auto=format&fit=crop" alt="Team collaborating on technology">
    </div>
    <div class="about-copy reveal">
      <h3>Ideas deserve intelligent execution.</h3>
      <p>ClinTech is a technology initiative focused on helping individuals, businesses and institutions benefit from practical digital solutions.</p>
      <p>From websites and software to AI-powered tools and digital education, our goal is to make technology accessible, useful and impactful.</p>
      <a href="#contact" class="text-link">Discover what we can build together ↗</a>
    </div>
  </div>
</section>

<section class="section services-section" id="services">
  <div class="section-heading center reveal">
    <span class="eyebrow">WHAT WE DO</span>
    <h2>Solutions designed for <span>real impact.</span></h2>
    <p>Practical technology services for a changing world.</p>
  </div>
  <div class="service-grid">
    <article class="service-card reveal">
      <span class="service-icon">⌘</span>
      <span class="service-number">01 / DIGITAL</span>
      <h3>Website Development</h3>
      <p>Modern, responsive websites and digital experiences that help brands establish a professional online presence.</p>
      <a href="#contact">Explore service ↗</a>
    </article>
    <article class="service-card featured reveal">
      <span class="service-icon">✳</span>
      <span class="service-number">02 / INTELLIGENCE</span>
      <h3>AI & Software Solutions</h3>
      <p>Intelligent applications, automation and practical software designed to solve everyday problems.</p>
      <a href="#contact">Explore service ↗</a>
    </article>
    <article class="service-card reveal">
      <span class="service-icon">◎</span>
      <span class="service-number">03 / EDUCATION</span>
      <h3>Technology Training</h3>
      <p>Practical ICT, computer, digital literacy and productivity training for learners and professionals.</p>
      <a href="#contact">Explore service ↗</a>
    </article>
  </div>
</section>

<section class="section portfolio-section" id="portfolio">
  <div class="section-heading reveal">
    <span class="eyebrow">SELECTED WORK</span>
    <h2>Ideas brought <span>to life.</span></h2>
    <p>Explore our projects and digital experiments.</p>
  </div>
  <div class="portfolio-controls reveal">
    <input id="projectSearch" type="search" placeholder="Search projects...">
    <div class="filters">
      <button class="filter active" data-filter="all">All</button>
      <button class="filter" data-filter="web">Websites</button>
      <button class="filter" data-filter="software">Software</button>
      <button class="filter" data-filter="ai">AI</button>
    </div>
  </div>
  <div class="portfolio-grid" id="portfolioGrid">
    <article class="project reveal" data-category="ai" data-name="ClinTech AI Tutor">
      <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop" alt="AI technology">
      <div><span>AI / EDUCATION</span><h3>ClinTech AI Tutor</h3><p>Offline intelligent learning assistant.</p></div>
    </article>
    <article class="project reveal" data-category="web" data-name="Business Website">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop" alt="Business website analytics">
      <div><span>WEB DEVELOPMENT</span><h3>Business Websites</h3><p>Professional digital business presence.</p></div>
    </article>
    <article class="project reveal" data-category="software" data-name="Business Management">
      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop" alt="Software analytics">
      <div><span>SOFTWARE</span><h3>Business Management</h3><p>Digital productivity and reporting tools.</p></div>
    </article>
  </div>
  <p id="noProjects" class="empty-message" hidden>No matching projects found.</p>
  <div class="carousel-controls">
    <button id="previousProject" aria-label="Previous project">←</button>
    <span id="carouselPosition">01 / 03</span>
    <button id="nextProject" aria-label="Next project">→</button>
  </div>
</section>

<section class="section pricing-section" id="pricing">
  <div class="section-heading center reveal">
    <span class="eyebrow">SIMPLE ESTIMATES</span>
    <h2>Plan your next <span>digital project.</span></h2>
    <p>Choose a service and package to see an illustrative starting estimate.</p>
  </div>
  <div class="pricing-box reveal">
    <div class="pricing-options">
      <label for="serviceSelect">Choose a service</label>
      <select id="serviceSelect">
        <option value="website">Website Development</option>
        <option value="software">Software Solutions</option>
        <option value="training">Technology Training</option>
      </select>
      <label for="packageSelect">Choose a package</label>
      <select id="packageSelect">
        <option value="starter">Starter</option>
        <option value="professional">Professional</option>
        <option value="premium">Premium</option>
      </select>
      <label for="quantity">Quantity / project units</label>
      <input id="quantity" type="number" min="1" max="20" value="1">
    </div>
    <div class="price-result">
      <span>ILLUSTRATIVE ESTIMATE</span>
      <strong id="estimatedPrice">50,000 XAF</strong>
      <p id="priceDescription">A simple professional website.</p>
      <a id="priceWhatsApp" class="btn primary" href="#contact">Request a quotation ↗</a>
      <small>Final prices depend on project requirements and agreed scope.</small>
    </div>
  </div>
</section>

<section class="section chatbot-section">
  <div class="chat-intro reveal">
    <span class="eyebrow">EXPERIENCE INNOVATION</span>
    <h2>Meet the <span>ClinTech Assistant.</span></h2>
    <p>Explore a demonstration of how an intelligent digital assistant can interact with visitors.</p>
  </div>
  <div class="chat-window reveal">
    <div class="chat-header"><span class="online-dot"></span><strong>ClinTech Assistant</strong><small>Demo mode</small></div>
    <div class="chat-messages" id="chatMessages">
      <div class="message bot">Hello! Welcome to ClinTech. How can I help you explore our services?</div>
    </div>
    <div class="chat-input">
      <input id="chatInput" placeholder="Ask about our services..." aria-label="Chat message">
      <button id="sendChat" aria-label="Send message">➤</button>
    </div>
  </div>
</section>

<section class="section playground-section">
  <div class="section-heading reveal">
    <span class="eyebrow">LEARN BY BUILDING</span>
    <h2>A little space to <span>create.</span></h2>
    <p>Experiment with HTML in this mini coding playground.</p>
  </div>
  <div class="playground reveal">
    <div class="code-editor">
      <div class="editor-top">HTML PLAYGROUND <span>LIVE PREVIEW</span></div>
      <textarea id="codeInput" spellcheck="false"><h2>Hello, ClinTech!</h2>
<p>Technology begins with an idea.</p>
<button>Explore the future</button></textarea>
      <button id="runCode" class="btn primary">Run code ↗</button>
    </div>
    <div class="preview">
      <div class="editor-top">PREVIEW</div>
      <iframe id="codePreview" title="HTML code preview" sandbox=""></iframe>
    </div>
  </div>
</section>

<section class="section contact-section" id="contact">
  <div class="contact-card reveal">
    <span class="eyebrow">LET'S CREATE SOMETHING</span>
    <h2>Your next idea starts <span>here.</span></h2>
    <p>Have a project, a question or an opportunity? Let's talk about what technology can do for you.</p>
    <a class="btn primary" id="mainWhatsApp" href="#" target="_blank" rel="noopener">Chat with us on WhatsApp ↗</a>
    <p class="contact-location">ClinTech · Cameroon · Building for the future</p>
  </div>
</section>
</main>

<footer>
  <a href="#home" class="logo">Clin<span>Tech</span></a>
  <p>Intelligent digital solutions. Built with purpose.</p>
  <small>© <span id="year"></span> ClinTech. All rights reserved.</small>
</footer>

<a id="whatsappFloat" class="whatsapp-float" href="#" target="_blank" rel="noopener" aria-label="WhatsApp">✆</a>

<script src="script.js"></script>
</body>
</html>
