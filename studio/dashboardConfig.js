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
                  buildHookId: '622f331aa04abd1a2fdaf0e6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rzcxd14k',
                  apiId: '586c7f91-c312-4db9-b90f-f2602d88eb44'
                },
                {
                  buildHookId: '622f331a1dea9b155d9a56e4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7xb7b9pt',
                  apiId: '8ef8c5b7-e01a-49e8-98ee-60a4dd52fb91'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pickusa-admin/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7xb7b9pt.netlify.app',
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
