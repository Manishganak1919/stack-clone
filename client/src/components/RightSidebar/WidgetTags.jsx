import React from 'react'
import './RightSidebar.css'

const WidgetTags = () => {
    const tags=['C','C++','express','firebase','html','java','javaScript','mern','mongodb','mysql','nextjs','react js','node js','php','python']
  return (
    <div className='widget-tags'>
   <h3>Watched tags</h3>
   <div className='widget-tags-div'>
    {
        tags.map((tag)=>(
            <p key={tag}>{tag}</p>
        )

        )
    }

   </div>
    </div>
  )
}

export default WidgetTags