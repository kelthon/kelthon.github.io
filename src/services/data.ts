import { Language } from '@utils/properties';

export type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export type Message = {
  id: number;
  title: string;
  message?: string;
};

export type LanguageContent = {
  navbar: { name: string; href: string }[];
  aboutMe: {
    title: string;
    description: string[];
  };
  myProjects: Project[];
  contactMe: string[];
  messages: Message[];
};

const Translations: Map<Language, LanguageContent> = new Map([
  [
    Language.English,
    {
      navbar: [
        { name: 'about me', href: 'about-me' },
        { name: 'projects', href: 'my-projects' },
        { name: 'contact', href: 'contact-me' },
      ],
      aboutMe: {
        title: 'Hello, World!',
        description: [
          "I'm Kelthon Alves, a full-stack web developer, I leverage",
          'TypeScript',
          'and',
          'React',
          'to craft engaging web user experiences. My focus lies in developing responsive and accessible interfaces, which are seamlessly integrated with',
          'AWS',
          'to deliver an optimized user experience.',
        ],
      },
      myProjects: [
        {
          id: 1,
          title: 'Ecommerce UI',
          description:
            'A landing page of a ecommerce inspired a public template',
          url: 'https://github.com/kelthon/e-commerce',
        },
        {
          id: 2,
          title: 'Furniture Ecommerce (API)',
          description: 'A complete back end for a furniture ecommerce app',
          url: 'https://github.com/kelthon/ecommerce-challenge-api',
        },
        {
          id: 3,
          title: 'Furniture Ecommerce (APP)',
          description: 'A complete front end for a furniture ecommerce app',
          url: 'https://github.com/kelthon/ecommerce-challenge-app',
        },
        {
          id: 4,
          title: 'Data Structure Viewer',
          description:
            'A app to analise, build and view data structures algorithms',
          url: 'https://github.com/kelthon/dsv',
        },
        {
          id: 5,
          title: 'Web chat UI',
          description: 'A landing page of a webchat inspired on WhatsApp',
          url: 'https://github.com/kelthon/webchat',
        },
      ],
      contactMe: ['You can contact me thought of', 'channels', 'below:'],
      messages: [
        {
          id: 1,
          title: '🚧 Under Construction 🚧',
          message:
            "I'm currently working hard to improve your browsing experience. During this phase, you may encounter some glitches or errors. I apologize for any inconvenience and thank you for your patience. Thank you for visiting!",
        },
      ],
    },
  ],
  [
    Language.Portuguese,
    {
      navbar: [
        { name: 'sobre mim', href: 'about-me' },
        { name: 'projetos', href: 'my-projects' },
        { name: 'contato', href: 'contact-me' },
      ],
      aboutMe: {
        title: 'Hello, World!',
        description: [
          'Eu sou Kelthon Alves, um desenvolvedor web full-stack, utilizo',
          'TypeScript',
          'e',
          'React',
          'para criar experiências de usuário web envolventes. Meu foco está no desenvolvimento de interfaces responsivas e acessíveis, que são perfeitamente integradas com a',
          'AWS',
          'para fornecer uma experiência de usuário otimizada.',
        ],
      },
      myProjects: [
        {
          id: 1,
          title: 'Ecommerce UI',
          description:
            'Uma landing page de um ecommerce inspirado em um template público',
          url: 'https://github.com/kelthon/e-commerce',
        },
        {
          id: 2,
          title: 'Furniture Ecommerce (API)',
          description:
            'Um back end completo de um aplicativo ecommerce de móveis',
          url: 'https://github.com/kelthon/ecommerce-challenge-api',
        },
        {
          id: 3,
          title: 'Furniture Ecommerce (APP)',
          description:
            'Um front end completo de um aplicativo ecommerce de móveis',
          url: 'https://github.com/kelthon/ecommerce-challenge-app',
        },
        {
          id: 4,
          title: 'Data Structure Viewer',
          description:
            'Um aplicativo par análise, construção e visualização de algoritmos de estruturas de dados',
          url: 'https://github.com/kelthon/dsv',
        },
        {
          id: 5,
          title: 'Web chat UI',
          description: 'Uma landing page de um webchat inspirado no WhatsApp',
          url: 'https://github.com/kelthon/webchat',
        },
      ],
      contactMe: ['Você pode me contatar através dos', 'canais', 'abaixo:'],
      messages: [
        {
          id: 1,
          title: '🚧 Em Construção 🚧',
          message:
            'No momento, estou trabalhando duro para melhorar sua experiência de navegação. Durante esta fase, você pode encontrar algumas falhas ou erros. Peço desculpas por qualquer inconveniente e agradeço sua paciência. Obrigado pela visita!',
        },
      ],
    },
  ],
]);

export default Translations;
