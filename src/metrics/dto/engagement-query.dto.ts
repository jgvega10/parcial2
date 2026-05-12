import { Type } from 'class-transformer';
import { IsInt, IsNumber, Min } from 'class-validator';

export class EngagementQueryDto {
    
    @IsNumber()
    @Min(0)
    likes: number;

    @IsNumber()  
    @IsInt()
    @Min(0)
    comments: number;

    @IsNumber()
    @IsInt()
    @Min(1)
    followers: number;
}