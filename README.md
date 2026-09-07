# Jaewan Park — academic website

An academic website built with [al-folio](https://github.com/alshedivat/al-folio) and Jekyll.

- Website: https://benjamin0303.github.io
- Repository: https://github.com/benjamin0303/benjamin0303.github.io

## Update the site

Edit files on GitHub using the pencil button and commit to `main`. The **Deploy site** action builds the site and publishes the output to `gh-pages`; GitHub Pages then serves it. Updates can take a few minutes.

| Content                                               | File                       |
| ----------------------------------------------------- | -------------------------- |
| Biography and affiliation                             | `_pages/about.md`          |
| Name, site description, and settings                  | `_config.yml`              |
| GitHub, email, Google Scholar, ORCID, and other links | `_data/socials.yml`        |
| Publications in BibTeX                                | `_bibliography/papers.bib` |
| Publications navigation                               | `_pages/publications.md`   |

The first version uses the public GitHub profile bio. No publication records, academic dates, contact details, or CV have been invented.

## Add publications

1. Add your own BibTeX entries to `_bibliography/papers.bib`.
2. Set `nav: true` in `_pages/publications.md` to show the page in the menu.
3. Optionally set `selected_papers: true` in `_pages/about.md` and add `selected = {true}` to chosen BibTeX entries.

## Add a photo or CV

Demonstration assets are excluded from the published site in `_config.yml`.

- For a photo, replace the demo files in `assets/img/` with your own, remove `assets/img/` from `exclude`, and add a `profile` block to `_pages/about.md` with `image: your-photo.jpg` and `align: right`.
- For a CV, replace the demo files in `assets/pdf/` with your own `cv.pdf`, remove `assets/pdf/` from `exclude`, and enable `cv_pdf: /assets/pdf/cv.pdf` in `_data/socials.yml`.

## Hosting and build

Use a **public** repository and the included `github.io` address for free hosting. No domain purchase, paid theme, or paid hosting service is required.

Repository **Settings → Pages** should use **Deploy from a branch**, branch **gh-pages**, folder **/ (root)**. The included deployment workflow has `contents: write` permission.

To preview locally with Ruby and Bundler installed:

```bash
bundle install
npm ci
bundle exec jekyll serve
```

Open http://localhost:4000/. The production `baseurl` is empty because this is a personal site at the domain root.

See [al-folio documentation](docs/README.md) for more customization options. Theme runtime comes from the versioned gems in `Gemfile`.

## Personal design

Edit `_sass/_personal.scss` to change the site's colors, typography, contact buttons, and responsive spacing. The homepage content and research areas are in `_pages/about.md`; contact buttons use `_data/socials.yml`.

`assets/css/main.scss` overrides the theme's stylesheet entry point to load the personal styles after the standard al-folio styles. This override is recorded in `.al-folio-overrides.yml`. After updating theme gems, run `bundle exec al-folio upgrade overrides audit` to check it for upstream changes.
