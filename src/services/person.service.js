const personagem = [
    {
      id: 1,
      nome: 'Naruto',
      membro:
        'Time 7 / Time Kakashi.',
      foto: 'https://w7.pngwing.com/pngs/727/488/png-transparent-uzumaki-naruto-illustration-naruto-shippuden-ultimate-ninja-storm-2-naruto-uzumaki-naruto-shippuden-naruto-vs-sasuke-naruto-shippuden-manga-cartoons-fictional-character-thumbnail.png',
    },
    {
      id: 2,
      nome: 'Sakura',
      membro:
        'Time 7 / Time Kakashi.',
      foto: 'http://imagenspng.com/wp-content/uploads/sakura-naruto-png-Imagem-com-fundo-removido-transparente-gratis-para-baixar.png',
    },
    {
      id: 3,
      nome: 'Sasuke',
      membro:
        'Time 7 / Time Kakashi.',
      foto: 'https://i.pinimg.com/originals/bb/aa/b9/bbaab91dd08b913f7b46bea64f393dca.png',
    },
  ];
  

  const findPersonagemService = () => {
    return personagem;
  };
  
  const findPersonagemByIdService = (id) => {
    return personagem.find((personagens) => personagens.id == id);
  };

  const addPersonagemService = (personagens) => {
    personagem.push(personagens);
    return "ok";
  };

  const createPersonagemService = (newPersonagem) => {
    const newId = personagem.length + 1;
    newPersonagem.id = newId;
    personagem.push(newPersonagem);
    return newPersonagem;
  };

  const updatePersonagemService = (id, personagemEdited) => {
    personagemEdited['id'] = id;
    personagem[personagem.findIndex((personagens) => personagens.id == id)] = personagemEdited;
    return personagemEdited;
  };

  const deletePersonagemService = (id) => {
    return personagem.splice(personagem.findIndex((personagens) => personagens.id == id), 1);
  };
  
  module.exports = {
    findPersonagemService,
    findPersonagemByIdService,
    addPersonagemService,
    createPersonagemService,
    updatePersonagemService,
    deletePersonagemService,
  };
