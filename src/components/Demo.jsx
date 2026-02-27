import React, { useEffect, useState, useRef } from 'react'
// import { Waterfall, WaterfallSlot } from "waterfall2-react"
import { Waterfall, WaterfallSlot } from "./waterfall/index.js"
import ItemFactory from "./waterfall/utils.js"

import "./waterfall/index.css"



function Demo() {
    const [items, setItems] = useState(ItemFactory.get(100))
    const [loading, setLoading] = useState(false);
    const [line, setLine] = useState(false);
    const [grow, setGrow] = useState([1, 2, 3]);

    // 添加项目
    // 加载更多数据
    const loadMore = () => {
        if (loading || items.length > 200) return;
        setLoading(true);
        setTimeout(() => {
            const newData = ItemFactory.get(10);
            setItems(prev => [...prev, ...newData]);
            setLoading(false);
        }, 500);
    };
    const switchLine = () => {
        setLine(!line)
    }
    const switchGrow = () => {
        setGrow([1, 1])
    }
    const switchWidth = () => {
        setItems(items.map((e, index) => {
            return index === 0 ? {
                ...e,
                width: 300
            } : e
        }))
    }
    const Refresh = () => {
        const shuffled = JSON.parse(JSON.stringify(items));
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setItems(shuffled);
    }


    // 检测是否滚动到底部
    function checkIfAtBottom() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = window.innerHeight;
        return scrollTop + clientHeight >= scrollHeight;
    }
    // 滚动监听
    const handleScroll = () => {
        if (checkIfAtBottom()) {
            loadMore()
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <button onClick={switchLine}>switchLine</button>
            <button onClick={switchWidth}>switchWidth</button>
            <button onClick={Refresh}>Refresh</button>
            <button onClick={switchGrow}>switchGrow</button>

            <Waterfall line={line ? 'h' : 'v'} lineGap={200} minLineGap={180} maxLineGap={220} grow={grow}>
                {
                    items.map((e, index) => <WaterfallSlot width={e.width} height={e.height} key={e.index} order={index} moveClass="item-move">
                        <div className="item" index={e.index} style={e.style} ></div>
                    </WaterfallSlot>)
                }
            </Waterfall>
            {loading ? <p>Loading</p> : ''}
        </>
    )
}

export default Demo
