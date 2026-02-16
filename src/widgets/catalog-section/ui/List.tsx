export function List({}) {
  return (
    <div className="flex-1 bg-amber-900 min-h-screen p-4">
      <ul className="grid grid-cols-3 gap-4 grid-rows-2">
        <li>{}</li>
      </ul>
    </div>
  );
}

export function ListItem({}) {
  return (
    <div className="bg-amber-500 p-4 rounded">
      <h3 className="text-lg font-bold">Job Title</h3>
      <p className="text-sm text-gray-700">Company Name</p>
    </div>
  );
}