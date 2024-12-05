// import { useState } from "react";
import { Button, Dropdown, Tooltip } from "antd";
import { GlobalButton, GroupedButtons, TooltipTitle } from "./assets/styles/Button/button";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// interface Types {
//     trigger: "string",
// }

// interface Items {
//     id: number,
//     label: string,
// }

// let items:Items["items"] =[
//     {
//         id: 1,
//         label: "1st item",
//     },
//     {
//         id: 2,
//         label: "2nd item",
//     }
// ]



const ButtonComp = () => {
    // const [open] = useState<boolean>(true);

    return (
        <div>
        <GroupedButtons>
            <TooltipTitle title="Edit"
            overlayStyle={{
                backgroundColor: "white",
                fontSize: "24px",
                color: "red",
            }}>
                <GlobalButton icon={<EditOutlined/>} variant="edit" onClick={() => console.log("edit clicked")}>Edit</GlobalButton>
            </TooltipTitle>
            <TooltipTitle title="Delete">
                <GlobalButton  variant="delete" icon={<DeleteOutlined/>}onClick={() => console.log("delete clicked")}>
                    Delete
                </GlobalButton>
            </TooltipTitle>
            <Button icon={<DeleteOutlined/>}>Button</Button>
        </GroupedButtons>
        {/* <Dropdown menu={{items}}>
            <GlobalButton>Dropdown Button</GlobalButton>
        </Dropdown> */}
        </div>
    )
}

export default ButtonComp;