# WindogeOS Site

This repository contains a lightweight static site for WindogeOS (starter template).

What is included:
- index.html — landing page that references the wallpaper at assets/wallpaper.jpg
- download.html — downloads page with placeholders for ISO URL, SHA256, and GPG signature
- css/styles.css — minimal styling
- scripts/verify.js — optional client-side helper
- assets/ (place your wallpaper image here as `wallpaper.jpg`)

Next steps (to get the site live):

1) Add the wallpaper image
- Upload your wallpaper image to the repository at `assets/wallpaper.jpg`.
  You can do this in the GitHub web UI: Add file → Upload files → choose your wallpaper image → Commit.

2) Enable GitHub Pages
- Go to Settings → Pages in the repository and select the `main` branch and root (`/`) as the source.
- Save. The Pages site will appear in the same settings page (may take a minute).

3) Publish a Release with your ISO
- On GitHub, go to Releases → Draft a new release.
- Tag version (e.g., `v1.0`), upload the ISO file, the SHA256 checksum file, and the GPG signature file (.asc).
- Publish the release.

4) Update `download.html`
- Edit the ISO download link and checksum/signature links to point to the Release asset URL (or your S3/CDN URL).

5) Optional: Create `downloads/latest-checksums.json`
- Add a JSON file with {"sha256":"...", "version":"1.0"} to the `downloads/` path and push it. The site will attempt to fetch it to display the checksum.

If you'd like, I can:
- Enable Pages for you if you grant permission, or guide you step-by-step.
- Create the draft Release (I need the ISO file URL or the file itself).

