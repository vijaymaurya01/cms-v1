/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'randomuser.me',
        },
        {
          protocol: 'https',
          hostname: 'api.uifaces.co',
        },
        {
          protocol: 'https',
          hostname: 'tecdn.b-cdn.net',
          pathname: '/img/Photos/new-templates/bootstrap-login-form/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  