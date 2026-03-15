import { Calendar } from 'primereact/calendar'

const DateEditor = ({ options }) => {

    return (
        <Calendar
            value={options.value}
            onChange={(e) => options.editorCallback(e.value)}
            dateFormat="dd/mm/yy"
            placeholder="בחר תאריך"
        />
    )
}


export default DateEditor