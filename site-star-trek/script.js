const seriesData = [
    {
        name: "Jornada nas Estrelas: A Série Original",
        abbr: "TOS",
        seasons: 3,
        episodes: 80,
        startYear: 1966,
        endYear: 1969,
        description: "A primeira série Star Trek, seguindo as missões da nave USS Enterprise sob o comando do Capitão James T. Kirk.",
        fanRating: 8.9,
        criticRating: 8.3
    },
    {
        name: "Jornada nas Estrelas: A Série Animada",
        abbr: "TAS",
        seasons: 2,
        episodes: 26,
        startYear: 1973,
        endYear: 1974,
        description: "Uma série animada que acompanha as aventuras da tripulação da USS Enterprise em suas missões diplomáticas e científicas.",
        fanRating: 7.2,
        criticRating: 6.9
    },
    {
        name: "Jornada nas Estrelas: A Nova Geração",
        abbr: "TNG",
        seasons: 7,
        episodes: 178,
        startYear: 1987,
        endYear: 1994,
        description: "Situada um século após a Série Original, acompanha a USS Enterprise-D e sua tripulação sob o comando do Capitão Jean-Luc Picard.",
        fanRating: 9.2,
        criticRating: 9.0
    },
    {
        name: "Jornada nas Estrelas: Deep Space Nine",
        abbr: "DS9",
        seasons: 7,
        episodes: 175,
        startYear: 1993,
        endYear: 1999,
        description: "Ambientada em uma estação espacial em um ponto estratégico do espaço, explora temas como política, guerra e diplomacia.",
        fanRating: 8.5,
        criticRating: 8.9
    },
    {
        name: "Jornada nas Estrelas: Voyager",
        abbr: "VOY",
        seasons: 7,
        episodes: 172,
        startYear: 1995,
        endYear: 2001,
        description: "Acompanha a jornada da USS Voyager perdida no Delta Quadrant, buscando o caminho de volta à Terra.",
        fanRating: 7.9,
        criticRating: 7.2
    },
    {
        name: "Jornada nas Estrelas: Enterprise",
        abbr: "ENT",
        seasons: 4,
        episodes: 99,
        startYear: 2001,
        endYear: 2005,
        description: "Se passa um século antes da Série Original, mostrando a primeira missão da USS Enterprise e a formação da Federação Unida dos Planetas.",
        fanRating: 6.7,
        criticRating: 6.3
    },
    {
        name: "Jornada nas Estrelas: Discovery",
        abbr: "DIS",
        seasons: 6,
        episodes: 54,
        startYear: 2017,
        endYear: 2024,
        description: "Se passa dez anos antes da Série Original, seguindo a USS Discovery e sua tripulação em missões em áreas inexploradas do espaço.",
        fanRating: 8.2,
        criticRating: 7.8
    },
    {
        name: "Jornada nas Estrelas: Short Treks",
        abbr: "STST",
        seasons: 2,
        episodes: 13,
        startYear: 2018,
        endYear: 2020,
        description: "Série de curtas metragens que exploram diferentes histórias e personagens do universo Star Trek.",
        fanRating: 7.5,
        criticRating: 7.0
    },
    {
        name: "Jornada nas Estrelas: Picard",
        abbr: "PIC",
        seasons: 3,
        episodes: 32,
        startYear: 2020,
        endYear: 2023,
        description: "Acompanha a história de Jean-Luc Picard, agora aposentado, enquanto lida com novas ameaças e desafios no universo Star Trek.",
        fanRating: 7.9,
        criticRating: 7.6
    },
    {
        name: "Jornada nas Estrelas: Lower Decks",
        abbr: "LD",
        seasons: 3,
        episodes: 30,
        startYear: 2020,
        endYear: 2023,
        description: "Série animada de comédia que acompanha a tripulação de apoio da USS Cerritos em suas missões menos importantes.",
        fanRating: 8.4,
        criticRating: 8.2
    },
    {
        name: "Jornada nas Estrelas: Prodigy",
        abbr: "PRO",
        seasons: 1,
        episodes: 10,
        startYear: 2021,
        endYear: 2022,
        description: "Série animada que acompanha um grupo de jovens alienígenas que se encontram a bordo de uma nave estelar da Frota Estelar.",
        fanRating: 7.8,
        criticRating: 7.4
    },
    {
        name: "Jornada nas Estrelas: Strange New Worlds",
        abbr: "SNW",
        seasons: 1,
        episodes: 10,
        startYear: 2022,
        endYear: 2023,
        description: "Segue as aventuras da USS Enterprise sob o comando do Capitão Christopher Pike na década de 2260, antes da série original.",
        fanRating: 8.6,
        criticRating: 8.3
    },
    {
        name: "Jornada nas Estrelas: Lower Decks",
        abbr: "LD",
        seasons: 3,
        episodes: 30,
        startYear: 2020,
        endYear: 2023,
        description: "Série animada de comédia que acompanha a tripulação de apoio da USS Cerritos em suas missões menos importantes.",
        fanRating: 8.4,
        criticRating: 8.2
    }
];
  
const timeline = document.querySelector(".series-timeline");

seriesData.forEach(serie => {
  const serieBox = document.createElement("div");
  serieBox.classList.add("series-box", serie.abbr); // Adiciona classe com abbr da série

  const serieName = document.createElement("h2");
  serieName.classList.add("series-name");
  serieName.textContent = serie.name;
  serieBox.appendChild(serieName);

const description = document.createElement("p");
    description.textContent = serie.description; // Adicione uma breve descrição para cada série
    serieBox.appendChild(description);

const serieInfo = document.createElement("p");
  serieInfo.classList.add("series-info");
  serieInfo.innerHTML = `
    <strong>Anos:</strong> ${serie.startYear}-${serie.endYear}<br>
    <strong>Temporadas:</strong> ${serie.seasons}<br>
    <strong>Episódios:</strong> ${serie.episodes}<br>
    <strong>Avaliação dos Fãs:</strong> ${serie.fanRating}<br>
    <strong>Avaliação dos Críticos:</strong> ${serie.criticRating}
  `;
  serieBox.appendChild(serieInfo);

  timeline.appendChild(serieBox);
});

