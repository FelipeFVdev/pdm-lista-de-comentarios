import React from 'react'

export default function cartao({children}) {
    return (
        <div className={estilos.principal}>
            {children}
        </div>
    )
}

const estilos = {
    principal: 'card border rounded m-2 p-2 shadow'
}

