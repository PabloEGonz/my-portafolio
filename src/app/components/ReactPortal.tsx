import { createPortal } from 'react-dom';
import { useState, useLayoutEffect } from 'react';

const createWrapper = (wrapperId: string) => {
    if (!document) return null;
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

function ReactPortal({children, wrapperId} : {
    children: React.ReactElement;
   wrapperId: string; 
}) {
const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let sytemCreated = false;

        if (!element) {
            sytemCreated = true;
            element = createWrapper(wrapperId);
        }
        setWrapperElement(element!);

        return () => {
            if(sytemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    if(!wrapperElement) return null;

    return createPortal(children, wrapperElement);
}


export default ReactPortal