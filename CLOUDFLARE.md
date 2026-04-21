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
3. Save and check **Enforce HTTPS**. (See [Troubleshooting](#troubleshooting-enforce-https) if this is disabled).

## Troubleshooting: Enforce HTTPS

The GitHub Pages "Enforce HTTPS" checkbox may be disabled if GitHub cannot successfully provision an SSL certificate for your custom domain.

### Why this happens
When Cloudflare's proxy (Orange Cloud) is active, GitHub's automated certificate provisioning (ACME challenge) might be intercepted by Cloudflare, preventing GitHub from verifying ownership.

### Recommended Solution: Cloudflare "Always Use HTTPS"
If you are using Cloudflare, the most robust way to enforce HTTPS is through Cloudflare itself:
1. In the Cloudflare dashboard, go to **SSL/TLS** > **Edge Certificates**.
2. Enable **Always Use HTTPS**.
This will redirect all HTTP traffic to HTTPS at the edge, before it even reaches GitHub.

### Alternative Solution: DNS-Only Mode
If you must enable the toggle in GitHub:
1. Temporarily change the DNS record proxy status from **Proxied** (Orange Cloud) to **DNS Only** (Grey Cloud) in Cloudflare.
2. Wait for GitHub to provision the certificate (this can take up to 24 hours, but is usually faster).
3. Once the "Enforce HTTPS" checkbox is enabled and checked in GitHub, you can re-enable the Cloudflare proxy.

## 2. Email Forwarding

To set up email forwarding for `elpis@spnss.com`:

1.  In Cloudflare dashboard, go to **Email** > **Email Routing**.
2.  Enable Email Routing and add MX/TXT records.
3.  Create a route for `elpis@spnss.com` forwarding to `dobustustationery@gmail.com`.
