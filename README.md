# runeql-web

[![Netlify Status](https://api.netlify.com/api/v1/badges/710bc572-8c17-4b7e-9299-6bf58a1ca5ee/deploy-status)](https://app.netlify.com/sites/runeql/deploys)

Static website for RuneQL

## Netlify Build

In addition to the static files housed in this repository, `netlify.toml` includes a build command that uses [graphdoc](https://github.com/2fd/graphdoc) to generate schema documentation from the live https://api.runeql.com/ GraphQL endpoint. These pages are generate at the `/schema/` route. 

The CICD pipeline for the primary [RuneQL](https://github.com/schmidlidev/runeql) repository automatically triggers a Netlify rebuild following a succesful deployment, so this documentation should always be up to date.
