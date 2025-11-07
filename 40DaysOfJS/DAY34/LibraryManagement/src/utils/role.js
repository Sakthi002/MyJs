export function getRole(user) {
    if(!user || typeof user.getRole !== 'function') {
        throw new Error('Invalid User Object');
    }

    return user.getRole();
}