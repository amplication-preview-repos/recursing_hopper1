import { JobListing as TJobListing } from "../api/jobListing/JobListing";

export const JOBLISTING_TITLE_FIELD = "companyName";

export const JobListingTitle = (record: TJobListing): string => {
  return record.companyName?.toString() || String(record.id);
};
