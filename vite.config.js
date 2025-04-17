export default {
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
          about: '/src/about.html',
          blog: '/src/blog.html',
          blogDetail:'/src/blogDetail.html',
          contactUs: '/src/contactUs.html',
          features: '/src/features.html',
          pricing: '/src/pricing.html',
        }
      }
    }
  }