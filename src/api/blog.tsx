"use client"

import axios from "axios"
const access_token = "NXWxww_kmip6yNeaLKbT-z2ZWepJGSUy4tX_nhyndYA"

export async function getBlogs(){
    const res = await axios.get(`https://cdn.contentful.com/spaces/qyce1hc0ybq3/environments/master/entries?access_token=${access_token}&include=1`)
    const assets = res.data.includes.Asset // [ {} ]
    const blogs = res.data.items.map((item:any,index:number) => {

        return {
            ...item,
            /*
            name:item.name,
            number:item.number 
            key:item.key 
            */
            id:item?.sys?.id,
            image_url:assets[index]?.fields?.file?.url
        }
    })

    return blogs

}

export async function getBlogDetail(entriesId:string){
    alert("entriedId = "+entriesId)
    const res = await axios.get(`https://cdn.contentful.com/spaces/qyce1hc0ybq3/environments/master/entries/${entriesId}/?access_token=${access_token}&include=1`)
    //const assets = res.data.includes.Asset // [ {} ]
    const blogDetail = res.data.fields
    return blogDetail
}