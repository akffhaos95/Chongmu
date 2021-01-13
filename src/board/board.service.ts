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
    const all_board = await this.boradRepository.find();
    return { "board" : all_board };
  }

  public async findOne(id: number) {
    const one_board = await this.boradRepository.findOne(id);
    if(one_board === undefined) {
      throw new NotFoundException(`올바르지 않은 접근 ${id}`)
    }
    return { "board" : one_board };
  }

  public async update_board(id: number) {
    const update_board = await this.boradRepository.findOne(id);
    if(update_board === undefined) {
      throw new NotFoundException(`올바르지 않은 접근 ${id}`)
    }
    return { "board" : update_board };
  }

  public async update(id: number, updateBoardDto: UpdateBoardDto) {
    const update_board = await this.boradRepository.findOne(id);
    console.log(updateBoardDto.title);
    console.log(updateBoardDto.context)
    update_board.title = updateBoardDto.title;
    update_board.context = updateBoardDto.context;

    const board = await this.boradRepository.save(update_board)
    return board.id;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
