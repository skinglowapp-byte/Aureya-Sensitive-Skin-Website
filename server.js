const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Landing page route
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aureya - Sensitive Skin | AI-Powered Skincare for Sensitive, Eczema & Barrier-Damaged Skin</title>
  <meta name="description" content="Aureya helps you calm, heal, and protect sensitive skin with AI-powered analysis, personalized routines, and fragrance-free product recommendations.">
  <meta name="keywords" content="sensitive skin, eczema, rosacea, skin barrier, skincare app, AI skincare, fragrance-free, dermatologist-tested">

  <!-- Open Graph -->
  <meta property="og:title" content="Aureya - Sensitive Skin">
  <meta property="og:description" content="AI-Powered Skincare for Sensitive, Eczema & Barrier-Damaged Skin">
  <meta property="og:type" content="website">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/assets/favicon.png">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --primary: #7FB3D5;
      --secondary: #82E0AA;
      --accent: #D7BDE2;
      --gradient-start: #F5F9FC;
      --gradient-end: #E8F6F3;
      --text-primary: #2C3E50;
      --text-secondary: #7F8C8D;
      --white: #FFFFFF;
      --card-bg: rgba(255, 255, 255, 0.9);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
      color: var(--text-primary);
      min-height: 100vh;
      line-height: 1.6;
    }

    /* Navigation */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      padding: 1rem 2rem;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      z-index: 1000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
    }

    .logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .logo span {
      color: var(--primary);
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--text-secondary);
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-links a:hover {
      color: var(--primary);
    }

    .cta-button {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(127, 179, 213, 0.4);
    }

    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8rem 2rem 4rem;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -20%;
      width: 70%;
      height: 140%;
      background: radial-gradient(circle, rgba(127, 179, 213, 0.15) 0%, transparent 70%);
      z-index: 0;
    }

    .hero::after {
      content: '';
      position: absolute;
      bottom: -30%;
      left: -10%;
      width: 50%;
      height: 80%;
      background: radial-gradient(circle, rgba(130, 224, 170, 0.1) 0%, transparent 70%);
      z-index: 0;
    }

    .hero-content {
      max-width: 1200px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-text h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }

    .hero-text h1 span {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-text p {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: 2rem;
      max-width: 500px;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .app-store-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      background: var(--text-primary);
      color: white;
      padding: 0.875rem 1.5rem;
      border-radius: 12px;
      text-decoration: none;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .app-store-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(44, 62, 80, 0.3);
    }

    .app-store-btn svg {
      width: 28px;
      height: 28px;
    }

    .app-store-btn .text {
      text-align: left;
    }

    .app-store-btn .text small {
      font-size: 0.7rem;
      opacity: 0.8;
      display: block;
    }

    .app-store-btn .text strong {
      font-size: 1.1rem;
    }

    .hero-image {
      position: relative;
      display: flex;
      justify-content: center;
    }

    .phone-mockup {
      width: 300px;
      height: 600px;
      background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
      border-radius: 40px;
      padding: 12px;
      box-shadow: 0 50px 100px rgba(0, 0, 0, 0.15), 0 20px 40px rgba(0, 0, 0, 0.1);
      position: relative;
    }

    .phone-screen {
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, #1e2a3a 0%, #2d3e50 100%);
      border-radius: 30px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      text-align: center;
      color: white;
    }

    .phone-screen .score {
      font-size: 4rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.5rem;
    }

    .phone-screen .score-label {
      font-size: 0.9rem;
      opacity: 0.7;
      margin-bottom: 2rem;
    }

    .phone-screen .metrics {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      width: 100%;
    }

    .phone-screen .metric {
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: 12px;
    }

    .phone-screen .metric-value {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--secondary);
    }

    .phone-screen .metric-label {
      font-size: 0.75rem;
      opacity: 0.7;
    }

    /* Features Section */
    .features {
      padding: 6rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-header h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .section-header p {
      color: var(--text-secondary);
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: var(--card-bg);
      padding: 2rem;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    }

    .feature-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }

    .feature-card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }

    .feature-card p {
      color: var(--text-secondary);
      font-size: 0.95rem;
    }

    /* How It Works */
    .how-it-works {
      padding: 6rem 2rem;
      background: linear-gradient(180deg, transparent 0%, rgba(127, 179, 213, 0.05) 50%, transparent 100%);
    }

    .steps {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .step {
      display: flex;
      align-items: center;
      gap: 3rem;
    }

    .step:nth-child(even) {
      flex-direction: row-reverse;
    }

    .step-number {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 700;
      color: white;
      flex-shrink: 0;
    }

    .step-content {
      flex: 1;
    }

    .step-content h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .step-content p {
      color: var(--text-secondary);
    }

    /* Testimonials */
    .testimonials {
      padding: 6rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      background: var(--card-bg);
      padding: 2rem;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    }

    .testimonial-card .stars {
      color: #FFD700;
      margin-bottom: 1rem;
    }

    .testimonial-card blockquote {
      font-style: italic;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      line-height: 1.7;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .author-avatar {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
    }

    .author-info strong {
      display: block;
      font-size: 0.95rem;
    }

    .author-info span {
      font-size: 0.85rem;
      color: var(--text-secondary);
    }

    /* CTA Section */
    .cta-section {
      padding: 6rem 2rem;
      text-align: center;
    }

    .cta-box {
      max-width: 800px;
      margin: 0 auto;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      padding: 4rem;
      border-radius: 30px;
      color: white;
    }

    .cta-box h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .cta-box p {
      font-size: 1.1rem;
      opacity: 0.9;
      margin-bottom: 2rem;
    }

    .cta-box .app-store-btn {
      background: white;
      color: var(--text-primary);
    }

    /* Footer */
    footer {
      padding: 4rem 2rem 2rem;
      background: var(--text-primary);
      color: white;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 3rem;
    }

    .footer-brand .logo {
      color: white;
      margin-bottom: 1rem;
    }

    .footer-brand p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }

    .footer-links h4 {
      margin-bottom: 1.5rem;
      font-size: 1rem;
    }

    .footer-links ul {
      list-style: none;
    }

    .footer-links li {
      margin-bottom: 0.75rem;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: white;
    }

    .footer-bottom {
      max-width: 1200px;
      margin: 3rem auto 0;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.5);
    }

    /* Mobile Responsiveness */
    @media (max-width: 968px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .hero-text p {
        margin: 0 auto 2rem;
      }

      .hero-buttons {
        justify-content: center;
      }

      .hero-image {
        order: -1;
      }

      .phone-mockup {
        width: 250px;
        height: 500px;
      }

      .nav-links {
        display: none;
      }

      .step {
        flex-direction: column !important;
        text-align: center;
      }

      .footer-content {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 600px) {
      .hero-text h1 {
        font-size: 2.5rem;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .cta-box {
        padding: 2rem;
      }

      .cta-box h2 {
        font-size: 1.75rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav>
    <div class="logo">Aureya <span>Sensitive Skin</span></div>
    <ul class="nav-links">
      <li><a href="#features">Features</a></li>
      <li><a href="#how-it-works">How It Works</a></li>
      <li><a href="#testimonials">Reviews</a></li>
    </ul>
    <a href="#download" class="cta-button">Download Free</a>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1>Calm, Heal & Protect Your <span>Sensitive Skin</span></h1>
        <p>AI-powered skincare designed specifically for sensitive, eczema-prone, and barrier-damaged skin. Get personalized routines with fragrance-free, dermatologist-tested products.</p>
        <div class="hero-buttons" id="download">
          <a href="https://apps.apple.com/app/aureya-sensitive-skin" class="app-store-btn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div class="text">
              <small>Download on the</small>
              <strong>App Store</strong>
            </div>
          </a>
        </div>
      </div>
      <div class="hero-image">
        <div class="phone-mockup">
          <div class="phone-screen">
            <div class="score">85</div>
            <div class="score-label">Skin Barrier Health Score</div>
            <div class="metrics">
              <div class="metric">
                <div class="metric-value">92%</div>
                <div class="metric-label">Hydration</div>
              </div>
              <div class="metric">
                <div class="metric-value">78%</div>
                <div class="metric-label">Redness</div>
              </div>
              <div class="metric">
                <div class="metric-value">88%</div>
                <div class="metric-label">Texture</div>
              </div>
              <div class="metric">
                <div class="metric-value">82%</div>
                <div class="metric-label">Clarity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features" id="features">
    <div class="section-header">
      <h2>Built for Sensitive Skin</h2>
      <p>Every feature designed with your delicate skin in mind. No irritants, no guesswork - just results.</p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">AI</div>
        <h3>AI Skin Analysis</h3>
        <p>Advanced AI analyzes your skin for barrier damage, redness, eczema patches, and sensitivity levels with a simple selfie.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">RX</div>
        <h3>Fragrance-Free Products</h3>
        <p>Only recommends products that are fragrance-free, dermatologist-tested, and NEA (National Eczema Association) approved.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">%</div>
        <h3>Personalized Routines</h3>
        <p>Get custom morning and evening routines based on your specific skin type, concerns, and sensitivity level.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">!</div>
        <h3>Ingredient Scanner</h3>
        <p>Scan any product to check for irritants, fragrances, and ingredients known to trigger sensitive skin reactions.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">T</div>
        <h3>Trigger Tracking</h3>
        <p>Log food, weather, and stress to identify what triggers your flare-ups and avoid them proactively.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">P</div>
        <h3>Progress Journal</h3>
        <p>Track your skin's healing journey with photos, notes, and AI-powered progress reports over time.</p>
      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section class="how-it-works" id="how-it-works">
    <div class="section-header">
      <h2>How It Works</h2>
      <p>Start your journey to calmer, healthier skin in just 3 simple steps.</p>
    </div>
    <div class="steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>Take a Selfie</h3>
          <p>Our AI analyzes your skin barrier health, redness levels, and identifies areas that need attention - all from a simple photo.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>Answer a Few Questions</h3>
          <p>Tell us about your skin type, concerns, triggers, and any conditions like eczema or rosacea for a personalized experience.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>Get Your Custom Routine</h3>
          <p>Receive a personalized skincare routine with gentle, barrier-repairing products that won't irritate your sensitive skin.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="testimonials" id="testimonials">
    <div class="section-header">
      <h2>Loved by Sensitive Skin Warriors</h2>
      <p>Join thousands who've found relief for their sensitive skin concerns.</p>
    </div>
    <div class="testimonials-grid">
      <div class="testimonial-card">
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <blockquote>"Finally an app that understands eczema! The product recommendations are always fragrance-free and actually work for my reactive skin."</blockquote>
        <div class="testimonial-author">
          <div class="author-avatar">SM</div>
          <div class="author-info">
            <strong>Sarah M.</strong>
            <span>Eczema Warrior</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <blockquote>"The ingredient scanner has saved me from so many bad purchases. I can finally shop confidently knowing products won't trigger my rosacea."</blockquote>
        <div class="testimonial-author">
          <div class="author-avatar">JK</div>
          <div class="author-info">
            <strong>Jennifer K.</strong>
            <span>Rosacea Management</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <blockquote>"My skin barrier was completely damaged. The AI analysis helped me understand exactly what was wrong and the routine recommendations healed it in weeks!"</blockquote>
        <div class="testimonial-author">
          <div class="author-avatar">AL</div>
          <div class="author-info">
            <strong>Amanda L.</strong>
            <span>Barrier Repair Journey</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <div class="cta-box">
      <h2>Start Your Sensitive Skin Journey Today</h2>
      <p>Download free and discover what products actually work for your unique skin.</p>
      <a href="https://apps.apple.com/app/aureya-sensitive-skin" class="app-store-btn">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div class="text">
          <small>Download on the</small>
          <strong>App Store</strong>
        </div>
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="footer-content">
      <div class="footer-brand">
        <div class="logo">Aureya <span>Sensitive Skin</span></div>
        <p>AI-powered skincare designed for sensitive, eczema-prone, and barrier-damaged skin. Calm, heal, and protect with personalized care.</p>
      </div>
      <div class="footer-links">
        <h4>Product</h4>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#download">Download</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Legal</h4>
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Aureya. All rights reserved.</p>
      <p>Made with care for sensitive skin</p>
    </div>
  </footer>
</body>
</html>
  `);
});

// Privacy Policy
app.get('/privacy', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Privacy Policy - Aureya Sensitive Skin</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; line-height: 1.8; color: #2C3E50; }
    h1 { color: #7FB3D5; }
    h2 { color: #2C3E50; margin-top: 2rem; }
    a { color: #7FB3D5; }
  </style>
</head>
<body>
  <h1>Privacy Policy</h1>
  <p>Last updated: January 2025</p>

  <h2>Information We Collect</h2>
  <p>Aureya - Sensitive Skin collects information you provide directly, including your skin profile, photos for analysis, and product preferences. We use this information solely to provide personalized skincare recommendations.</p>

  <h2>How We Use Your Information</h2>
  <p>Your data is used to power AI skin analysis, generate personalized routines, and recommend suitable products. We never sell your personal information to third parties.</p>

  <h2>Data Security</h2>
  <p>We use industry-standard encryption and security measures to protect your data. Your photos are processed securely and you can delete your data at any time.</p>

  <h2>Contact Us</h2>
  <p>For privacy inquiries, contact us at privacy@aureya.com</p>

  <p><a href="/">Back to Home</a></p>
</body>
</html>
  `);
});

// Terms of Service
app.get('/terms', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Terms of Service - Aureya Sensitive Skin</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; line-height: 1.8; color: #2C3E50; }
    h1 { color: #7FB3D5; }
    h2 { color: #2C3E50; margin-top: 2rem; }
    a { color: #7FB3D5; }
  </style>
</head>
<body>
  <h1>Terms of Service</h1>
  <p>Last updated: January 2025</p>

  <h2>Acceptance of Terms</h2>
  <p>By using Aureya - Sensitive Skin, you agree to these terms. Our app provides skincare guidance and product recommendations, but is not a substitute for professional medical advice.</p>

  <h2>Medical Disclaimer</h2>
  <p>Aureya provides general skincare information and recommendations. Always consult a dermatologist or healthcare provider for medical conditions including severe eczema, rosacea, or other skin disorders.</p>

  <h2>User Responsibilities</h2>
  <p>You are responsible for providing accurate information about your skin and following product instructions. Always patch test new products before full application.</p>

  <h2>Subscription Terms</h2>
  <p>Premium features are available via subscription. You may cancel at any time through your App Store account settings.</p>

  <p><a href="/">Back to Home</a></p>
</body>
</html>
  `);
});

// Support page
app.get('/support', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Support - Aureya Sensitive Skin</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; line-height: 1.8; color: #2C3E50; }
    h1 { color: #7FB3D5; }
    h2 { color: #2C3E50; margin-top: 2rem; }
    a { color: #7FB3D5; }
    .contact-box { background: #F5F9FC; padding: 2rem; border-radius: 12px; margin-top: 2rem; }
  </style>
</head>
<body>
  <h1>Support</h1>

  <h2>Frequently Asked Questions</h2>

  <h3>How does the AI skin analysis work?</h3>
  <p>Our AI analyzes your selfie to assess skin barrier health, hydration levels, redness, and texture. It uses machine learning trained specifically on sensitive skin conditions.</p>

  <h3>Are all recommended products fragrance-free?</h3>
  <p>Yes! We only recommend products that are fragrance-free and suitable for sensitive skin. Many are also NEA (National Eczema Association) approved.</p>

  <h3>How do I cancel my subscription?</h3>
  <p>Go to your iPhone Settings > Apple ID > Subscriptions > Aureya and select Cancel Subscription.</p>

  <div class="contact-box">
    <h2>Contact Us</h2>
    <p>Email: support@aureya.com</p>
    <p>We typically respond within 24 hours.</p>
  </div>

  <p><a href="/">Back to Home</a></p>
</body>
</html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`
  ==========================================
  Aureya - Sensitive Skin Landing Page
  ==========================================

  Server running at: http://localhost:${PORT}

  Pages:
  - Home:     http://localhost:${PORT}/
  - Privacy:  http://localhost:${PORT}/privacy
  - Terms:    http://localhost:${PORT}/terms
  - Support:  http://localhost:${PORT}/support

  Press Ctrl+C to stop
  ==========================================
  `);
});
