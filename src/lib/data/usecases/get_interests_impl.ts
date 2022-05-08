import { InterestsData } from "../content/side_menu/interests";

export class GetInterestsImpl {
  interests: InterestsData;

  constructor(interests: InterestsData) {
    this.interests = interests;
  }

  call(): Map<string, string> {
    return this.interests.getInterests();
  }
}
