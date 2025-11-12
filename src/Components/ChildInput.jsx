
const ChildInput = ({color,onChange}) => {
  return (
    <div>
       <input
        type="text
      "
      value={color}
        className="bg-gray-300 rounded px-2 py-4 text-xl"
        onChange={onChange}
      />
    </div>
  )
}

export default ChildInput
