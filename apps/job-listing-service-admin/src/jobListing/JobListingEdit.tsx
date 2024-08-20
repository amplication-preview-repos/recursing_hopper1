import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const JobListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="companyName" source="companyName" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="documents" source="documents" />
        <TextInput label="position" source="position" />
        <TextInput label="postedBy" source="postedBy" />
        <TextInput label="qualifications" source="qualifications" />
        <TextInput label="salary" source="salary" />
        <TextInput label="skills" source="skills" />
      </SimpleForm>
    </Edit>
  );
};
