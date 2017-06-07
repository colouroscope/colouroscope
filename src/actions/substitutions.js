export const addSubstitution = (id, from, to) => ({
    type: 'ADD_SUBSTITUTION',
    id,
    from,
    to,
})

export const setSubstitution = (id, from, to) => ({
    type: 'SET_SUBSTITUTION',
    id,
    from,
    to,
})

export const removeSubstitution = (id) => ({
    type: 'REMOVE_SUBSTITUTION',
    id,
})