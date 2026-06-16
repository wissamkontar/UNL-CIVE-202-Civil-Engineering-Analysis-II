## Git Workflow

Recommended workflow:

```bash
git checkout development
git pull origin development
npm install
npm run build
git add .
git commit -m "Describe your changes"
git push origin development
```

## Updating the Website

To update content:

1. Edit the relevant HTML, CSS, or document files.
2. Run the site locally with `npm run dev`.
3. Test the production build with `npm run build`.
4. Commit and push changes to `development`.
5. Open a Pull Request into `main`.

## Notes for Future Maintainers

* Keep shared navigation in `public/partials/header.html`.
* Keep shared footer content in `public/partials/footer.html`.
* Keep project detail pages inside `projects/`.
* Keep downloadable files inside `public/documents/`.
* Do not include `/public` in HTML links.
* Test with `npm run build` before opening a Pull Request.
* Netlify should deploy from the `main` branch after the Pull Request is merged.


## Netlify Deployment Settings

For Netlify deployment, use these settings:

```text
Build command: npm run build
Publish directory: dist
```

The repository owner should connect the GitHub repository to Netlify and configure Netlify to deploy from the `main` branch.

Recommended Netlify flow:

```text
development branch → Pull Request → main branch → Netlify deployment
```

## Important Path Notes

This project uses Vite. Files placed inside the `public/` folder are served from the site root.

Use paths like this in HTML:

```html
/documents/project1/example-file.pdf
```

Do not use paths like this:

```html
/public/documents/project1/example-file.pdf
```

The `/public` part should not be included in browser-facing paths.

## Header and Footer

The shared header and footer are stored in:

```text
public/partials/header.html
public/partials/footer.html
```

They are loaded into pages through `src/main.js`.

```html
<div id="site-header"></div>
```

```html
<div id="site-footer"></div>
```

