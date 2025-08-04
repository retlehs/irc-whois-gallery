export default function() {
  return {
    siteUrl: process.env.URL || 'http://localhost:8080',
    branch: process.env.BRANCH
  };
};