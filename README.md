# Portfolio Site

Live: [leevincenth.com](https://leevincenth.com)

## Key tools

- Gatsby, for static site generation
- Netlify, for deployments and hosting
- Netlify CMS, content management UI
- Github, CI

## Development

- `yarn start`
  - local site localhost:8000
  - graphql explorer localhost:8000/\_\_graphql
- cms
  - Netlify CMS configuration stored in `static/admin/config.yml`
  - for local content management, set `local_backend: true` in the config file and run `npx netlify-cms-proxy-server`
  - local cms localhost:8000/admin
