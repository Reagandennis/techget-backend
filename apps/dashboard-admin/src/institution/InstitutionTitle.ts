import { Institution as TInstitution } from "../api/institution/Institution";

export const INSTITUTION_TITLE_FIELD = "id";

export const InstitutionTitle = (record: TInstitution): string => {
  return record.id?.toString() || String(record.id);
};
