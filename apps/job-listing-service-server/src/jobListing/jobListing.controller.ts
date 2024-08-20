import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobListingService } from "./jobListing.service";
import { JobListingControllerBase } from "./base/jobListing.controller.base";

@swagger.ApiTags("jobListings")
@common.Controller("jobListings")
export class JobListingController extends JobListingControllerBase {
  constructor(
    protected readonly service: JobListingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
