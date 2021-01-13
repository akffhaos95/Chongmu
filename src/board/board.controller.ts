import { Controller, Get, Post, Body, Put, Param, Delete,Render, Redirect, Res } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  // Create
  @Post()
  @Redirect('board')
  create(@Body() createBoardDto: CreateBoardDto) {
    this.boardService.create(createBoardDto);
  }

  // Get All
  @Get()
  @Render('board')
  findAll() {
    return this.boardService.findAll();
  }

  // Get Detail
  @Get(':id')
  @Render('board_detail')
  findOne(@Param('id') id: number) {
    return this.boardService.findOne(+id);
  }

  // Update Form
  @Get(':id/update')
  @Render('board_update')
  update_board(@Param('id') id: string) {
    return this.boardService.findOne(+id);
  }

  // Update
  @Post(':id/update')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto, @Res() res) {
    this.boardService.update(+id, updateBoardDto);
    return res.redirect(`/board/${id}`)
  }

  // Delete
  @Post(':id/delete')
  remove(@Param('id') id: string, @Res() res) {
    this.boardService.remove(+id);
    console.log("test")
    return res.redirect(`/board`)
  }
}
