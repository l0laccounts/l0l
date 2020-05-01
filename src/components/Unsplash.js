import React from 'react'

export const Unsplash = () => {
    const url = {
        href: "https://www.youtube.com/watch?v=TDw_UiutXD4",
        target: "_none",
        rel: "noopener noreferrer nofollow",
        src: "https://source.unsplash.com/random",
        alt: "",
    }

    const styleImg = {
        display: "block",
        objectFit: "cover",
        borderRadius: "1px",
        maxWidth: "100%",
        maxHeight: "100%",
    }

    const styleImgDiv = {
        maxHeight: "1000px",
        maxWidth: "340px",
    }
    const styleGrid = {
        display: "grid",
        justifyItems: "center",

    }

    const styleContainer = {
        display: "grid",
        height: "100vh",
        alignItems: "center"
    }

    return(
            <div style={styleContainer}>
                <a
                    target={url.target}
                    href={url.href}>
                    <div style={styleGrid}>
                        <div className="photo">
                            <div style={styleImgDiv}>
                                <img alt="" src={url.src} style={styleImg}/>
                            </div>
                        </div>
                        <div className="title">
                            bye world
                        </div>
                    </div>
                </a>
            </div>
    )
}
