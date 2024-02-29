

const CreateTask = () => {

    const handleCreateTask = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const date = form.date.value
        const description = form.desc.value
        const priority = form.pLevel.value

        const taskInfo = {
            title, date, description, priority
        }
        console.log(taskInfo)
        form.reset()

    }
    return (
        <div className="min-h-screen bg-purple-100 mt-10">
            <div className="hero-content flex-col px-10">
                <div className="text-center lg:text-left">
                    <h1 className="lg:text-5xl text-2xl font-bold mt-10">Create New Tasks</h1>
                </div>
                <div className="w-full bg-purple-300 mt-10">
                    <form className="p-10" onSubmit={handleCreateTask}>
                        <div className="grid lg:gap-10 gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Enter task title" className="input input-bordered" required />
                            </div>

                            {/* 1 */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>

                            {/* 2 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name="desc" placeholder="Enter description" id="decription" cols="10" rows="5" className="resize-none p-2 rounded-md outline-none"></textarea>
                            </div>


                            {/* 3 */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Priority Level</span>
                                </label>
                                <div className="flex flex-col gap-5 mt-1">
                                    <label className="">
                                        <input type="radio" name="pLevel" value="high" className="" required></input>
                                        <span className="ml-2">High</span>
                                    </label>
                                    <label className="">
                                        <input type="radio" name="pLevel" value="low" className="" required></input>
                                        <span className="ml-2">Low</span>
                                    </label>
                                    <label className="">
                                        <input type="radio" name="pLevel" value="medium" className="" required></input>
                                        <span className="ml-2">Medium</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-purple-700 ml-1 px-2 py-1 btn-primary rounded-md text-white">Create Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;