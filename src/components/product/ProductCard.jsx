import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="border border-gray-300">
      <div className="bg-gray-600 flex items-center justify-center h-60">
        <p className="text-white">Image</p>
      </div>
      <div className="p-8">
        {/* category */}
        <div className="flex mb-2 space-x-1 items-center text-xs font-medium text-gray-500">
          <span>Category</span>
          <span>&gt;</span>
          <span>Sub-Category</span>
        </div>

        {/* title */}
        <h3 className="font-bold text-lg line-clamp-2 leading-5 pb-3">
          Angies Sweet Something Something
        </h3>

        {/* Store */}
        <h5>
          By <Link href={"#"} className="text-blue-500">Seth Gyan</Link>
        </h5>

        {/* price and cart */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-blue-500">$48.85</h2>
                <h4 className="text-sm text-gray-500 line-through">$88.85</h4>
            </div>
            <button className="px-5 py-2 text-blue-500 bg-blue-500/10">Add</button>
        </div>
      </div>
    </div>
  );
}
