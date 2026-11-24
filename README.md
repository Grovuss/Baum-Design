# Baum Design — website

A static, single-page site: plain HTML, CSS and JavaScript. There's no build step and nothing to install.

```
index.html        page structure (hero, about copy, form fields, footer)
404.html          "page not found" page (Netlify shows it automatically)
robots.txt        lets search engines index the site
css/styles.css    all styling; palette and spacing tokens at the top
css/fonts.css     self-hosted fonts (files in assets/fonts/)
js/content.js     ← edit this: projects, services, process, pricing, email, phone, socials, form endpoint
js/main.js        rendering, mobile nav, scroll reveal, form submission
assets/           logo.svg, favicon.svg, apple-touch-icon.png (home-screen icon),
                  sprout.svg (hero graphic, grows on load), og-image.png (link preview), images/
```

## Editing content
- **Projects**: in `js/content.js`, edit `projects`. Put images in `assets/images/` and set `image: "assets/images/your-file.jpg"` plus `alt`. Set `placeholder: false` to remove the "Placeholder" tag. Adding or removing entries just works.
- **Services, process steps, socials, email, phone, enquiry options**: these are also in `js/content.js`.
- **Pricing**: `pricing` in `js/content.js` holds the four package cards (`featured: true` makes a card dark), the smaller packages, the tabbed list of individual services, and the footnote. If you rename a package, rename it in `enquiryTypes` too. That way the "Choose package" button still picks it in the contact form.
- **About photo**: change the `<img>` in the About section of `index.html`. It's shown in a 4:5 frame, and `.about-photo img { object-position }` in `css/styles.css` controls which part of the photo stays in view.
- **Colours/fonts**: the CSS variables at the top of `css/styles.css`.

## Connecting the contact form
1. Create a form with Formspree (or Getform, Basin, or any service that accepts a POST).
2. Paste the endpoint URL into `formEndpoint` in `js/content.js`.

That's all. The form sends `name`, `email`, `business`, `looking_for` and `message`, plus a `_gotcha` honeypot field that catches spam. Until an endpoint is set, submitting shows a message pointing visitors to your email.

## Link previews
`assets/og-image.png` (1200×630) is the card that shows when someone shares your link. The tags in `index.html` use full URLs on `https://grovuss.github.io/Baum-Design` (most apps ignore relative paths). If you move to your own domain, replace that address in `og:url`, `og:image` and `twitter:image`.

## Previewing locally
```
python -m http.server 5173
```
Then open http://localhost:5173.

## Deploying
The site is hosted on GitHub Pages from the `main` branch of github.com/Grovuss/Baum-Design and lives at https://grovuss.github.io/Baum-Design/. To update it, commit your changes and push:
```
git add -A
git commit -m "Describe the change"
git push
```
Pages republishes within a minute or two. There are no build settings. `.nojekyll` tells Pages to serve the files as they are, and `.gitignore` keeps editor settings out of the repository.
