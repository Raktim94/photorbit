const fs = require('fs');
const path = require('path');

const filePath = path.join('f:/code/bmmfinance', 'index.html');
let content = fs.readFileSync(filePath, 'utf-8');

const newCss = `<style>
        .bmm-widget-root *,
        .bmm-widget-root *::before,
        .bmm-widget-root *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* PREMIUM DARK GLASS THEME */
        .bmm-widget-root {
            --bg: #030305;
            --glass: rgba(255, 255, 255, 0.03);
            --glass-hover: rgba(255, 255, 255, 0.08);
            --gborder: rgba(255, 255, 255, 0.08);
            --gborder-hover: rgba(255, 255, 255, 0.2);
            
            --t1: #ffffff;
            --t2: #a1a1aa;
            --t3: #71717a;
            
            /* Apple-like vibrant colors */
            --c1: #4F46E5; /* Indigo */
            --c2: #9333EA; /* Purple */
            --c3: #06B6D4; /* Cyan */
            --c4: #3B82F6; /* Blue */
            --c5: #EC4899; /* Pink */
            
            --font: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            --ease: cubic-bezier(0.22, 1, 0.36, 1);

            font-family: var(--font);
            background-color: transparent !important;
            color: var(--t1) !important;
            line-height: 1.7;
            position: relative;
            width: 100%;
            min-height: 100vh;
            overflow-x: hidden;
            display: block;
            -webkit-font-smoothing: antialiased;
        }

        /* FIXED MESH BG */
        .bmm-fixed-bg {
            position: fixed;
            inset: 0;
            background-color: var(--bg);
            z-index: -1;
            overflow: hidden;
        }
        
        .bmm-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            animation: orbFloat 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0.5;
            mix-blend-mode: screen;
            will-change: transform;
        }
        
        .o1 { width: 50vw; height: 50vw; background: var(--c1); top: -20%; left: -10%; }
        .o2 { width: 45vw; height: 45vw; background: var(--c2); bottom: -10%; right: -10%; animation-delay: -5s; }
        .o3 { width: 60vw; height: 60vw; background: var(--c4); top: 20%; left: 30%; animation-delay: -10s; opacity: 0.3; }
        .o4 { width: 40vw; height: 40vw; background: var(--c5); bottom: 10%; left: 10%; animation-delay: -15s; }

        @keyframes orbFloat {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(8vw, -8vh) scale(1.05); }
            100% { transform: translate(-4vw, 12vh) scale(0.95); }
        }

        /* GLASS UTILITY */
        .glass {
            background: var(--glass);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid var(--gborder);
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            border-left: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            border-radius: 24px;
            transition: all 0.4s var(--ease);
        }

        .glass:hover {
            background: var(--glass-hover);
            border-color: var(--gborder-hover);
        }

        .bmm-widget-root a { text-decoration: none; color: inherit; }
        .bmm-widget-root p, .bmm-widget-root h1, .bmm-widget-root h2, .bmm-widget-root h3, 
        .bmm-widget-root div, .bmm-widget-root span, .bmm-widget-root li { color: inherit; }

        .bmm-widget-root .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 32px;
            position: relative;
            z-index: 1;
        }

        .bmm-widget-root .cursor-glow {
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 60%);
            transform: translate(-50%, -50%);
            mix-blend-mode: screen;
        }

        /* HERO */
        .bmm-widget-root .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 120px 0 80px 0;
        }

        .bmm-widget-root .hero-content {
            display: flex;
            align-items: center;
            gap: 80px;
            width: 100%;
        }

        .bmm-widget-root .hero-visual { position: relative; flex-shrink: 0; }
        .bmm-widget-root .avatar-wrap { width: 360px; height: 360px; position: relative; }

        .hero-info { flex: 1; }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 20px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--t1);
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 24px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .hero-name {
            font-size: clamp(3.5rem, 8vw, 7rem);
            font-weight: 900;
            line-height: 1;
            margin-bottom: 20px;
            letter-spacing: -2px;
        }

        .hero-name .ln { display: block; overflow: hidden; }
        .hero-name .ln span { display: inline-block; transform: translateY(110%); animation: wordUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .hero-name .ln:nth-child(1) span { color: var(--t1); }
        .hero-name .ln:nth-child(2) span {
            animation-delay: 0.1s;
            background: linear-gradient(135deg, var(--c3), var(--c2));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        @keyframes wordUp { to { transform: translateY(0); } }

        .hero-role { font-size: 1.4rem; color: var(--t2); margin-bottom: 16px; font-weight: 300; }
        .hero-role strong { color: var(--t1); font-weight: 600; }
        .hero-desc { font-size: 1.05rem; color: var(--t3); max-width: 540px; margin-bottom: 40px; line-height: 1.8; }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }

        /* BUTTONS */
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 16px 36px;
            border-radius: 60px;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            border: none;
            font-family: var(--font);
            transition: all 0.4s var(--ease);
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            white-space: nowrap;
        }

        .btn-primary {
            background: var(--t1);
            color: #000;
        }

        .btn-primary:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 10px 30px rgba(255,255,255,0.3);
        }

        .btn-outline {
            color: var(--t1);
        }

        .btn-outline:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-4px);
        }

        .btn-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 54px;
            height: 54px;
            border-radius: 50%;
            color: var(--t1);
            transition: all 0.4s;
        }

        .btn-icon:hover { transform: translateY(-4px); background: rgba(255,255,255,0.1); }

        /* SECTIONS */
        .bmm-widget-root .section {
            padding: 120px 0;
            position: relative;
            border-top: 1px solid rgba(255,255,255,0.03);
            background: transparent !important;
        }

        .bmm-widget-root .section-header { text-align: center; margin-bottom: 60px; }
        .bmm-widget-root .section-title {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            font-weight: 800;
            color: var(--t1);
            margin-bottom: 16px;
            display: inline-block;
        }
        .bmm-widget-root .section-subtitle {
            font-size: 1.1rem;
            color: var(--t3);
            max-width: 600px;
            margin: 0 auto;
        }

        /* ABOUT */
        .bmm-widget-root .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }

        .bmm-widget-root .about-text p { font-size: 1.1rem; color: var(--t2); margin-bottom: 24px; line-height: 1.8; }
        .bmm-widget-root .about-text p strong { color: var(--t1); font-weight: 600; }
        .bmm-widget-root .about-list { list-style: none; margin-top: 32px; }
        .bmm-widget-root .about-list li {
            display: flex; align-items: center; gap: 12px; margin-bottom: 16px; font-size: 1.1rem; color: var(--t1);
        }
        .bmm-widget-root .about-list li svg { color: var(--c3); flex-shrink: 0; }

        .bmm-widget-root .about-card { padding: 40px; position: relative; }

        /* INTERACTIVE IMAGE */
        .bmm-widget-root .interactive-image {
            position: relative;
            border-radius: 24px;
            cursor: pointer;
            height: 100%;
            min-height: 400px;
            padding: 8px; /* For glass border effect */
        }
        .bmm-widget-root .image-inner {
            width: 100%; height: 100%; position: relative; border-radius: 16px; overflow: hidden;
            display: block; min-height: 400px;
        }
        .bmm-widget-root .interactive-image img {
            width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; transition: transform 0.8s var(--ease); filter: brightness(0.9);
        }
        .bmm-widget-root .interactive-image:hover img { transform: scale(1.05); filter: brightness(1); }

        .bmm-widget-root .image-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 60%);
            opacity: 0.8;
            transition: opacity 0.5s;
            pointer-events: none;
            border-radius: 16px;
        }
        .bmm-widget-root .interactive-image:hover .image-overlay { opacity: 0.3; }

        /* SERVICES */
        .bmm-widget-root .services-grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 50px;
        }

        .bmm-widget-root .service-card {
            padding: 40px 30px; display: flex; flex-direction: column; gap: 20px;
        }

        .bmm-widget-root .service-icon {
            width: 64px; height: 64px; border-radius: 16px;
            background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center;
            color: var(--t1); margin-bottom: 10px; border: 1px solid rgba(255,255,255,0.1);
            transition: all 0.4s var(--ease);
        }

        .bmm-widget-root .service-card:hover .service-icon { background: var(--t1); color: #000; transform: scale(1.1); }
        .bmm-widget-root .service-title { font-size: 1.5rem; font-weight: 700; color: var(--t1); }
        .bmm-widget-root .service-desc { font-size: 1.05rem; color: var(--t2); line-height: 1.7; }
        .bmm-widget-root .service-list { list-style: none; margin-top: auto; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px; }
        .bmm-widget-root .service-list li { color: var(--t3); font-size: 0.95rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
        .bmm-widget-root .service-list li::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: var(--c3); }

        /* FEATURES */
        .bmm-widget-root .features-grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-top: 50px;
        }

        .bmm-widget-root .feature-item {
            display: flex; align-items: center; gap: 20px; padding: 24px;
        }
        .bmm-widget-root .feature-item .icon { color: var(--c4); flex-shrink: 0; }
        .bmm-widget-root .feature-item .text { font-weight: 600; color: var(--t1); font-size: 1.1rem; }

        /* AUDIENCE */
        .bmm-widget-root .audience-wrap {
            display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; max-width: 800px; margin: 40px auto 0;
        }

        .bmm-widget-root .audience-pill {
            padding: 12px 24px; font-weight: 500; font-size: 0.95rem; border-radius: 40px; color: var(--t1) !important; cursor: pointer;
        }
        .bmm-widget-root .audience-pill:hover { transform: translateY(-3px) scale(1.05); background: var(--t1); color: #000 !important; }

        /* CTA */
        .bmm-widget-root .final-cta {
            text-align: center; max-width: 800px; margin: 0 auto; padding: 60px; position: relative; overflow: hidden;
        }
        .bmm-widget-root .cta-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; margin-bottom: 24px; }
        .bmm-widget-root .cta-desc { font-size: 1.1rem; color: var(--t2) !important; margin-bottom: 40px; }

        /* SCROLL ANIMATIONS */
        .hidden {
            opacity: 0; filter: blur(12px); transform: translateY(40px) scale(0.95);
            transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.8s cubic-bezier(0.22, 1, 0.36, 1);
            will-change: opacity, transform, filter;
        }

        .show { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }

        .anim-text-reveal { overflow: hidden; display: inline-block; }
        .anim-text-reveal span { display: inline-block; transform: translateY(100%); animation: wordUp 1s var(--ease) forwards; }
        .delay-1 { transition-delay: 0.1s !important; animation-delay: 0.1s !important; }
        .delay-2 { transition-delay: 0.2s !important; animation-delay: 0.2s !important; }
        .delay-3 { transition-delay: 0.3s !important; animation-delay: 0.3s !important; }

        @media(max-width:960px) {
            .bmm-widget-root .hero-content { flex-direction: column; text-align: center; gap: 40px; }
            .bmm-widget-root .avatar-wrap { width: 280px; height: 280px; margin: 0 auto; }
            .bmm-widget-root .hero-desc { margin-left: auto; margin-right: auto; }
            .bmm-widget-root .hero-actions { justify-content: center; }
            .bmm-widget-root .about-grid { grid-template-columns: 1fr; }
        }
    </style>`;

