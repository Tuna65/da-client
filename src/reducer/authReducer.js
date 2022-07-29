export const AuthReducer = (authState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_AUTH':
            return {
                ...authState,
            };

        default:
            return authState;
    }
};
