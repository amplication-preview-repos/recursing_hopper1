import { SortOrder } from "../../util/SortOrder";

export type JobListingOrderByInput = {
  companyName?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  documents?: SortOrder;
  id?: SortOrder;
  position?: SortOrder;
  postedBy?: SortOrder;
  qualifications?: SortOrder;
  salary?: SortOrder;
  skills?: SortOrder;
  updatedAt?: SortOrder;
};
