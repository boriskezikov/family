import React from 'react'
import Header from '../layout/header/Header'

export const SitePage = ({children}) => {
    return (
        <div className="site-page">
            <Header />
            {children}
        </div>
    )
}
