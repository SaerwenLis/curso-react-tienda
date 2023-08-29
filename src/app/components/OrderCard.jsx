import { TrashIcon } from "../assets/TrashIcon";

export default function OrderCard( props ) {
    const { id, image, title, price, handleDelete } = props
  return (
    <article className="flex justify-between mb-4 bg-slate-100 p-4 rounded-lg"> 
        <div className="flex items-center gap-2">
            <figure className="w-16 h-16">
                <img className="w-full h-full rounded-lg object-cover" src={image} alt={title} />
            </figure>
            <p className="text-xs font-light w-1/2">{title}</p>
        </div>
        <div className="flex flex-col items-end justify-between">
            <button onClick={() => handleDelete(id)}>
                <TrashIcon />          
            </button>
            <p className="text-md text-rose-900 font-medium">${price}</p>
        </div>
    </article>
    )
}
