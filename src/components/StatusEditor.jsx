import React from 'react'
import { Dropdown } from 'primereact/dropdown'
import { Tag } from 'primereact/tag'
import {  getSeverity } from '../utils/constants'

const StatusEditor = ({options,statuses}) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a priority"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        )
}


export default StatusEditor