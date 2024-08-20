import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const JobListingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="companyName" source="companyName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="documents" source="documents" />
        <TextField label="ID" source="id" />
        <TextField label="position" source="position" />
        <TextField label="postedBy" source="postedBy" />
        <TextField label="qualifications" source="qualifications" />
        <TextField label="salary" source="salary" />
        <TextField label="skills" source="skills" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
