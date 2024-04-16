import { IPerson } from "./Interfaces/IPerson";
import { IQueue } from "./Interfaces/IQueue";


interface QueuePriority {
    priority: number;

}

export class Queue implements IQueue{
    private peopleQueue = [];
    private totalLimit:number;
    constructor(setLimit: number) {
        this.totalLimit = setLimit
    }

    enqueue(_person: IPerson): void {
        if(this.total() > this.totalLimit) {
            throw new Error("We have reached the limit ")
        }
        this.peopleQueue.push(_person);
    }

    dequeue(): void {
        this.peopleQueue.shift()
    }

    total() {
        return this.peopleQueue.length;
    }

    getCurrentWaitTime(): string {
        const wait = this.total() * 15;
        return `Queue wait time is ${wait} minutes`;

    }

    getQueueList() {
        return this.peopleQueue;
    }

}