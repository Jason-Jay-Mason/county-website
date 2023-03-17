import { GroupListFieldPlugin } from "tinacms";

export const labeledGroupList = {
  ...GroupListFieldPlugin,
  name: "labeled-group-list",
  Component: (props) => {
    const field = {
      ...props.field,
      itemProps: (item) => {
        return {
          label: item.title,
        };
      },
    };
    return <GroupListFieldPlugin.Component {...props} field={field} />;
  },
};
