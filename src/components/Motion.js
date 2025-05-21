'use client'

import { useState } from 'react';
import { Reorder } from "framer-motion";

const initialItems = [
    { id: 1, title: "🍅 Tomato" },
    { id: 2, title: "🥒 Cucumber" },
    { id: 3, title: "🧀 Cheese" },
    { id: 4, title: "🥬 Lettuce" },
]

export default function Motion() {
    const [items, setItems] = useState(initialItems);

    return (
        <Reorder.Group axis="y" onReorder={setItems} values={items}>
            {items.map((item) => (
                <Reorder.Item key={item.id} value={item}>
                    <span className='cursor-grab'>{item.id} {item.title}</span>
                </Reorder.Item>
            ))}
        </Reorder.Group>
    );
}