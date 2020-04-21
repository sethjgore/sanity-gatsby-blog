export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9effb18d74f28f2ddefaf5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3i3r8vqr',
                  apiId: 'f3f39501-495d-47b8-983b-e06a584e000f'
                },
                {
                  buildHookId: '5e9effb1b61889fe574f1168',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-shifs3u9',
                  apiId: '22e53a88-2f5d-478c-b011-56b33639bcea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sethjgore/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-shifs3u9.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
