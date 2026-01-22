export interface Student {
    id: string;
    name: string;
    nic: string; // National Identity Card
    trade: string;
    nvqLevel: string; // Level 3, 4, etc.
    completionStatus: "Completed" | "Following" | "Drop Out" | "Pending";
    date: string; // Date of entry or completion
}

export const MOCK_STUDENTS: Student[] = [
    {
        id: "1",
        name: "A.M. Perera",
        nic: "981234567V",
        trade: "ICT",
        nvqLevel: "4",
        completionStatus: "Completed",
        date: "2025-01-15",
    },
    {
        id: "2",
        name: "K.S. Silva",
        nic: "995678123V",
        trade: "Automobile",
        nvqLevel: "3",
        completionStatus: "Following",
        date: "2025-02-01",
    },
    {
        id: "3",
        name: "R.J. Jayasinghe",
        nic: "200012345678",
        trade: "Construction",
        nvqLevel: "4",
        completionStatus: "Completed",
        date: "2024-12-10",
    },
];
