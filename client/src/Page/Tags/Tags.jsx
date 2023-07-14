import React from 'react'
import Leftsidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList=[{
     id:1,
     tagName:"javaScript",
     tagDesc:"For question regarding programming in ECMASript  and its various dialects/implementations"
    },
    {
        id:2,
        tagName:"python",
        tagDesc:"For question regarding programming in ECMASript  and its various dialects/implementations"
       },
       {
        id:3,
        tagName:"C#",
        tagDesc:"For question regarding programming in ECMASript  and its various dialects/implementations"
       },
       {
        id:4,
        tagName:"java",
        tagDesc:"For question regarding programming in ECMASript  and its various dialects/implementations"
       },
       {
        id:5,
        tagName:"C++",
        tagDesc:"For question regarding programming in ECMASript  and its various dialects/implementations"
       },
       {
        id:6,
        tagName:"php",
        tagDesc:"For question regarding programming in ECMASript  and its various dialects/implementations"
       },
       {
        id:7,
        tagName:"html5",
        tagDesc:"For question regarding programming in ECMASript  and its various dialects/implementations"
       },
       {
        id:8,
        tagName:"android",
        tagDesc:"For question regarding programming in ECMASript  and its various dialects/implementations"
       },
       {
        id:9,
        tagName:"CSS",
        tagDesc:"For question regarding programming in ECMASript  and its various dialects/implementations"
       },
       {
        id:10,
        tagName:"React",
        tagDesc:"For question regarding programming in ECMASript  and its various dialects/implementations"
       },

]
  return (
    <div className='home-container-1'>
        <Leftsidebar/>
        <div className="home-container-2">
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tags is keyword or label that categorizes your question with other,similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
           <div className='tags-list-container'>
            {
                tagsList.map((tag) =>(
                    <TagsList tag={tag} key={tagsList.id}/>
                ))
            }
           </div>
        </div>
        

        
       
    </div>
  )
}

export default Tags