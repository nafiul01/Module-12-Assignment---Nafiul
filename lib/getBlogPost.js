import React from 'react';


export default async function getBlogPost() {

    // const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/1`);

    if(!res.ok){
        throw new Error ('Error featching post')
    }

    return res.json();
}