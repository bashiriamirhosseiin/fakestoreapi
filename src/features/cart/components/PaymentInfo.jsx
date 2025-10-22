export default function PaymentInfo ({total, fee}) {
    return (
        <div className="w-full px-[6.4%]">
            <p className="text-lg font-bold mb-3">Payment Summary</p>
            <div className="flex justify-between items-center">
                <p className="text-gray-600">Price</p>
                <p className="font-bold">${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-gray-600">fee</p>
                <p className="font-bold text-gray-600">${fee.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center mt-1">
                <p className="text-gray-600 font-bold">Total</p>
                <p className="text-lg font-bold text-[#9b572c]">${(total + fee).toFixed(2)}</p>
            </div>
        </div>
    )
}