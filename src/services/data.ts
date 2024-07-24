export type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Ecommerce UI',
    description: 'A landing page of a ecommerce inspired a public template',
    url: 'https://github.com/kelthon/ecommerce-ui',
  },
  {
    id: 2,
    title: 'Furniture Ecommerce (API)',
    description: 'A complete back end for a ecommerce app',
    url: 'https://github.com/kelthon/ecommerce-api',
  },
  {
    id: 3,
    title: 'Furniture Ecommerce (APP)',
    description: 'A complete front end for a ecommerce app',
    url: 'https://github.com/kelthon/ecommerce-app',
  },
  {
    id: 4,
    title: 'Data Structure Viewer',
    description: 'A app to analise, build and view data structures',
    url: 'https://github.com/kelthon/dsv',
  },
  {
    id: 5,
    title: 'Web chat UI',
    description: 'A landing page of a webchat inspired on WhatsApp',
    url: 'https://github.com/kelthon/webchat',
  },
];

export type Message = {
  id: number;
  title: string;
  message?: string;
};

export const messages: Message[] = [
  {
    id: 1,
    title: '🚧 Under Construction 🚧',
    message:
      "I'm currently working hard to improve your browsing experience. During this phase, you may encounter some glitches or errors. I apologize for any inconvenience and thank you for your patience. Thanks for the visit! Thank you for visiting!",
  },
];
