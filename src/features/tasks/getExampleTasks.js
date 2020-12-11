import axios from "axios";

const getExampleTasks = async () => {
    try {
        const response = await axios.get("/To-do-list-React/exampleTasks.json");
        const tasks = response.data;

        return tasks;

    } catch (error) {
        console.error(error);
    };
};

export default getExampleTasks;