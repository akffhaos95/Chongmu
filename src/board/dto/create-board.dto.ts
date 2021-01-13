import { IsString, IsNumber } from 'class-validator'

export class CreateBoardDto {
    
    @IsString()
    user: string;

    @IsString()
    title: string;

    @IsString()
    context: string;
}
