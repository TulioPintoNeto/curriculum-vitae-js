import { ContactTitle } from "../content/titles/contact_title";
import { InterestsTitle } from "../content/titles/interests_title";
import { OthersTitle } from "../content/titles/others_title";

export interface GetTitlesParams {
  contactTitle: ContactTitle;
  interestsTitle: InterestsTitle;
  othersTitle: OthersTitle;
}
