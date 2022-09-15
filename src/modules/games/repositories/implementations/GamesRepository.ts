import { getRepository, Repository } from "typeorm";

import { User } from "../../../users/entities/User";
import { Game } from "../../entities/Game";

import { IGamesRepository } from "../IGamesRepository";

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    const query = this.repository.createQueryBuilder("games");

    query.where("games.title ilike :title", { title: `%${param}%` });

    const games = await query.getMany();

    return games;
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query("SELECT COUNT(id) FROM games"); // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    const query = this.repository.createQueryBuilder("games");

    query
      .leftJoinAndSelect("games.users", "users")
      .andWhere("games.id = :id", { id });

    const games = await query.getMany();

    const [users] = games.map((game) => game.users);

    return users;
  }
}
