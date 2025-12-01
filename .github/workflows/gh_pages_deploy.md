# Automatic GitHub Pages deploy for a **Docusaurus** project

---

# Configure `docusaurus.config.js` (critical)

Open `docusaurus.config.js` and set these fields correctly:

```js
module.exports = {
  title: 'My Site',
  url: 'https://<YOUR_GITHUB_USER>.github.io', // or your org URL
  baseUrl: '/<REPO>/',                           // IMPORTANT for project pages
  organizationName: '<YOUR_GITHUB_USER_OR_ORG>', // usually your GitHub user/org
  projectName: '<REPO>',                        // repo name
  // ...other settings
};
```

Important notes:

* **Project site** (repository pages): `url = https://<user>.github.io` and `baseUrl = '/<repo>/'`.
* **User/Org site** (repo named `<user>.github.io`): `baseUrl = '/'` and `url = 'https://<user>.github.io'`.
* If you later use a custom domain, you'll need a `CNAME` in the `gh-pages` branch — noted below.

---

# Ensure build script exists in `package.json`

Docusaurus already provides scripts. `package.json` should contain at least:

```json
"scripts": {
  "start": "docusaurus start",
  "build": "docusaurus build",
  "serve": "docusaurus serve"
}
```

You *don't* strictly need a `deploy` script if you use GitHub Actions + `peaceiris/actions-gh-pages`.

# Repository settings (GitHub) — allow Actions to push

Go to **Settings → Actions → General → Workflow permissions** and ensure **“Read and write permissions”** is enabled. If this is not allowed, the GH_TOKEN push will fail.

---

# Common problems & fixes

**Issue: Deployment step succeeds but site shows 404 or missing assets**

* Check `baseUrl` in `docusaurus.config.js`. If it’s wrong (`/` vs `/<repo> assets and routes break.
* If using a custom domain, confirm `CNAME` is in `gh-pages` branch or configured in repo Pages settings.

**Issue: Action fails to push to `gh-pages`**

* Confirm repository Actions permission: `Settings → Actions → Workflow permissions` set to **Read and write**.
* Ensure you’re not running from a fork: `GITHUB_TOKEN` from forked PRs cannot push to main repo. (If your build is triggered by a PR from fork, the push will be blocked.)
* Inspect action logs for permission/401 errors.

**Issue: `gh-pages` branch empty or not created**

* The `peaceiris` action creates/updates the branch. If branch is missing after running the action:

  * Check action logs: did `peaceiris` report a push?
  * Confirm there were no errors earlier in the workflow (build step failed).
