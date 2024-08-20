import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="birthDate" source="birthDate" />
        <TextField label="contact" source="contact" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="education" source="education" />
        <TextField label="email" source="email" />
        <TextField label="experience" source="experience" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="name" source="name" />
        <TextField label="password" source="password" />
        <TextField label="qualification" source="qualification" />
        <TextField label="role" source="role" />
        <TextField label="skills" source="skills" />
        <TextField label="surname" source="surname" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
