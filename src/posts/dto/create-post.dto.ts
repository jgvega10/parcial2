import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreatePostDto {

    @IsString()
    @IsNotEmpty()
    caption:string;

    @IsNumber()
    @IsOptional()
    @Min(0)
    likes:number;
}
