import AddUser from "./addUser";
import CounterComponent from "./counter";
import TexteditorComponent from "./texteditor";

export const all_components=[
    {
        route:"/counter",
        component:<CounterComponent />,
        title:"Counter"
    },
    {
        route:"/text-editor",
        component:<TexteditorComponent />,
        title:"Text Editor"
    },
    {
        route:"/add-user",
        component:<AddUser />,
        title:"Add User"
    },
]