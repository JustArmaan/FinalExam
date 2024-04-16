export interface IQueue {
    enqueue(person: any ): void; // should be an array
    dequeue(entity: any): void; // entity should not be any, ran out of time
    total(): number;
    getCurrentWaitTime(): string;
  }
  