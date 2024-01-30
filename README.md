<p align="center">
  <a href="https://fastidious-wisp-aa687c.netlify.app/">
    <img alt="EZAC" src="https://fastidious-wisp-aa687c.netlify.app/static/EZAC_logo-8bf28ce4b2a291307415ff87b34d0a04.svg" width="180" />
  </a>
</p>
<h1 align="center">
  Eerste Zeeuws-Vlaamse Aero Club
</h1>

<h3 align="center">
  New website with Gatsby + Netlify CMS
</h3>

<a style="margin: 0 10px;" href="https://app.netlify.com/sites/fastidious-wisp-aa687c/deploys"><img style="display: block; margin: 0 auto;" src="https://api.netlify.com/api/v1/badges/dfad0988-378a-4a9d-be93-bef1897514cc/deploy-status" /></a>

## 🚀 Quickstart

### Environment

Create a file named `.env.development` in the root of your project, and add the following (make sure to substitute):

```
GATSBY_GOOGLE_MAPS_API_KEY=<ask Rafaël>
GATSBY_BASIC_AUTH_KEY=<ask Rafaël or consult docs>
GATSBY_EZAC_API_URL=<https://dev.ezac.nl> OR <https://ezac.nl>
```

### Run locally
```
npm install --legacy-peer-deps
npm start
```

Website will run on local devserver on: `localhost:8000`

## 📦 Editing/adding content

Navigate to `/admin` and log in with your GitHub account. **Please note that all the changes will be made onto the `main` branch**, and not your current branch. The CMS is more for production use. You can add content by creating JSON files under `src/data`. Of course it must follow the schema declared in the collection in `static/admin/config.yml`, where all collections are defined.
