// generate-sitemap.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { join } = require("path");

// List of your website's pages
const pages = [
  { url: "/", changefreq: "weekly", priority: 1 },
  { url: "/our-services/", changefreq: "monthly", priority: 0.8 },
  { url: "/how-we-do-it/", changefreq: "monthly", priority: 0.8 },
  { url: "/case-studies/", changefreq: "monthly", priority: 0.8 },
  { url: "/meet-us/", changefreq: "yearly", priority: 0.6 },
  { url: "/contact-us/", changefreq: "yearly", priority: 0.6 },
  { url: "/faq/", changefreq: "monthly", priority: 0.7 },
  { url: "/partners/", changefreq: "monthly", priority: 0.7 },
];

(async () => {
  const stream = new SitemapStream({ hostname: "https://devx.digital/" });

  pages.forEach((page) => {
    stream.write(page);
  });

  stream.end();

  const sitemap = await streamToPromise(stream);
  createWriteStream(join(__dirname, "public", "sitemap.xml")).write(sitemap);
})();
