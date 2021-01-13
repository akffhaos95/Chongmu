import { Repository, EntityRepository } from 'typeorm';
import { Board } from './entities/board.entity';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {}