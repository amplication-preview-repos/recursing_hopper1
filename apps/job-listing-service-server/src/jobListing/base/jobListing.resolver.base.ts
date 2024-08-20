/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { JobListing } from "./JobListing";
import { JobListingCountArgs } from "./JobListingCountArgs";
import { JobListingFindManyArgs } from "./JobListingFindManyArgs";
import { JobListingFindUniqueArgs } from "./JobListingFindUniqueArgs";
import { CreateJobListingArgs } from "./CreateJobListingArgs";
import { UpdateJobListingArgs } from "./UpdateJobListingArgs";
import { DeleteJobListingArgs } from "./DeleteJobListingArgs";
import { JobListingService } from "../jobListing.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => JobListing)
export class JobListingResolverBase {
  constructor(
    protected readonly service: JobListingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "JobListing",
    action: "read",
    possession: "any",
  })
  async _jobListingsMeta(
    @graphql.Args() args: JobListingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [JobListing])
  @nestAccessControl.UseRoles({
    resource: "JobListing",
    action: "read",
    possession: "any",
  })
  async jobListings(
    @graphql.Args() args: JobListingFindManyArgs
  ): Promise<JobListing[]> {
    return this.service.jobListings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => JobListing, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "JobListing",
    action: "read",
    possession: "own",
  })
  async jobListing(
    @graphql.Args() args: JobListingFindUniqueArgs
  ): Promise<JobListing | null> {
    const result = await this.service.jobListing(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => JobListing)
  @nestAccessControl.UseRoles({
    resource: "JobListing",
    action: "create",
    possession: "any",
  })
  async createJobListing(
    @graphql.Args() args: CreateJobListingArgs
  ): Promise<JobListing> {
    return await this.service.createJobListing({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => JobListing)
  @nestAccessControl.UseRoles({
    resource: "JobListing",
    action: "update",
    possession: "any",
  })
  async updateJobListing(
    @graphql.Args() args: UpdateJobListingArgs
  ): Promise<JobListing | null> {
    try {
      return await this.service.updateJobListing({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => JobListing)
  @nestAccessControl.UseRoles({
    resource: "JobListing",
    action: "delete",
    possession: "any",
  })
  async deleteJobListing(
    @graphql.Args() args: DeleteJobListingArgs
  ): Promise<JobListing | null> {
    try {
      return await this.service.deleteJobListing(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
