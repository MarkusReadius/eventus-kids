# Eventus Kids Website

Static single-page marketing website for **Eventus Kids**, a creative children's club in Netanya, Israel. Built with vanilla HTML, CSS, and JavaScript. Hosted on Cloudflare Pages.

## Local Development

Open `index.html` directly in a browser, or use a local server:

```bash
npx serve .
```

## Deployment

The site deploys via **Cloudflare Pages** connected to this GitHub repository.

- **Build command:** None (static site)
- **Build output directory:** `/` (root)

Push to `main` to auto-deploy.

## Configuration

### Web3Forms

Replace the access key placeholder in `index.html`:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```

Get your key at [web3forms.com](https://web3forms.com).

### Replacing Placeholder Images

Replace the following files in `images/` with real photos:

| File | Purpose |
|------|---------|
| `logo.png` | Eventus Kids tree logo |
| `hero-placeholder.jpg` | Hero section background |
| `theater-placeholder.jpg` | Theater program section |
| `music-placeholder.jpg` | Music program section |
| `art-placeholder.jpg` | Art program section |
| `open-session-placeholder.jpg` | Open sessions section |
| `teacher-1-placeholder.jpg` | First teacher photo |
| `teacher-2-placeholder.jpg` | Second teacher photo |
| `teacher-3-placeholder.jpg` | Third teacher photo |

Recommended dimensions: hero 1920x1080, program images 1200x800, teacher photos 400x400 (square).

### Updating Text Content

All text is in the `translations` object in `js/main.js`. Edit the `ru` and `en` keys to update copy in both languages.

### Editing Teacher Profiles

In `js/main.js`, update the translation keys `teacher.1.name`, `teacher.1.role`, `teacher.1.bio` (and `.2`, `.3`) for each teacher.

In `index.html`, update the `aria-label` attributes on teacher photo divs.

### Updating Contact Info

- Phone and email: update in `index.html` footer and in the JSON-LD structured data block
- Social links: update `href` attributes on footer social links
- Google Maps embed: update the `iframe` src in the schedule section

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- Google Fonts (Inter, Playfair Display)
- Web3Forms (contact form)
- No frameworks, no build tools, no bundlers

## License

MIT
