/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserProfileService } from "../userProfile.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserProfileCreateInput } from "./UserProfileCreateInput";
import { UserProfile } from "./UserProfile";
import { UserProfileFindManyArgs } from "./UserProfileFindManyArgs";
import { UserProfileWhereUniqueInput } from "./UserProfileWhereUniqueInput";
import { UserProfileUpdateInput } from "./UserProfileUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserProfileControllerBase {
  constructor(
    protected readonly service: UserProfileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserProfile })
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUserProfile(
    @common.Body() data: UserProfileCreateInput
  ): Promise<UserProfile> {
    return await this.service.createUserProfile({
      data: data,
      select: {
        birthDate: true,
        contact: true,
        createdAt: true,
        education: true,
        email: true,
        experience: true,
        id: true,
        location: true,
        name: true,
        password: true,
        qualification: true,
        role: true,
        skills: true,
        surname: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserProfile] })
  @ApiNestedQuery(UserProfileFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userProfiles(@common.Req() request: Request): Promise<UserProfile[]> {
    const args = plainToClass(UserProfileFindManyArgs, request.query);
    return this.service.userProfiles({
      ...args,
      select: {
        birthDate: true,
        contact: true,
        createdAt: true,
        education: true,
        email: true,
        experience: true,
        id: true,
        location: true,
        name: true,
        password: true,
        qualification: true,
        role: true,
        skills: true,
        surname: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userProfile(
    @common.Param() params: UserProfileWhereUniqueInput
  ): Promise<UserProfile | null> {
    const result = await this.service.userProfile({
      where: params,
      select: {
        birthDate: true,
        contact: true,
        createdAt: true,
        education: true,
        email: true,
        experience: true,
        id: true,
        location: true,
        name: true,
        password: true,
        qualification: true,
        role: true,
        skills: true,
        surname: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUserProfile(
    @common.Param() params: UserProfileWhereUniqueInput,
    @common.Body() data: UserProfileUpdateInput
  ): Promise<UserProfile | null> {
    try {
      return await this.service.updateUserProfile({
        where: params,
        data: data,
        select: {
          birthDate: true,
          contact: true,
          createdAt: true,
          education: true,
          email: true,
          experience: true,
          id: true,
          location: true,
          name: true,
          password: true,
          qualification: true,
          role: true,
          skills: true,
          surname: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserProfile(
    @common.Param() params: UserProfileWhereUniqueInput
  ): Promise<UserProfile | null> {
    try {
      return await this.service.deleteUserProfile({
        where: params,
        select: {
          birthDate: true,
          contact: true,
          createdAt: true,
          education: true,
          email: true,
          experience: true,
          id: true,
          location: true,
          name: true,
          password: true,
          qualification: true,
          role: true,
          skills: true,
          surname: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
