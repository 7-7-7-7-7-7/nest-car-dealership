import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {

  @IsString()
  @IsOptional()
  @IsUUID()
  readonly uuid?: string;

  @IsOptional()
  @IsString()
  readonly brand?: string;

  @IsOptional()
  @IsString()
  readonly model?: string;
}
