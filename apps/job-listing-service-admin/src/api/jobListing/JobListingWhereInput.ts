import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JobListingWhereInput = {
  companyName?: StringNullableFilter;
  description?: StringNullableFilter;
  documents?: StringNullableFilter;
  id?: StringFilter;
  position?: StringNullableFilter;
  postedBy?: StringNullableFilter;
  qualifications?: StringNullableFilter;
  salary?: StringNullableFilter;
  skills?: StringNullableFilter;
};
