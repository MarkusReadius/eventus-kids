# Eventus Kids Website

## Project Overview
Static single-page marketing website for Eventus Kids, a creative children's club in Netanya, Israel. Built with vanilla HTML, CSS, and JS. Hosted on Cloudflare Pages.

## Tech Stack
- Static HTML/CSS/JS only. No frameworks, no build tools.
- Google Fonts (Inter, Playfair Display)
- Web3Forms for contact form submissions

## Git Rules
- Do not add Co-Authored-By lines to commit messages
- Do not add "Generated with Claude Code" to commit messages
- Use conventional commits: feat:, fix:, docs:, style:, refactor:
- Keep subject lines under 72 characters

## File Structure
- `index.html` - Single page with all sections
- `css/styles.css` - All styles, mobile-first
- `js/main.js` - Language toggle, animations, form handling
- `images/` - Logo and section photos

## Key Patterns
- All user-facing text uses `data-i18n` attributes for bilingual support (RU/EN)
- Translations live in the `translations` object in main.js
- CSS custom properties in :root for all colors, fonts, spacing
- IntersectionObserver for scroll animations
- Web3Forms access key placeholder: YOUR_WEB3FORMS_ACCESS_KEY
