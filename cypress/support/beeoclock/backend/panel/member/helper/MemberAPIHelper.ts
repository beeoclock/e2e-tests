export class MemberAPIHelper {
    public static createPutPayload(original: any, overrides: Partial<any> = {}) {
        return {
            _id: original._id,
            _version: original._version,
            state: overrides.state ?? original.state,
            stateHistory: original.stateHistory,
            createdAt: original.createdAt,
            updatedAt: original.updatedAt,
            firstName: overrides.firstName ?? original.firstName,
            lastName: overrides.lastName ?? original.lastName,
            email: overrides.email ?? original.email,
            phone: overrides.phone ?? original.phone,
            avatar: overrides.avater ?? original.avatar,
            role: overrides.role ?? original.role,
            roles: original.roles,
            profileStatus: original.profileStatus,
            assignments: original.assignments
        };
    }
}