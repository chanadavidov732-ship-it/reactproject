

export const changeStatuses = [
    { name: 'toDo', code: 'TD' },
    { name: 'inProgress', code: 'IN' },
    { name: 'Done', code: 'D' }
]

export const getSeverity = (value) => {
    switch (value) {
        case 'High':
            return 'danger';
        case 'Medium ':
            return 'warning';
        case 'Low ':
            return 'success';
        default:
            return null;
    }
}