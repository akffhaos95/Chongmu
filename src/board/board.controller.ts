import { Controller, Get, Post, Body, Put, Param, Delete,Render, Redirect } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  @Redirect('board')
  create(@Body() createBoardDto: CreateBoardDto) {
    const created_borad_id = this.boardService.create(createBoardDto);
  }

  @Get()
  @Render('board')
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  @Render('viewcontext')
  findOne(@Param('id') id: number) {
    return this.boardService.findOne(+id);
  }

  @Get(':id/update')
  @Render('update')
  update_board(@Param('id') id: string) {
    return this.boardService.update_board(+id);
  }

  @Put(':id')
  @Redirect('board')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    console.log("test")
    const updated_board_id = this.boardService.update(+id, updateBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(+id);
  }
}
