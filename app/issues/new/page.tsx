import React from 'react'

const NewIssuePage = () => {
    return (
        <div className="flex flex-col gap-y-5 max-w-xl">
            <input type="text" placeholder="Title" className="input input-bordered w-full" />
            <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
            <button className="btn btn-primary">button</button>
        </div>
    )
}

export default NewIssuePage;