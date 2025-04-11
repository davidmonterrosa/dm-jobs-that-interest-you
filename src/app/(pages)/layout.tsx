import React from 'react'

const NavbarLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <h1>navbar</h1>
        {children}
    </div>

  )
}

export default NavbarLayout