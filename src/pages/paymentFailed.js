function PaymentFailed() {
    return (
        <div className="pt-16">
            <div className="bg-white p-6 max-w-7xl md:mx-auto">
                <svg viewBox="0 0 24 24" className="text-red-600 w-16 h-16 mx-auto my-6">
                    <path fill="currentColor"
                        d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 21.818c-5.426 0-9.818-4.392-9.818-9.818S6.574 2.182 12 2.182s9.818 4.392 9.818 9.818-4.392 9.818-9.818 9.818zM15.536 8.464a1.091 1.091 0 0 0-1.545 0L12 10.455l-1.991-1.991a1.091 1.091 0 1 0-1.545 1.545L10.455 12l-1.991 1.991a1.091 1.091 0 1 0 1.545 1.545L12 13.545l1.991 1.991a1.091 1.091 0 1 0 1.545-1.545L13.545 12l1.991-1.991a1.091 1.091 0 0 0 0-1.545z">
                    </path>
                </svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Failed</h3>
                    <p className="text-gray-600 my-2">Unfortunately, we couldn't process your payment.</p>
                    <p>Please try again or contact support if the issue persists.</p>
                    <div className="py-10 text-center">
                        <a href="/pricing" className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold py-3">
                            TRY AGAIN
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentFailed;
