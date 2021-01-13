import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { BoardRepository } from './board.repository';

@Module({
  imports: [ TypeOrmModule.forFeature([ BoardRepository ]) ],
  controllers: [BoardController],
  providers: [BoardService]
})
export class BoardModule {}
