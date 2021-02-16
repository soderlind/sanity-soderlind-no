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
                  buildHookId: '602ba152e4ec296cd259c300',
                  title: 'Sanity Studio',
                  name: 'sanity-soderlind-no-studio',
                  apiId: '94ac2117-c157-4676-8c81-aadac373cee3'
                },
                {
                  buildHookId: '602ba152983cfd6ba9c89627',
                  title: 'Blog Website',
                  name: 'sanity-soderlind-no',
                  apiId: '66bc197c-7825-4c45-ac29-d8919fed90ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/soderlind/sanity-soderlind-no',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-soderlind-no.netlify.app', category: 'apps' }
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
