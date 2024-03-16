"use client"
import React from 'react'

import dynamic from 'next/dynamic';
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
    return (
        <div className="flex flex-col gap-y-5 max-w-xl">
            <input type="text" placeholder="Title" className="input input-bordered w-full" />
            <SimpleMDE
                options={{spellChecker: false}} 
                className="textarea textarea-bordered" placeholder="Bio"></SimpleMDE>
            <button className="btn btn-primary w-fit">button</button>
        </div>
    )
}

export default NewIssuePage;