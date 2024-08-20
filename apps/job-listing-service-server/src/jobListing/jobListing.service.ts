import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobListingServiceBase } from "./base/jobListing.service.base";

@Injectable()
export class JobListingService extends JobListingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
