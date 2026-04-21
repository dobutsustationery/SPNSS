# Cloudflare Configuration for SPNSS

This document outlines the steps to configure Cloudflare for the SPNSS website and email forwarding.

## 1. Custom Domain for GitHub Pages

To point `spnss.com` and `www.spnss.com` to your GitHub Pages site:

### DNS Records in Cloudflare

1.  **Apex Domain (`spnss.com`)**:
    - Add an **A** record pointing to the GitHub Pages IP addresses:
      - `185.199.108.153`
      - `185.199.109.153`
      - `185.199.110.153`
      - `185.199.111.153`
2.  **WWW Subdomain (`www.spnss.com`)**:
    - Add a **CNAME** record pointing to `dobutsustationery.github.io`.
    - Ensure the proxy status is set to **Proxied** (Orange cloud).

### GitHub Pages Settings

1.  In the GitHub repository, go to **Settings** > **Pages**.
2.  Under **Custom domain**, enter `spnss.com`.
3.  Save and check **Enforce HTTPS**.

## 2. Email Forwarding

To set up email forwarding for `elpis@spnss.com`:

1.  In Cloudflare dashboard, go to **Email** > **Email Routing**.
2.  Enable Email Routing and add MX/TXT records.
3.  Create a route for `elpis@spnss.com` forwarding to `dobustustationery@gmail.com`.
