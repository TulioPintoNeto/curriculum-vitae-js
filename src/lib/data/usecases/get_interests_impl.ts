import { GetInterests } from "../../domain/usecases/get_interests";
import { InterestsData } from "../content/side_menu/interests";

export class GetInterestsImpl implements GetInterests {
  interests: InterestsData;

  constructor(interests: InterestsData) {
    this.interests = interests;
  }

  call(): Map<string, string> {
    return this.interests.getInterests();
  }
}
