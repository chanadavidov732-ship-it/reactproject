import { Button } from "primereact/button"

import DeleteBody from './DeleteBody'
import { Menu } from 'primereact/menu';
const MenuData = ({  rowData,deleted,idOfProjectSignle}) => {
    const showMenuData = () => {
        const items = [
            {
                template: (item, options) => {
                    return (
                        <div className="p-menuitem-link">
                            <DeleteBody rowData={rowData} deleted={deleted} />
                            <span className="ml-2">Delete Task</span>
                        </div>
                    );
                }
            },
            {
                template: (item, options) => {
                    return (
                        <div className="p-menuitem-link">
                            <ChangeStatusBody rowData={rowData} idOfProjectSignle={idOfProjectSignle} />
                        </div>
                    );
                }
            }
        ]

        return (
            <div className="flex justify-content-center">
                <Menu model={items} popup ref={menuRef} id="popup_menu" />

                <Button
                    icon="pi pi-ellipsis-v"
                    className="p-button-rounded p-button-text p-button-plain"
                    onClick={(e) => menuRef.current.toggle(e)}
                />
            </div>
        )


    }
    return (
        <Button label="Submit" onClick={showMenuData} />   
    )
}


export default MenuData