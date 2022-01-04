import React from 'react'

const Footer = () => {
    return (
        <div
            className="footer d__flex align__items__center justify__content__space__between pz-10"
            style={{ padding: "10px 20px", zIndex: "100" }}
             >
                 {/* need to add image icon for L R  */}
            {/* <img src={footerImg} alt="" className="footer__img pointer" /> */}
            <span
            className="copyright"
            style={{ color: "#fefcfb", fontSize: "14px", opacity: "0.75" }}
            >
            Copyright © 2021 programmer Lupita Rivera All Rights Reserved.
            </span>
      </div>
    )
}

export default Footer
