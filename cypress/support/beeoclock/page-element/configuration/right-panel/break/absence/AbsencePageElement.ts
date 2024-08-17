import {AbsenceFromDate} from "./absence-range/AbsenceFromDate";
import {AbsenceFromTime} from "./absence-range/AbsenceFromTime";
import {AbsenceToDate} from "./absence-range/AbsenceToDate";
import {AbsentToTime} from "./absence-range/AbsentToTime";
import {AbsenceNoteInput} from "./absence-note/AbsenceNoteInput";

export class AbsencePageElement {

    public static AbsenceFromDate: AbsenceFromDate = new AbsenceFromDate()
    public static AbsenceFromTime: AbsenceFromTime = new AbsenceFromTime()
    public static AbsenceToDate: AbsenceToDate = new AbsenceToDate()
    public static AbsentToTime: AbsentToTime = new AbsentToTime()
    public static AbsenceNoteInput: AbsenceNoteInput = new AbsenceNoteInput()
}