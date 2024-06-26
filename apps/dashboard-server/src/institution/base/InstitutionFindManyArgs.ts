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
import { InstitutionWhereInput } from "./InstitutionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { InstitutionOrderByInput } from "./InstitutionOrderByInput";

@ArgsType()
class InstitutionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InstitutionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => InstitutionWhereInput, { nullable: true })
  @Type(() => InstitutionWhereInput)
  where?: InstitutionWhereInput;

  @ApiProperty({
    required: false,
    type: [InstitutionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [InstitutionOrderByInput], { nullable: true })
  @Type(() => InstitutionOrderByInput)
  orderBy?: Array<InstitutionOrderByInput>;

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

export { InstitutionFindManyArgs as InstitutionFindManyArgs };
