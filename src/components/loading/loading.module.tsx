export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin">
                    <p className="mt-4 text-sm font-semibold text-black">Loading</p>
                </div>
            </div>
        </div>
    )
}
