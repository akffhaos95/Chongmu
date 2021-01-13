import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {
  
  constructor(private readonly boradRepository: BoardRepository ) {}

  public async create(createBoardDto: CreateBoardDto) {
    const new_board = this.boradRepository.create();
    new_board.user = createBoardDto.user;
    new_board.title = createBoardDto.title;
    new_board.context = createBoardDto.context;

    const board = await this.boradRepository.save(new_board)
    return board.id;
  }

  public async findAll() {
    const boards = await this.boradRepository.find();
    return { "boards" : boards };
  }

  public async findOne(id: number) {
    const board = await this.boradRepository.findOne(id);
    if(board === undefined) {
      throw new NotFoundException(`올바르지 않은 접근 ${id}`)
    }
    return { "board" : board };
  }

  public async update(id: number, updateBoardDto: UpdateBoardDto) {
    const board = await this.boradRepository.findOne(id);
    board.title = updateBoardDto.title;
    board.context = updateBoardDto.context;

    await this.boradRepository.save(board)
  }

  remove(id: number) {
    this.boradRepository.delete(id);
  }
}
