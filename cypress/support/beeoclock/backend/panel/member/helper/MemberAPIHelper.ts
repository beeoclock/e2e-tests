export class MemberAPIHelper {
    public static createPutPayload(original: any, overrides: Partial<any> = {}) {
        return {
            _id: original._id,
            _version: original._version,
            state: original.state,
            stateHistory: original.stateHistory,
            createdAt: original.createdAt,
            updatedAt: original.updatedAt,
            firstName: overrides.firstName ?? original.firstName,
            lastName: original.lastName,
            email: original.email,
            phone: original.phone,
            avatar: original.avatar,
            role: original.role,
            roles: original.roles,
            profileStatus: original.profileStatus,
            assignments: original.assignments
        };
    }

}