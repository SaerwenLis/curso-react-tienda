import { ChevronLeftIcon } from "../assets/ChevronLeftIcon"

export default function OrdersList( props ) {
    const { totalPrice, totalProducts, date } = props

    return (
        <article className="flex justify-between mb-4 bg-slate-100 p-4 rounded-lg w-80"> 
            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                    <span>{date}</span>
                    <span>Items: {totalProducts}</span>
                </div>
                <span className="font-medium text-rose-900 text-xl">${totalPrice}</span>
            </div>            
            <button className="ml-3 rotate-180">
                <ChevronLeftIcon /> 
            </button>
        </article>
        )
}
