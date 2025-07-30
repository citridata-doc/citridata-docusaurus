import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/my-markdown-page',
    component: ComponentCreator('/my-markdown-page', '438'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', 'f2d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '394'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e11'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'abd'),
            routes: [
              {
                path: '/docs/CitriData/Introducción',
                component: ComponentCreator('/docs/CitriData/Introducción', '161'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Competencia de paises terceros en el mercado de cítricos/Introducción',
                component: ComponentCreator('/docs/Competencia de paises terceros en el mercado de cítricos/Introducción', '571'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Eficiencias en el uso del suelo, ambiente, insumos y estilos de agricultura/Introducción',
                component: ComponentCreator('/docs/Eficiencias en el uso del suelo, ambiente, insumos y estilos de agricultura/Introducción', '859'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Gestión pre y postcosecha e industria alimentaria/Introducción',
                component: ComponentCreator('/docs/Gestión pre y postcosecha e industria alimentaria/Introducción', 'e1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Gobernanza y desarrollo de oportunidades de negocio y utilidades/Introducción',
                component: ComponentCreator('/docs/Gobernanza y desarrollo de oportunidades de negocio y utilidades/Introducción', '48d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Material and Resources/Material',
                component: ComponentCreator('/docs/Material and Resources/Material', '274'),
                exact: true
              },
              {
                path: '/docs/Material and Resources/Resources',
                component: ComponentCreator('/docs/Material and Resources/Resources', '9af'),
                exact: true
              },
              {
                path: '/docs/Observación de la Tierra y el clima/Introducción',
                component: ComponentCreator('/docs/Observación de la Tierra y el clima/Introducción', 'c8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Observación de la Tierra y el clima/Packages/Clasificación de plantaciones',
                component: ComponentCreator('/docs/Observación de la Tierra y el clima/Packages/Clasificación de plantaciones', '9bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Optimización de agua y energía/Introducción',
                component: ComponentCreator('/docs/Optimización de agua y energía/Introducción', 'b63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sensorización, infraestructuras y tecnologías de datos/DataSets/',
                component: ComponentCreator('/docs/Sensorización, infraestructuras y tecnologías de datos/DataSets/', 'c87'),
                exact: true
              },
              {
                path: '/docs/Sensorización, infraestructuras y tecnologías de datos/DataSets/001',
                component: ComponentCreator('/docs/Sensorización, infraestructuras y tecnologías de datos/DataSets/001', 'c5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sensorización, infraestructuras y tecnologías de datos/DataSets/002',
                component: ComponentCreator('/docs/Sensorización, infraestructuras y tecnologías de datos/DataSets/002', 'e90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sensorización, infraestructuras y tecnologías de datos/Introducción',
                component: ComponentCreator('/docs/Sensorización, infraestructuras y tecnologías de datos/Introducción', 'bf7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sensorización, infraestructuras y tecnologías de datos/Packages/',
                component: ComponentCreator('/docs/Sensorización, infraestructuras y tecnologías de datos/Packages/', 'fd9'),
                exact: true
              },
              {
                path: '/docs/Sensorización, infraestructuras y tecnologías de datos/Packages/001',
                component: ComponentCreator('/docs/Sensorización, infraestructuras y tecnologías de datos/Packages/001', 'd48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sensorización, infraestructuras y tecnologías de datos/Packages/002',
                component: ComponentCreator('/docs/Sensorización, infraestructuras y tecnologías de datos/Packages/002', '8ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
