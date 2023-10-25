export const incrementNumber = (value) => {
    return {
        type: 'INCREMENT',
        payload: value
    }
}

export const decrementNumber = (value) => {
    return {
        type: 'DECREMENT',
        payload: value
    }
}