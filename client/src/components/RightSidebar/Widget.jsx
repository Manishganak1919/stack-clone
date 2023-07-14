import React from 'react'
import { BsFillPenFill } from 'react-icons/bs';
import {MdInsertComment} from  'react-icons/md';
import {BsStackOverflow} from  'react-icons/bs';

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'> 
        <BsFillPenFill width='18'/>
        <p>The nature of simulating nature: Q&A with IBM quantum computing research</p>
        </div>

        <div className='right-sidebar-div-2'> 
        <BsFillPenFill width='18'/>
        <p>The AI that writes music from text (Ep. 535)</p>
        </div>
        </div>

        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'> 
        <MdInsertComment width='18'/>
        <p>Accessibility Update: Colors</p>
        </div>

        <div className='right-sidebar-div-2'> 
        <MdInsertComment width='18'/>
        <p>Should we burninate the [balance] tag?</p>
        </div>

        <div className='right-sidebar-div-2'> 
        < BsStackOverflow width='18'/>
        <p>Collectives: The next iteration</p>
        </div>
        <div className='right-sidebar-div-2'> 
        < BsStackOverflow width='18'/>
        <p>Temporary policy: ChatGPT is banned</p>
        </div>

        </div>

        <h4>Hots on Meta</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'> 
        <p>28</p>
        <p>Accessibility Update: Colors</p>
        </div>

        <div className='right-sidebar-div-2'> 
        <p>29</p>
        <p>Should we burninate the [balance] tag?</p>
        </div>

        <div className='right-sidebar-div-2'> 
        <p>30</p>
        <p>Collectives: The next iteration</p>
        </div>
        

        </div>

    </div>
  )
}

export default Widget