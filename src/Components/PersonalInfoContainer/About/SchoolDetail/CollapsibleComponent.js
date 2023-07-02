import React, { useState, useRef } from 'react';
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './CollapsibleComponent.css';

function CollapsibleComponent(props) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef();
    if (contentRef.current) {
        console.log(contentRef.current.scrollHeight)
    }
    const toggle = () => {
        setOpen(!open);
    }
    return (
        <div>
            <button className='toggle' onClick={toggle}>{props.label}</button>
            <div className="content-parent"
                ref={contentRef} style={open ? {
                    height: contentRef.current.scrollHeight +
                        "px"
                } : { height: "0px" }}>
                {/* <div className="content">{props.children}</div> */}
            </div>
            <div className={open ? "content-show" : "content-parent"}>
                <div className='content'> {props.children} </div>
                <div>
                    {open &&
                        <div className="toggle">{props.children}</div>
                    }
                </div>
            </div>

        </div>

    )
}

export default CollapsibleComponent;
