import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JobListingModuleBase } from "./base/jobListing.module.base";
import { JobListingService } from "./jobListing.service";
import { JobListingController } from "./jobListing.controller";
import { JobListingResolver } from "./jobListing.resolver";

@Module({
  imports: [JobListingModuleBase, forwardRef(() => AuthModule)],
  controllers: [JobListingController],
  providers: [JobListingService, JobListingResolver],
  exports: [JobListingService],
})
export class JobListingModule {}
