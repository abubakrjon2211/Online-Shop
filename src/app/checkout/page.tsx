
import CheckoutForm from "@/components/checkout-form"
import img from "@/app/images/Gamepad-Cart-Small.png"
import img1 from "@/app/images/Monitor-Cart-Small.png"
import img2 from "@/app/images/Bkash.png"
import img3 from "@/app/images/Visa.png"
import img4 from "@/app/images/Mastercard.png"
import img5 from "@/app/images/Nagad.png"
import Image from "next/image"



export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-sm text-gray-500 mb-6">
        <span>Product</span>
        <span className="mx-2">/</span>
        <span>View Cart</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-black">CheckOut</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <CheckoutForm />
        </div>
        <div className="lg:col-span-5">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                    <Image className="object-cover" src={img} alt="" />
                  </div>
                  <span className="font-medium">LCD Monitor</span>
                </div>
                <span className="font-medium">$650</span>
              </div>

              <div className="flex items-center justify-between py-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                    <Image className="object-cover" src={img1} alt="" />
                  </div>
                  <span className="font-medium">HI Gamepad</span>
                </div>
                <span className="font-medium">$1100</span>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">$1750</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between py-2 text-lg font-bold">
                  <span>Total:</span>
                  <span>$1750</span>
                </div>
              </div>

                
              <div className="border-t border-gray-200 pt-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    <span>Bank</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 rounded-full border border-gray-900 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-gray-900"></div>
                    </div>
                    <span>Cash on delivery</span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-4">
                    <Image className="h-8" src={img2} alt="" />
                    <Image className="h-8" src={img3} alt="" />
                    <Image className="h-8" src={img4} alt="" />
                    <Image className="h-8" src={img5} alt="" />
                </div>

                <div className="flex mt-4">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-white text-red-500 border border-red-500 rounded-r-md hover:bg-red-50 transition-colors">
                    Apply
                  </button>
                </div>

                <button className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
