import React from "react";

const BaseLayout = ({ title = 'Personal Account', description = '', keywords = '', children }) => {
    return (
        <>
            <head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </head>
            
            <div className="page">
                {children}
            </div>
        </>
    )
}

export default BaseLayout;