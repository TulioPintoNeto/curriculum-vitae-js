import { Interests } from "../content/side_menu/interests";

export class GetInterestsImpl {
  interests: Interests;

  constructor(interests: Interests) {
    this.interests = interests;
  }

  call(): Map<string, string> {
    return this.interests.getInterests();
  }
}
