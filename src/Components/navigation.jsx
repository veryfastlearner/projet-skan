import React from 'react';
function navigation(){
    const categories=["car","laptop","camera"]
    return(<nav className="navigation">
        <ul>
            {categories.map((category,index)=><li key={index}>{category}</li>)}
        </ul>
        </nav>
    )

}
export default navigation;