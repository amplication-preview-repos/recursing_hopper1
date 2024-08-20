import { JobListingWhereInput } from "./JobListingWhereInput";
import { JobListingOrderByInput } from "./JobListingOrderByInput";

export type JobListingFindManyArgs = {
  where?: JobListingWhereInput;
  orderBy?: Array<JobListingOrderByInput>;
  skip?: number;
  take?: number;
};
