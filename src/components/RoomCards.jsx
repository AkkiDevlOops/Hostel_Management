export default function RoomCard({ room }) {
  return (
    <div className="border rounded-xl p-5 text-center hover:shadow-lg">
      <p className="text-xs text-gray-400">
        Room no
      </p>

      <h1 className="text-2xl font-bold">
        {room.no}
      </h1>

      <p>{room.type}</p>
    </div>
  );
}