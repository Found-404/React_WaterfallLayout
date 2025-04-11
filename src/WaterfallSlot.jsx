import React, { useState, useRef, forwardRef, useImperativeHandle, useContext, useEffect } from 'react'
import { FamilyContext } from "./model"

const WaterfallSlot = forwardRef((props, ref) => {
    const { width, height, order, moveClass } = props
    const WaterfallSlotRef = useRef()
    const [rect, setRect] = useState({
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        order: order,
    });
    const [isShow, setIsShow] = useState(false)
    const data = useContext(FamilyContext);
    const getMeta = () => {
        return {
            vm: WaterfallSlotRef,
            node: WaterfallSlotRef,
            order: order,
            width: width,
            height: height,
            moveClass: moveClass,
        };
    };
    const handler = () => {
        setIsShow(true)
    };
    useEffect(() => {
        handler();
    }, []);
    // 暴露指定方法
    useImperativeHandle(ref, () => ({
        getMeta,
        getRect: () => rect,
        setRect: (newValue) => setRect(newValue)
    }));
    return (
        <div className="waterfall-slot" ref={WaterfallSlotRef} style={{
            visibility: isShow ? 'visible' : 'hidden'
        }}>
            {props.children}
        </div>
    )
})

export default WaterfallSlot
