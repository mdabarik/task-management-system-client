import useAuth from "../../hooks/useAuth";

const TasksManager = () => {

    console.log('inside task manager');

    const {user, loading} = useAuth();

    if (loading || !user) return <p>Loading...</p>


    return (
        <div>
            This is task managers page
        </div>
    );
};

export default TasksManager;