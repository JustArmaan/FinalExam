import { IQueue } from "./IQueue";
import { ILocation } from "./ILocation";

export interface IClinic {
  clinicId: number;
  staffSize: number;
  blockNumber: string;
  queue: IQueue;
  currentIntake: number;
  location: ILocation;
}
