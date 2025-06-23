export default defineAppConfig({
  title: 'link.miiiku.com',
  email: 'i@miiiku.com',
  github: 'https://github.com/afawfa',
  twitter: 'https://x.com/xiaogong777',
  telegram: 'https://t.me/keqing2',
  blog: 'https://i.miiiku.com',
  description: '长链接转短链接',
  image: 'https://www.miiiku.com/wp-content/uploads/2025/06/TonVRa9IQrwPULS.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
