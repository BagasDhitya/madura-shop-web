import { DataProduct } from "@/dummy/data"

export default function Card({ id, title, description, image, price, category, onClick }: DataProduct) {
    return (
        <div id={id} className="border p-4 rounded shadow-sm hover:bg-slate-200 cursor-pointer" onClick={onClick} >
            <img
                src={image !== "" ? image : 'https://i.pinimg.com/736x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg'}
                alt={title}
                className="w-full h-40 object-cover mb-2 rounded"
            />
            <div className="flex flex-col gap-y-5">
                <h2 className="text-lg text-slate-800 font-semibold">{title}</h2>
                <p className="text-slate-600">{description}</p>
                <p className="font-bold text-red-500">Rp {price}</p>
                <p className="text-sm text-gray-500">Category : {category}</p>
            </div>
        </div>
    )
}
