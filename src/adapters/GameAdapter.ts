import { TransformedGame } from '../types/TransformedGame';

export const transformGame = (game: any): TransformedGame => {
  return {
    id: game.id,
    title: game.title,
    thumbnail: game.thumbnail,
    short_description: game.short_description,
    game_url: game.game_url,
    genre: game.genre,
    platform: game.platform,
    publisher: game.publisher,
    developer: game.developer,
    release_date: game.release_date,
    freetogame_profile_url: game.freetogame_profile_url,
  };
};

export class GameAdapter {
  public static transformGames(games: any[]): TransformedGame[] {
    return games.map(transformGame);
  }
}
