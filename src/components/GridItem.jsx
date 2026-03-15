   import { Card } from 'primereact/card'
   import { Button } from 'primereact/button'

   const GridItem = ({project, index,goToProject,deleteFunc,updateFunc}) => {
        return (
            <div className="col-12 sm:col-6 lg:col-4 p-2" key={project.id}>
                <Card
                    title={project.name}
                    subTitle={new Date(project.createdAt).toLocaleDateString()}
                    footer={(
                        <div className="flex gap-2">
                            <Button style={{ backgroundColor: '#06b6d4', borderColor: '#06b6d4' }} label="Delete" icon="pi pi-trash" severity="danger" onClick={() => deleteFunc(project.id)} />
                            <Button style={{ backgroundColor: '#06b6d4', borderColor: '#06b6d4' }} label="Update" icon="pi pi-pencil" severity="secondary" onClick={() => updateFunc(project.id)} />
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
    export default GridItem