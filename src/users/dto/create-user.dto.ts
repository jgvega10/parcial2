import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    username:string

    @IsString()
    @IsOptional()
    bio:string;

    @IsNumber()
    @Min(0)
    followers:number;

}