content = content.replace(/<style>[\s\S]*?<\/style>/, newCss);

const bgHtml = \`<div class="bmm-widget-root">
        <div class="bmm-fixed-bg">
            <div class="bmm-orb o1"></div>
            <div class="bmm-orb o2"></div>
            <div class="bmm-orb o3"></div>
            <div class="bmm-orb o4"></div>
        </div>\`;
content = content.replace('<div class="bmm-widget-root">', bgHtml);

content = content.replace(/<div class="hero-bg">[\s\S]*?<\/div>/, '');

const classesToUpdate = {
    'hero-badge': 'hero-badge glass',
    'btn-outline': 'btn-outline glass',
    'btn-icon': 'btn-icon glass',
    'about-card hidden': 'about-card glass hidden',
    'interactive-image': 'interactive-image glass',
    'service-card hidden': 'service-card glass hidden',
    'feature-item hidden': 'feature-item glass hidden',
    'audience-pill hidden': 'audience-pill glass hidden',
    'final-cta': 'final-cta glass'
};

for (const [oldClass, newClass] of Object.entries(classesToUpdate)) {
    content = content.replace(new RegExp(`\\\\b${ oldClass } \\\\b(?![^<] *>)`, 'g'), newClass);
    // simpler replacement fallback if regex fails
    content = content.replaceAll('class="' + oldClass + '"', 'class="' + newClass + '"');
    content = content.replaceAll('class="' + oldClass + ' delay-3"', 'class="' + newClass + ' delay-3"');
}

// Ensure unique replacements
content = content.replaceAll('class="hero-badge"', 'class="hero-badge glass"');
content = content.replaceAll('class="btn btn-outline"', 'class="btn btn-outline glass"');
content = content.replaceAll('class="btn-icon"', 'class="btn-icon glass"');
content = content.replaceAll('class="about-card hidden delay-3"', 'class="about-card glass hidden delay-3"');
content = content.replaceAll('class="about-card" style="', 'class="about-card glass" style="');
content = content.replaceAll('class="interactive-image"', 'class="interactive-image glass"');
content = content.replaceAll('class="service-card hidden"', 'class="service-card glass hidden"');
content = content.replaceAll('class="feature-item hidden"', 'class="feature-item glass hidden"');
content = content.replaceAll('class="audience-pill hidden"', 'class="audience-pill glass hidden"');
content = content.replaceAll('class="final-cta"', 'class="final-cta glass"');

// Fix image inner wrapper
content = content.replace(/<img src="([^"]+)"\\s+alt="([^"]+)"\\s*\\/>/g, '<div class="image-inner"><img src="$1" alt="$2" /></div>');

content = content.replace(
    '</div>\\n                            <div class="image-overlay"></div>',
    '\\n                            <div class="image-overlay"></div>\\n                        </div>'
);
content = content.replaceAll('</div></div', '</div>\n</div');

// Remove white backgrounds on list items
content = content.replaceAll('background: rgba(255, 255, 255, 0.6);', '');
content = content.replaceAll('background: rgba(255, 255, 255, 0.8);', '');
content = content.replaceAll('background: rgba(255,255,255,0.8);', '');
content = content.replaceAll('background: linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7));', '');
content = content.replaceAll('background: linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%);', '');
content = content.replaceAll('background: var(--bg2);', '');

const colorsMap = {
    '#af8a4c': 'var(--c1)', 
    '#9fc5dc': 'var(--c3)', 
    '#e0c3a4': 'var(--c2)', 
    '#bce4ec': 'var(--c4)', 
    '#f4ac94': 'var(--c5)',
    'rgba(175,132,76,0.2)': 'rgba(255,255,255,0.1)',
    'rgba(159,197,220,0.15)': 'rgba(255,255,255,0.1)'
};

for (const [oldC, newC] of Object.entries(colorsMap)) {
    content = content.replaceAll(oldC, newC);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Update Complete');
