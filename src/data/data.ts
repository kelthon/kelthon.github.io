export type Project = {
  id: number;
  title: string;
  description?: string;
  url?: string;
};

export const projects: Project[] = [
  { id: 1, title: 'Ecommerce UI' },
  { id: 2, title: 'Furniture Ecommerce' },
  { id: 3, title: 'DSV' },
  { id: 4, title: 'Web chat UI' },
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
