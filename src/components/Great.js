import React from 'react'

const Great = ({name, heroName, children}) => {
    return (
        <div>
            <h1>Hello {name} axa {heroName}</h1>
            {children}
        </div>
    );
}    

export default Great