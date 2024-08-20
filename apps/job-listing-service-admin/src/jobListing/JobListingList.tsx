import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const JobListingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"JobListings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
