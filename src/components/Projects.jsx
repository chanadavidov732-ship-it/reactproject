import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom'
import { deleteP } from '../store/ProjectsSlice'
import ListItem from './ListItem';
import GridtItem from './GridItem'
import  { useState } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import UpdateProject from './UpdateProject';
import NewProject from './NewProject';


const Projects = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const projects = useSelector(state => state.ProjectsSlice.list)
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);

    const [selectedProject, setSelectedProject] = useState(null);
    const [ifAddProject, setIfAddProject] = useState(false)
    const [layout, setLayout] = useState('grid');

    const deleteFunc = (id) => {
        dispatch(deleteP(id))
    }
    const updateFunc = (id) => {
        setSelectedProject(id);
        setVisible(true);

    }

    const addProjFunc = () => {
        setIfAddProject(true)
        setVisible2(true);
    }
    const goToProject = (id) => {
        navigate('/ProjectSingle', { state: id })
    }

    const itemTemplate = (project, layout, index) => {
        if (!project)
            return;
        if (layout === 'list') return <ListItem project={project} index={index} addProjFunc={addProjFunc} deleteFunc={deleteFunc} updateFunc={updateFunc} goToProject={goToProject} />
        else if (layout === 'grid') return <GridtItem project={project} index={index} addProjFunc={addProjFunc} deleteFunc={deleteFunc} updateFunc={updateFunc} goToProject={goToProject} />

    }
    const listTemplate = (projects, layout) => {
        return <div className="grid grid-nogutter">{projects.map((project, index) => itemTemplate(project, layout, index))}</div>
    }
    const header = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <Button style={{ backgroundColor: '#06b6d4', borderColor: '#06b6d4', }} label="Add Project" icon="pi pi-plus" severity="success" onClick={addProjFunc} />
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        )
    }
    return (
        <div className="card p-4">
            <DataView value={projects} listTemplate={listTemplate} layout={layout} header={header()} rows={6} />
            {selectedProject && (
                <UpdateProject id={selectedProject} visible={visible} setVisible={setVisible} />
            )}
            {ifAddProject && (
                <NewProject visible2={visible2} setVisible2={setVisible2}/>
            )}
        </div>
    )
}

export default Projects


