import {AbsenceActionPage} from "./absence-action/AbsenceActionPage";
import {AbsenceTableVerifier} from "./table-verifier/AbsenceTableVerifier";
import {AbsenceFilterPage} from "./absence-filter/AbsenceFilterPage";

export class AbsencePages {

    public static AbsenceActionPage: AbsenceActionPage = new AbsenceActionPage()
    public static AbsenceTableVerifier: AbsenceTableVerifier = new AbsenceTableVerifier()
    public static AbsenceFilterPage: AbsenceFilterPage = new AbsenceFilterPage()
}