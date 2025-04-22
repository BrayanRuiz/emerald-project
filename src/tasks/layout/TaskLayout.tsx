import { columns } from "../components/columns"
import { DataTable } from "../components/data-table"
import { getData } from "../controllers/getData";

export const TaskLayout = async () => {
    const data = await getData();

    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default TaskLayout
