import React from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'

function Piece({ piece: { type, color }, position }) {

    const [{ isDragging }, drag, dragPreview] = useDrag({
        type: 'piece',
        item: {
            id: `${position}_${type}_${color}`
        },
        collect: (monitor) => {
            return { isDragging: !!monitor.isDragging() }
        }
    })

    const pieceImg = require(`../assets/${type}_${color}.png`);
    return (
        <>
            <DragPreviewImage connect={dragPreview} src={pieceImg} />
            <div
                className="piece-container"
                ref={drag}
                style={{ opacity: isDragging ? 0 : 1 }}
            >
                <img
                    className="piece"
                    src={pieceImg}
                    alt=""
                />
            </div>
        </>
    )
}

export default Piece