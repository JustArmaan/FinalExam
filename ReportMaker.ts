import { IReport } from "./Interfaces/IReport";

export class ReportMaker {
    report: IReport;

    constructor(report: IReport) {
        this.report = report
    }

    printDetails() {
        this.report.printDetails();
    }
}