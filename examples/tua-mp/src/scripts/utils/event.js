export const getValFromEvent = ({ detail, currentTarget }) =>
    ({ ...detail, ...currentTarget.dataset })
