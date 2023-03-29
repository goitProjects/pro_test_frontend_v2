import { langValuesOptions } from "./langValuesOptions";

export const options = Object.values(langValuesOptions).map(
  ({ name, title }) => ({ value: name, label: title })
);
