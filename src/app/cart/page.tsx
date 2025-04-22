


// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card } from "@/components/ui/card"
// import { X } from "lucide-react"
// import img from "@/app/images/Gamepad-Cart-Small.png"
// import img1 from "@/app/images/Monitor-Cart-Small.png"

// export default function CartPage() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-20">
//       {/* Breadcrumb */}
//       <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
//         <Link href="/" className="hover:text-foreground transition-colors">
//           Home
//         </Link>
//         <span>/</span>
//         <span className="font-medium text-foreground">Cart</span>
//       </nav>

//       <div className="grid w-full max-w-full grid-cols-1 lg:grid-cols-2 gap-12">
//         <div className="lg:col-span-2 w-full">
//           {/* Cart Items */}
//           <div className="border-b pb-4 mb-4 hidden md:grid md:grid-cols-4 text-sm">
//             <div className="font-medium">Product</div>
//             <div className="font-medium text-center">Price</div>
//             <div className="font-medium text-center">Quantity</div>
//             <div className="font-medium text-right">Subtotal</div>
//           </div>

//           <div className="space-y-4">
//             {/* Cart Item 1 */}
//             <div className="border rounded-lg p-4 md:p-0 md:border-none md:rounded-none md:grid md:grid-cols-4 md:items-center md:gap-4">
//               <div className="flex items-center gap-4 mb-4 md:mb-0">
//                 <div className="relative h-20 w-20 rounded-md overflow-hidden border">
//                   <Image
//                     src={img}
//                     alt="LCD Monitor"
//                     width={80}
//                     height={80}
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="font-medium">LCD Monitor</h3>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center md:justify-center mb-4 md:mb-0">
//                 <span className="md:hidden font-medium">Price:</span>
//                 <span className="font-medium">$650</span>
//               </div>
//               <div className="flex justify-between items-center md:justify-center mb-4 md:mb-0">
//                 <span className="md:hidden font-medium">Quantity:</span>
//                 <div className="relative">
//                   <Input type="number" min="1" defaultValue="01" className="w-20 pr-8 text-center" />
//                   <div className="absolute right-0 top-0 h-full flex flex-col">
//                     <button className="flex-1 px-2 text-xs border-l">▲</button>
//                     <button className="flex-1 px-2 text-xs border-l border-t">▼</button>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center md:justify-end">
//                 <span className="md:hidden font-medium">Subtotal:</span>
//                 <div className="flex items-center gap-2">
//                   <span className="font-medium">$650</span>
//                   <button className="text-red-500 hover:text-red-700 transition-colors">
//                     <X size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Cart Item 2 */}
//             <div className="border rounded-lg p-4 md:p-0 md:border-none md:rounded-none md:grid md:grid-cols-4 md:items-center md:gap-4">
//               <div className="flex items-center gap-4 mb-4 md:mb-0">
//                 <div className="relative h-20 w-20 rounded-md overflow-hidden border">
//                   <Image
//                     src={img1}
//                     alt="H1 Gamepad"
//                     width={80}
//                     height={80}
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="font-medium">H1 Gamepad</h3>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center md:justify-center mb-4 md:mb-0">
//                 <span className="md:hidden font-medium">Price:</span>
//                 <span className="font-medium">$550</span>
//               </div>
//               <div className="flex justify-between items-center md:justify-center mb-4 md:mb-0">
//                 <span className="md:hidden font-medium">Quantity:</span>
//                 <div className="relative">
//                   <Input type="number" min="1" defaultValue="02" className="w-20 pr-8 text-center" />
//                   <div className="absolute right-0 top-0 h-full flex flex-col">
//                     <button className="flex-1 px-2 text-xs border-l">▲</button>
//                     <button className="flex-1 px-2 text-xs border-l border-t">▼</button>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center md:justify-end">
//                 <span className="md:hidden font-medium">Subtotal:</span>
//                 <div className="flex items-center gap-2">
//                   <span className="font-medium">$1100</span>
//                   <button className="text-red-500 hover:text-red-700 transition-colors">
//                     <X size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Cart Actions */}
//           <div className="flex flex-col justify-between sm:flex-row gap-4 mt-8">
//             <Button variant="outline" className="flex p-6" asChild>
//               <Link href="/">Return To Shop</Link>
//             </Button>
//             <div className="flex gap-4">
//               <Button variant="outline" className="flex-1 p-6">
//                 Update Cart
//               </Button>
//               <Button variant="outline" className="flex-1 p-6 text-red-500 hover:text-red-700 hover:bg-red-50">
//                 Remove all
//               </Button>
//             </div>
//           </div>

//       </div>

        
//         </div>
//         <div className="flex py-10 justify-between w-full gap-[100px]">

//           {/* Coupon Code */}
//           <div className="mt-8 flex w-full flex-col sm:flex-row gap-4">
//             <Input placeholder="Coupon Code" className="flex-1 p-6" />
//             <Button variant="outline" className="sm:w-24 p-6 text-red-500 hover:text-red-700 hover:bg-red-50">
//               Apply
//             </Button>
//           </div>

//         {/* Cart Total */}
//         <div className="lg:col-span-1 w-full py-8">
//           <Card className="p-6">
//             <h2 className="text-xl font-bold mb-6">Cart Total</h2>
//             <div className="space-y-4">
//               <div className="flex justify-between pb-4">
//                 <span>Subtotal:</span>
//                 <span className="font-medium">$1750</span>
//               </div>
//               <div className="flex justify-between pb-4 border-b">
//                 <span>Shipping:</span>
//                 <span className="font-medium text-green-600">Free</span>
//               </div>
//               <div className="flex justify-between pt-2 text-lg font-bold">
//                 <span>Total:</span>
//                 <span>$1750</span>
//               </div>
//               <Button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white">Proceed to checkout</Button>
//             </div>
//           </Card>
//         </div>
//         </div>
//     </div>
//   )
// }