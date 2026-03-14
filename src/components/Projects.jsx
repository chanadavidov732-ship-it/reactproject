import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom'
import { deleteP,update } from '../store/ProjectsSlice'


import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { useForm } from 'react-hook-form';
import ProjectSingle from './ProjectSingle';

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
    const goToProject=(id)=>{
        navigate('/ProjectSingle',{ state: id })
    }
    return (
        <>
            <div>
                <button onClick={addProjFunc}>add project</button>
            </div>

            <div>
                {projects.map((project) => (
                    <div className="card flex justify-content-center">
                        <Card  title={project.name} subTitle={project.createdAt} footer={(
                            <>
                                <Button label="Delete" onClick={() => deleteFunc(project.id)} icon="pi pi-check" />
                                <Button label="Update" icon="pi pi-external-link" onClick={() => setVisible(true)} severity="secondary" style={{ marginLeft: '0.5em' }} />
                            </>
                        )}  className="md:w-25rem">
                            <p  onClick={() =>goToProject(project.id)}className="m-0">
                                {project.description}
                            </p>
                        </Card>
                        <div className="card flex justify-content-center">
                            <Dialog header="Update project items" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                                <form className="m-0" onSubmit={handleSubmit(onSubmit)}>
                                    <input type="hidden" value={project.id} {...register("proId")} />
                                    <div>
                                        <input placeholder="name" {...register("proName")} />
                                    </div>
                                    <div>
                                        <input placeholder="description"{...register("proDescription")} />
                                    </div>
                                    <button type="submit">update</button>
                                </form>
                            </Dialog>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Projects


