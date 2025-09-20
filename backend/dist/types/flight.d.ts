export interface Flight {
    "id": string;
    "aircraft": {
        "name": string;
        "registration": string;
        "airline": string;
    };
    "flightData": {
        "date": string;
        "balance": number;
        "route": {
            "from": string;
            "to": string;
        };
        "xp": number;
        "missionBonus": number;
    };
}
//# sourceMappingURL=flight.d.ts.map