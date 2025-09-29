const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Permite frontend acessar

// Seu "banco" de artistas
const artists = [
  {
    name: "Orochi",
    image: "https://i.scdn.co/image/ab6761610000e5eb90b1775a323db4e9ec05b0dc",
    albums: ["Celebridade", "Feito pra Mim"]
  },
  {
    name: "MC IG",
    image: "https://i.scdn.co/image/ab6761610000e5ebd9fee554b5ae9ad3427c0320",
    albums: ["Deixa Rolar", "Jovem Ouro"]
  },
  {
    name: "Veigh",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845ed52ae23a0c2600ae34c9d5",
    albums: ["Dos Prédios"]
  },
  {
    name: "Cabelinho",
    image: "https://i.scdn.co/image/ab67616d0000b273a5d231f6ff09cca97cacd6bd",
    albums: ["Little Hair"]
  },
  {
    name: "MC Lucky",
    image: "https://i.scdn.co/image/ab6761610000e5ebec1fef19ee9676f9ce662f39",
    albums: ["Malvadinho"]
  },
  {
    name: "Joãozinho VT",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8477251abeb4082ca1f908c743",
    albums: ["Música Calculista"]
  },
];

// Seu "banco" de álbuns
const albums = [
  {
    artist: "Orochi",
    name: "Celebridade",
    image: "https://i.scdn.co/image/ab67616d0000b273ef0cf4ca4310f614ca2d475e"
  },
  {
    artist: "Veigh",
    name: "Dos Prédios",
    image: "https://i.scdn.co/image/ab67616d0000b273afdd3ee20cd7c4a636b07cce"
  },
  {
    artist: "MC IG",
    name: "Ninguém Tá Puro",
    image: "https://i.ytimg.com/vi/oFXoPvIrwtQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZsnAwxu4cNgavCgqqZ3Z1_E4bgw"
  },
  {
    artist: "Joãozinho VT",
    name: "Calculista",
    image: "https://i.scdn.co/image/ab67616d0000b27385fb097ee8f85b4e98727c84"
  },
  {
    artist: "Cabelinho",
    name: "Little Hair",
    image: "https://i.scdn.co/image/ab67616d0000b2734f90d64d24d84a45e823c76e"
  },
  {
    artist: "MC Lucky",
    name: "Desacato",
    image: "https://i.scdn.co/image/ab67616d0000b2733c4401cf203d79e03976be97"
  }
];

// Endpoints simples
app.get('/api/artists', (req, res) => {
  res.json(artists);
});

app.get('/api/albums', (req, res) => {
  res.json(albums);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
