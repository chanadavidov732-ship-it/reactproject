import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { deleteP, update } from '../store/ProjectsSlice'

import React, { useState, useEffect } from 'react'
import { DataView, DataViewLayoutOptions } from 'primereact/dataview'
import { Rating } from 'primereact/rating'
import { Tag } from 'primereact/tag'
import { classNames } from 'primereact/utils'

import { Dialog } from 'primereact/dialog'
import { useForm } from 'react-hook-form'
import ProjectSingle from './ProjectSingle'

const Projects = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const projects = useSelector(state => state.ProjectsSlice.list)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [visible, setVisible] = useState(false);
    const deleteFunc = (id) => {
        dispatch(deleteP(id))
    }

    const updateFunc = () => {
    }

    const onSubmit = (data) => {
        setVisible(false)
        dispatch(update({ id: data.proId, name: data.proName, description: data.proDescription }))
    }
    
    const addProjFunc = () => {
        navigate('/NewProject')
    }
    const goToProject = (id) => {
        navigate('/ProjectSingle', { state: id })
    }
    const [layout, setLayout] = useState('grid');

    const listItem = (project, index) => {
        return (
            <div className="col-12 p-3" key={project.id}>
                <div className={classNames('flex flex-column md:flex-row align-items-center p-3 gap-4 border-round shadow-1 surface-card', { 'border-top-1 surface-border': index !== 0 })}>
                    <div className="flex-1 text-center md:text-left">
                        <div className="text-2xl font-bold text-900 mb-1">{project.name}</div>
                        <div className="text-500 mb-3">{new Date(project.createdAt).toLocaleDateString()}</div>
                        <p className="m-0 text-700 cursor-pointer" onClick={() => goToProject(project.id)}>
                            {project.description}
                        </p>
                    </div>
                    <div className="flex flex-row md:flex-column gap-2">
                        <Button label="Update" icon="pi pi-pencil" severity="secondary" className="p-button-sm" onClick={() => {
                            setSelectedProject(project);
                            setVisible(true);
                        }} />
                        <Button label="Delete" icon="pi pi-trash" severity="danger" className="p-button-sm" onClick={() => deleteFunc(project.id)} />
                    </div>
                </div>
            </div>
        )
    }

    const gridItem = (project) => {
        return (
            <div className="col-12 sm:col-6 lg:col-4 p-2" key={project.id}>
                <Card
                    title={project.name}
                    subTitle={new Date(project.createdAt).toLocaleDateString()}
                    footer={(
                        <div className="flex gap-2">
                            <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={() => deleteFunc(project.id)} />
                            <Button label="Update" icon="pi pi-pencil" severity="secondary" onClick={() => {
                                setSelectedProject(project)
                                setVisible(true)
                            }} />
                        </div>
                    )}
                    className="h-full shadow-2"
                >
                    <p className="m-0 cursor-pointer text-700" onClick={() => goToProject(project.id)}>
                        {project.description}
                    </p>
                </Card>
            </div>
        )
    }
    
    const itemTemplate = (project, layout, index) => {
        if (!project)
            return

        if (layout === 'list') return listItem(project, index);
        else if (layout === 'grid') return gridItem(project);
    }

    const listTemplate = (projects, layout) => {
        return <div className="grid grid-nogutter">{projects.map((project, index) => itemTemplate(project, layout, index))}</div>;
    }

    const header = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <Button
                    label="Add Project"
                    icon="pi pi-plus"
                    severity="success"
                    onClick={addProjFunc}
                />
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        )
    }

    return (
        <div className="card p-4">
            <DataView
                value={projects}
                listTemplate={listTemplate}
                layout={layout}
                header={header()}
                paginator
                rows={6}
            />

            <Dialog header="Update Project Details" visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)}>
                <form className="flex flex-column gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" {...register("proId")} />
                    <div className="flex flex-column gap-2">
                        <label htmlFor="proName">Project Name</label>
                        <input className="p-inputtext p-component" id="proName" placeholder="Name" {...register("proName")} />
                    </div>
                    <div className="flex flex-column gap-2">
                        <label htmlFor="proDescription">Description</label>
                        <input className="p-inputtext p-component" id="proDescription" placeholder="Description" {...register("proDescription")} />
                    </div>
                    <Button type="submit" label="Update Project" icon="pi pi-check" className="mt-2" />
                </form>        
                </Dialog>
        </div>
    )
}

export default Projects


