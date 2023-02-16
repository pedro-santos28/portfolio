const PROJECTS = [
  {
    repositoryName: 'Todo-ts',
    repositoryUrl: 'https://github.com/pedro-bink/todo-ts',
    hostingUrl: 'https://todo-aerb6or5i-pedro-bink.vercel.app',
    imageUrl: await import('../assets/todo-ts-preview.png').then(
      (image) => image.default as string,
    ),
    description:
      'Todo-app feito com react e typescript. Nessa aplicação é possível adicionar, remover e marcar como feito as tarefas.',
    usedTechs: [
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-plain.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg',
    ],
  },
  {
    repositoryName: 'Pokemon-app',
    repositoryUrl: 'https://github.com/pedro-bink/pokemon-app',
    hostingUrl: 'https://pokemon-app.vercel.app/',
    imageUrl: await import('../assets/pokemon-app-preview.png').then(
      (image) => image.default as string,
    ),
    description:
      'Pokemon-app feito com Vuejs e javascript. A aplicação consome a api do pokemon e permite ao usuário pesquisar o Pokémon desejado pelo nome ou Id e ver as informações dele.',
    usedTechs: ['Vue', 'Javascript', 'CSS3'],
  },
  {
    repositoryName: 'Plano meu pet',
    repositoryUrl: '',
    hostingUrl: 'https://doggy-silk.vercel.app/',
    imageUrl: await import('../assets/doggy-preview.png').then(
      (image) => image.default as string,
    ),
    description:
      'Plano meu pet, aplicação feita em React e Javascript. A aplicação se trata de um quiz onde o usuário responde diversas perguntas sobre seu cão e tem um plano de treinamento feito exclusivamente para ele.',
    usedTechs: ['React', 'Javascript', 'Module CSS'],
  },
  {
    repositoryName: 'Secret-word',
    repositoryUrl: 'https://github.com/pedro-bink/react-secretWord',
    hostingUrl: '',
    imageUrl: await import('../assets/secretword.png').then(
      (image) => image.default as string,
    ),
    description:
      'Secret-word, aplicação feita em React e Javascript. A aplicação se trata de um jogo onde o usuário tem que adivinhar a palavra secreta. Este projeto foi feito para praticar o uso de hooks e context api.',
    usedTechs: ['React', 'Javascript', 'CSS3'],
  },
  {
    repositoryName: 'Mini-blog',
    repositoryUrl: 'https://github.com/pedro-bink/mini-blog',
    hostingUrl: '',
    imageUrl: await import('../assets/blog.jpg').then(
      (image) => image.default as string,
    ),
    description:
      'Aplicação feita em React e Javascript. A aplicação se trata de um blog onde o usuário pode criar, editar e deletar posts. O backend foi desenvolvido em C# com o framework .NET Core, utilizando JWT, Entity Framework, MySql e Identity.',
    usedTechs: ['React', 'C#', 'CSS3', 'MySql', 'ASP NET CORE'],
  },
];

export default PROJECTS;
