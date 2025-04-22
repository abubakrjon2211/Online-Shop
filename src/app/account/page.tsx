

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import AccountSidebar from "@/components/account-sidebar"

// export default function AccountPage() {
//   return (
//     <div className="container mx-auto px-4 py-20">
//       {/* Breadcrumb */}
//       <nav className="flex items-center text-sm text-gray-500 mb-8">
//         <Link href="/" className="hover:text-gray-700">
//           Home
//         </Link>
//         <span className="mx-2">/</span>
//         <span className="text-gray-900">My Account</span>
//       </nav>

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Sidebar */}
//         <AccountSidebar activePage="profile" />

//         {/* Main Content */}
//         <div className="flex-1">
//           <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
//             <h2 className="text-2xl font-medium text-red-500 mb-8">Profile</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//                   First name
//                 </label>
//                 <Input id="firstName" defaultValue="Md" className="w-full border-gray-300" />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//                   Last name
//                 </label>
//                 <Input id="lastName" defaultValue="Rimel" className="w-full border-gray-300" />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email address
//                 </label>
//                 <Input id="email" type="email" defaultValue="rimel1111@gmail.com" className="w-full border-gray-300" />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//                   Street address
//                 </label>
//                 <Input id="address" defaultValue="Kingston, 5236, United State" className="w-full border-gray-300" />
//               </div>
//             </div>

//             <h2 className="text-xl font-medium text-gray-900 mt-10 mb-6">Password Changes</h2>

//             <div className="space-y-6">
//               <div className="space-y-2">
//                 <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
//                   Current password
//                 </label>
//                 <Input id="currentPassword" type="password" className="w-full border-gray-300" />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
//                     New password
//                   </label>
//                   <Input id="newPassword" type="password" className="w-full border-gray-300" />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                     Confirm new password
//                   </label>
//                   <Input id="confirmPassword" type="password" className="w-full border-gray-300" />
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end mt-10 space-x-4">
//               <Button variant="outline" className="px-6">
//                 Cancel
//               </Button>
//               <Button className="px-6 bg-red-500 hover:bg-red-600">Save Changes</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
