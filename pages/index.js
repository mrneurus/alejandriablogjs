import React from 'react';
import LayoutBlog  from '../components/layoutblog';
import ListPost   from '../components/listpost'

const index = () => {
    return ( 
        <div>
            <LayoutBlog>

                    <ListPost/>
               
            </LayoutBlog>
            </div>
    
    );
}
 
export default index;