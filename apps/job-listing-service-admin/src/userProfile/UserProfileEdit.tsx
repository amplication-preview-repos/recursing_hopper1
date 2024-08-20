import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="birthDate" source="birthDate" />
        <TextInput label="contact" source="contact" />
        <TextInput label="education" source="education" />
        <TextInput label="email" source="email" />
        <TextInput label="experience" source="experience" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <TextInput label="password" source="password" />
        <TextInput label="qualification" source="qualification" />
        <TextInput label="role" source="role" />
        <TextInput label="skills" source="skills" />
        <TextInput label="surname" source="surname" />
      </SimpleForm>
    </Edit>
  );
};
