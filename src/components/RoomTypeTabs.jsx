import React from 'react'

const RoomCards = () => {
  return (
    <div> <div className="grid grid-cols-6 gap-4">
            <button className="border rounded-xl p-5 border-dashed">
              + Add Room
            </button>

            {building.floors[selectedFloor].rooms.map((room) => (
              <div
                key={room.no}
                className="border rounded-xl p-5 text-center hover:shadow-lg cursor-pointer"
              >
                <p className="text-xs text-gray-400">
                  Room no
                </p>

                <h2 className="text-2xl font-bold">
                  {room.no}
                </h2>

                <p className="text-gray-500">
                  {room.type}
                </p>
              </div>
            ))}
          </div></div>
  )
}

export default RoomCards