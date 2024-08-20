import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserProfileWhereInput = {
  birthDate?: StringNullableFilter;
  contact?: StringNullableFilter;
  education?: StringNullableFilter;
  email?: StringNullableFilter;
  experience?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  qualification?: StringNullableFilter;
  role?: StringNullableFilter;
  skills?: StringNullableFilter;
  surname?: StringNullableFilter;
};
