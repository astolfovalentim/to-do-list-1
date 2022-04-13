const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

const thundercats = [
  {
    id: 1,
    personagem: 'Lion-O',
    descricao: 'filho de Claudus, é o líder herdeiro dos ThunderCats',
    habilidade:
      'Fisicamente muito forte, quase tão forte quanto Panthro. Como todos os outros ThunderCats, Lion-O também possui grande agilidade.Também é muito corajoso e virtuoso. Bastante inteligente, muitas vezes usa sua inteligência para enganar seus inimigos, pois prefere evitar a violência.',
    arma: 'espada justiceira',
    foto: 'https://static.wikia.nocookie.net/thundercats/images/c/c2/LionOFromThunderCats1985SeriesEpisodeTroubleWithTimeSc01.jpg/revision/latest/scale-to-width-down/350?cb=20200331160007',
  },
  {
    id: 2,
    personagem: 'Cheetara',
    descricao: 'Da nobreza thunderiana é membro antigo dos ThunderCats.',
    habilidade:
      'Sua habilidade física mais notável é sua incrível velocidade. Ela também tem uma habilidade chamada de "Sexto Sentido", que lhe dá a capacidade de ver eventos passados e futuros.',
    arma: 'Bastão',
    foto: 'https://static.wikia.nocookie.net/thundercats/images/8/80/Cheetara.jpg/revision/latest/scale-to-width-down/350?cb=20111219202357',
  },
  {
    id: 3,
    personagem: 'Panthro',
    descricao:
      'é um nobre thunderiano e membro veterano dos ThunderCats. Ele é o mais velho do grupo. Sua única fraqueza é o medo dos morcegos.',
    habilidade:
      'É fisicamente o ThunderCat mais forte e um guerreiro astuto, confia tanto nas artes marciais quanto em sua força física. É o mecânico-engenheiro chefe e piloto dos ThunderCats.',
    arma: 'Nunchaku com patas de gato abertas, que abrigam vários compostos químicos de spray que ele pode usar contra inimigos. Os espinhos em suas faixas torácicas podem ser usados como armas de projéteis ou como linhas de rapel',
    foto: 'https://static.wikia.nocookie.net/thundercats/images/d/d7/2vlcsnap-2014-03-12-21h53m03s204.jpg/revision/latest/scale-to-width-down/350?cb=20140322205906',
  },
];

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/thundercats/find-cats', (req, res) => {
  res.send(thundercats);
});

app.get('/thundercats/find-cats/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenCats = thundercats.find((cats) => thundercats.id == idParam);
  res.send(chosenCats);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
