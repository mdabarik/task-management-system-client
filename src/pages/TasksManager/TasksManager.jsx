import { useState } from "react";
import Loader from "../../components/Shared/Loader";
import useAuth from "../../hooks/useAuth";
import TaskTable from "./TaskTable";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Home from "./TaskManagerHome";



const TasksManager = () => {

    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const axiosPublic = useAxiosPublic();
    const { user, loading } = useAuth();
    const [errMsg, setErrMsg] = useState();
    const [changed, setChanged] = useState(true);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [deadline, setDeadline] = useState();
    const [priority, setPriority] = useState();
    const axiosSecure = useAxiosSecure();

    const handleTaskSubmit = () => {
        setErrMsg(null);
        if (!title || title?.length <= 3) {
            setErrMsg("Task title must be longer than 3 chars");
            return;
        }
        if (!description || description?.length <= 10) {
            setErrMsg("Task description must be longer than 9 chars");
            return;
        }
        if (!deadline) {
            setErrMsg("Please select valid deadline");
            return;
        }
        if (!priority || priority == '0') {
            setErrMsg("Please select priority");
            return;
        }
        const data = {
            title, description, deadline, priority, status: 'ongoing', email: user?.email
        }

        axiosSecure.post('/task', data)
            .then(data => {
                const res = data?.data;
                console.log(res);
                setChanged(!changed)
            })
            .catch(err => {
                console.log(err);
            })
    }


    // if (loading || !user) return <p>Loading...</p>
    if (loading || !user) return <Loader></Loader>


    return (
        <div className="max-w-[1280px] w-[95%] mx-auto py-4">
            <div>
                <h2 className="text-xl font-bold">Add New Task</h2>
            </div>

            <div className="py-3">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Task Title</span>
                    </div>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full text-[14px]" />
                </label>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text-alt text-[14px]">Task Descriptions</span>
                    </div>
                    <textarea onChange={(e) => setDescription(e.target.value)} className="textarea textarea-bordered h-24 text-[14px]" placeholder="Task descriptions"></textarea>
                </label>
                <div className="flex flex-col gap-5 md:flex-row items-start md:items-end justify-between">
                    <div className="flex justify-start items-end gap-4">
                        <label className="form-control w-full max-w-xs">
                            <div>
                                <div className="label">
                                    <span className="label-text">Select Deadline</span>
                                </div>
                                <input
                                    required
                                    onChange={(e) => setDeadline(e.target.value)}
                                    type="date"
                                    className="input input-bordered w-full"
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text-alt text-[14px]">Select Priority</span>
                            </div>
                            <select required defaultValue={0} onChange={(e) => setPriority(e.target.value)} className="select select-bordered w-full max-w-xs">
                                <option disabled value="0" >Select Task Priority</option>
                                <option value="1">Low</option>
                                <option value="2">Moderate</option>
                                <option value="3">High</option>
                            </select>
                        </label>
                    </div>
                    <div className="w-full md:max-w-sm">
                        <button onClick={handleTaskSubmit} className="btn btn-info text-white w-full md:max-w-sm">Add New Task</button>
                    </div>
                </div>
                {
                    errMsg ? <h2 className="text-center text-red-700 text-sm mt-2">{errMsg}</h2> : ""
                }
            </div>

            <div></div>
            <div className="divider"></div>

            <div className="pb-14">
                <h2 className="text-2xl font-bold my-3">My All Tasks</h2>
                <TaskTable changed={changed}></TaskTable>
            </div>

        </div>
    );
};

export default TasksManager;