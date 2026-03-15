import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
const ListItem = ({project, index,deleteFunc,updateFunc,goToProject}) => {
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
                        <Button label="Update" icon="pi pi-pencil" severity="secondary" className="p-button-sm" onClick={() => updateFunc(project.id)} />
                        <Button label="Delete" icon="pi pi-trash" severity="danger" className="p-button-sm" onClick={() => deleteFunc(project.id)} />
                    </div>
                </div>
            </div>
        )
    }
export default ListItem