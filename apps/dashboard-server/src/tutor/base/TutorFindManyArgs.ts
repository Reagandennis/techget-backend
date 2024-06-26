/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TutorWhereInput } from "./TutorWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TutorOrderByInput } from "./TutorOrderByInput";

@ArgsType()
class TutorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TutorWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TutorWhereInput, { nullable: true })
  @Type(() => TutorWhereInput)
  where?: TutorWhereInput;

  @ApiProperty({
    required: false,
    type: [TutorOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TutorOrderByInput], { nullable: true })
  @Type(() => TutorOrderByInput)
  orderBy?: Array<TutorOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TutorFindManyArgs as TutorFindManyArgs };
