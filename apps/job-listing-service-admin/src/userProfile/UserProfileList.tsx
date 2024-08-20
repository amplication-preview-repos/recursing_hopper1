import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserProfiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
