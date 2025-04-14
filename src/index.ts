import './styles/styles.css';
import './components/GameCard';
import './components/GameDetail';
import { fetchGames } from './api/fetchGames';
import { GameAdapter } from './adapters/GameAdapter';
import { TransformedGame } from './types/TransformedGame';

const app = document.getElementById('app');

function showGameList() {
  app!.innerHTML = '';
  fetchGames().then((rawGames) => {
    const games: TransformedGame[] = GameAdapter.transformGames(rawGames);
    games.forEach((game) => {
      const card = document.createElement('game-card');
      card.setAttribute('id', game.id.toString());
      card.setAttribute('title', game.title);
      card.setAttribute('thumbnail', game.thumbnail);
      card.setAttribute('genre', game.genre);
      app!.appendChild(card);
    });
  });
}

function showGameDetail(id: string) {
  app!.innerHTML = '';
  const detail = document.createElement('game-detail') as any;
  app!.appendChild(detail);
  detail.setGame(id);
}

window.addEventListener('view-game-detail', (e: any) => {
  showGameDetail(e.detail.id);
});

window.addEventListener('back-to-list', () => {
  showGameList();
});

showGameList();
