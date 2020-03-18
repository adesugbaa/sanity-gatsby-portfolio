export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e721fdec691de01a6f4b2a6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-v4ovpkqg',
                  apiId: '87502197-ff2d-41d1-82d1-16a085b2f0e9'
                },
                {
                  buildHookId: '5e721fdeed05610220c7c38d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bbno55do',
                  apiId: '3a8ec419-a834-477b-b476-da0612ef5972'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adesugbaa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bbno55do.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
