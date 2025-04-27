import {IOrderAppointmentDetailsDto} from "../interfaces/IOrderAppointmentDetailsDto";
import {StateEnum} from "../../enum/StateEnum";
import {StateHistoryBuilder} from "../../../state/builder/StateHistoryBuilder";
import {DateUtils} from "../../../../Utils/DateUtils";
import {IStateHistory} from "../../../state/interface/IStateHistory";

export class OrderAppointmentBuilder {
    private appointment: IOrderAppointmentDetailsDto
    private stateHistory: IStateHistory = new StateHistoryBuilder()
        .setState(StateEnum.active)
        .setSetAt(DateUtils.getCurrentDateIso())
        .build()

    constructor() {
        this.appointment = {
            object: "OrderAppointmentDetailsDto",
            start: "2025-02-25T17:30:00.000Z",
            end: "2025-02-25T18:30:00.000Z",
            type: "service",
            languageCodes: ["pl"],
            specialists: [
                {
                    object: "SpecialistDto",
                    wasSelectedAnybody: false,
                    member: {
                        "_id": "6667146c8f690c5f4c3c9596",
                        "createdAt": "2024-06-10T14:57:48.976Z",
                        "updatedAt": "2025-01-15T11:33:22.735Z",
                        "stateHistory": [
                            {
                                "state": StateEnum.active,
                                "setAt": "2025-02-24T10:49:21.157Z"
                            }
                        ],
                        "state": StateEnum.active,
                        "email": "Fryzjer@example.com",
                        "avatar": {
                            "object": "MediaDto",
                            "_id": "670a78b3892d3f612635e329",
                            "createdAt": "2024-10-12T13:25:07.708Z",
                            "updatedAt": "2024-10-12T13:25:07.708Z",
                            "state": "active",
                            "stateHistory": [
                                {
                                    "state": StateEnum.active,
                                    "setAt": "2025-02-24T10:49:21.209Z"
                                }
                            ],
                            "url": "https://storage.googleapis.com/beeoclock-develop.appspot.com/media/662a4637a4b376d20c065b1d/member/6667146c8f690c5f4c3c9596/avatar/670a78b3892d3f612635e329/original.jpeg?updatedAt=2024-10-12T13:25:07.708Z",
                            "mediaType": "memberAvatar",
                            "metadata": {
                                "object": "MediaMetadataDto",
                                "height": 676,
                                "size": 29165,
                                "width": 507,
                                "original": false,
                                "format": ""
                            },
                            "_version": "1"
                        },
                        "firstName": "Tomasz",
                        "lastName": "Zalewski",
                        "role": "SPECIALIST",
                        "profileStatus": "active",
                        "assignments": {
                            "service": {
                                "service": {
                                    "_id": "662a463df9e016e25438c500",
                                    "state": null,
                                    "createdAt": DateUtils.getCurrentDateIso(),
                                    "stateHistory": [this.stateHistory],
                                    "object": "ServiceDto",
                                    "_version": "1",
                                    "updatedAt": null,
                                    "order": 1
                                },
                                "object": 'ServiceDto'
                            },
                            "object": 'ServiceDto'
                        },
                        "_version": "1",
                        "object": "MemberDto",
                        "phone": "000000000"
                    }
                }
            ],
            attendees: [
                {
                    customer: {
                        "object": "CustomerDto",
                        "createdAt": "2025-02-25T09:37:56.085Z",
                        "updatedAt": "2025-02-25T09:37:56.085Z",
                        "_id": "67bd8f7452117c3de1196e27",
                        "state": "active",
                        "firstName": null,
                        "lastName": null,
                        "email": null,
                        "phone": null,
                        "note": null,
                        "customerType": "anonymous",
                        "_version": "",
                        "stateHistory": [this.stateHistory]
                    },
                    object: "",
                    firstTime: false
                }
            ],
            timeZone: "Europe/Warsaw",
            createdAt: "2025-02-25T09:38:05.888Z",
            updatedAt: "2025-02-25T09:38:05.888Z",
            attachments: [],
            locations: []
        }
    }

    public getAppointment(): IOrderAppointmentDetailsDto {
        return this.appointment;
    }
}


