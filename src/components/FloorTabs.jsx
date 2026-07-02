import React from 'react'

const FloorTabs = () => {
  return (
    <div className="flex gap-5 mb-5">
            {building.floors.map((floor, index) => (
              <button
                key={floor.id}
                onClick={() => setSelectedFloor(index)}
                className={`pb-2 ${
                  selectedFloor === index
                    ? "border-b-2 border-red-500 text-red-500"
                    : ""
                }`}
              >
                {floor.name}
              </button>
            ))}</div>
  )
}

export default FloorTabs