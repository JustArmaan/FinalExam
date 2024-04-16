import { ILocation } from "./ILocation";
import { IPerson } from "./IPerson";

export interface IHousehold {
  houseHoldBlock: number;
  location: ILocation;
  members: IPerson[];
}
