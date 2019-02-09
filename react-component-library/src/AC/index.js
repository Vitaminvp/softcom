export function appendUsers(users) {
    return {
        type: 'ADD',
        payload: users
    }
}
export function insertbefore(users) {
    return {
        type: 'INSERT',
        payload: users
    }
}

export function overwriteUsers(users) {
    return {
        type: 'WRITE',
        payload: users
    }
}


export function incPage() {
    return {
        type: 'INC'
    }
}
export function setPage() {
    return {
        type: 'SET'
    }
}

export function buttonTrue() {
    return {
        type: 'TRUE'
    }
}
export function buttonFalse() {
    return {
        type: 'FALSE'
    }
}