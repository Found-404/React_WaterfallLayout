import React, { useState, useEffect, useRef, useMemo } from 'react'
import { horizontalLineProcessor, verticalLineProcessor, FamilyContext } from "./model.js";
// import "./index.css"
const MOVE_CLASS_PROP = "_wfMoveClass";


// 添加事件监听
function on(elem, type, listener, useCapture = false) {
    elem.addEventListener(type, listener, useCapture);
}
// 删除事件监听
function off(elem, type, listener, useCapture = false) {
    elem.removeEventListener(type, listener, useCapture);
}

function tidyUpAnimations(event) {
    let node = event.target;
    let moveClass = node[MOVE_CLASS_PROP];
    if (moveClass) {
        removeClass(node, moveClass);
    }
}
// 删除类名
function removeClass(elem, name) {
    let reg = new RegExp("\\s*\\b" + name + "\\b\\s*", "g");
    let res = attr(elem, "class").replace(reg, " ").trim();
    attr(elem, "class", res);
}

// 设置/获取 DOM属性
function attr(elem, name, value) {
    if (typeof value !== "undefined") {
        elem.setAttribute(name, value);
    } else {
        return elem.getAttribute(name) || "";
    }
}
function getTransitionEndEvent() {
    let isWebkitTrans =
        window.ontransitionend === undefined &&
        window.onwebkittransitionend !== undefined;
    let transitionEndEvent = isWebkitTrans
        ? "webkitTransitionEnd"
        : "transitionend";
    return transitionEndEvent;
}

function isScrollBarVisibilityChange(el, lastClientWidth) {
    return lastClientWidth !== el.clientWidth;
}

function setTransform(node, firstRect, lastRect) {
    let dx = firstRect.left - lastRect.left;
    let dy = firstRect.top - lastRect.top;
    let sw = firstRect.width / lastRect.width;
    let sh = firstRect.height / lastRect.height;
    node.style.transform =
        node.style.WebkitTransform = `translate(${dx}px,${dy}px) scale(${sw},${sh})`;
    node.style.transitionDuration = "0s";
}


function addClass(elem, name) {
    if (!hasClass(elem, name)) {
        let cur = attr(elem, "class").trim();
        let res = (cur + " " + name).trim();
        attr(elem, "class", res);
    }
}

function hasClass(elem, name) {
    return new RegExp("\\b" + name + "\\b").test(attr(elem, "class"));
}

function clearTransform(node) {
    node.style.transform = node.style.WebkitTransform = "";
    node.style.transitionDuration = "";
}



function Waterfall(props) {
    // 解构并设置默认值
    const {
        autoResize = true,
        interval = 200,
        align = 'left',
        line = 'v',
        lineGap = 200,
        minLineGap,
        maxLineGap,
        singleMaxWidth,
        grow,
        fixedHeight = false,
        watch = {}
    } = props;
    const waterfallRef = useRef(null);
    const slotRefs = useRef([]);
    const virtualRects = useRef([]);
    const [metas, setMetas] = useState([]);
    function reflow() {
        if (!waterfallRef.current) return;
        let width = waterfallRef.current.clientWidth;
        setMetas(() => {
            const newMetas = Array.from(slotRefs.current).map((e) =>
                e.getMeta()
            )
            newMetas.sort((a, b) => a.order - b.order);
            virtualRects.current = newMetas.map(() => ({}))
            calculate(waterfallRef.current, newMetas, virtualRects.current);
            setTimeout(() => {
                if (isScrollBarVisibilityChange(waterfallRef.current, width)) {
                    calculate(waterfallRef.current, newMetas, virtualRects.current);
                }
                console.log(virtualRects.current);
                waterfallRef.current.style.overflow = "hidden";
                render(virtualRects.current, newMetas);
            }, 0);
            return newMetas
        })
    }

    // 渲染
    function render(rects, metas) {
        let metasNeedToMoveByTransform = metas.filter((meta) => meta.moveClass);
        let firstRects = getRects(metasNeedToMoveByTransform);
        applyRects(rects, metas);
        let lastRects = getRects(metasNeedToMoveByTransform);
        metasNeedToMoveByTransform.forEach((meta, i) => {
            meta.node.current[MOVE_CLASS_PROP] = meta.moveClass;
            setTransform(meta.node.current, firstRects[i], lastRects[i]);
        });
        // document.body.clientWidth; // forced reflow
        metasNeedToMoveByTransform.forEach((meta) => {
            addClass(meta.node.current, meta.moveClass);
            clearTransform(meta.node.current);
        });
    }

    function applyRects(rects, metas) {
        rects.forEach((rect, i) => {
            let style = metas[i].node.current.style;
            slotRefs.current[i].setRect(rect)
            for (let prop in rect) {
                style[prop] = rect[prop] + "px";
            }
        });
    }

    function getRects(metas) {
        return metas.map((meta, index) => {
            return slotRefs.current[index].getRect()
        });
    }

    const token = useRef(null)
    // 防抖 清除定时器，重新计时
    function reflowHandler() {
        clearTimeout(token.current);
        token.current = setTimeout(reflow, interval)
    }

    // 监听props中的autoResize
    const WatchAutoResize = () => {
        on(waterfallRef.current, getTransitionEndEvent(), tidyUpAnimations, true);
        autoResizeHandler(autoResize);
    };

    // 根据传入的props-autoResize 【开启/关闭】监听
    function autoResizeHandler(autoResize) {
        if (autoResize === false || !autoResize) {
            off(window, "resize", reflowHandler, false);
        } else {
            on(window, "resize", reflowHandler, false);
        }
    }

    function getOptions() {
        const $maxLineGap = maxLineGap ? +maxLineGap : lineGap;
        return {
            align: ~["left", "right", "center"].indexOf(align) ? align : "left",
            line: ~["v", "h"].indexOf(line) ? line : "v",
            lineGap: +lineGap,
            minLineGap: minLineGap ? +minLineGap : lineGap,
            maxLineGap: $maxLineGap,
            singleMaxWidth: Math.max(singleMaxWidth || 0, maxLineGap),
            fixedHeight: !!fixedHeight,
            grow: grow && grow.map((val) => +val),
        };
    }

    // 根据props传入的[line] 判断布局方式
    function calculate(vm, metas, styles) {
        let options = getOptions();
        let processor =
            line === "h" ? horizontalLineProcessor : verticalLineProcessor;
        processor.calculate(vm, options, metas, styles);
    }

    useEffect(() => {
        WatchAutoResize()
        reflowHandler();
    }, [])
    // 使用 useMemo 来确保 children 变化时才更新
    const stableChildren = useMemo(() => props.children, [props.children]);

    useEffect(() => {
        reflow();
    }, [stableChildren]);
    const clonedChildren = React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
            ref: (el) => {
                // 保留原有的 ref（如果有）
                if (typeof child.ref === 'function') {
                    child.ref(el);
                } else if (child.ref && typeof child.ref !== 'function') {
                    child.ref.current = el;
                }
                // 存储到 slotRefs
                slotRefs.current[index] = el;
            }
        });
    });
    return (
        <div className='waterfall' ref={waterfallRef}>
            <FamilyContext.Provider value={{
                reflow
            }}>
                {clonedChildren}
            </FamilyContext.Provider>
        </div>
    )
}

export default Waterfall
