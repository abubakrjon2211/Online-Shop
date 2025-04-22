"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface AccountSidebarProps {
  activePage: string
}

export default function AccountSidebar({ activePage }: AccountSidebarProps) {
  const menuItems = [
    {
      title: "Manage My Account",
      items: [
        { name: "profile", label: "My Profile", href: "/account" },
        { name: "address", label: "Address Book", href: "/account/address" },
        { name: "payment", label: "My Payment Options", href: "/account/payment" },
      ],
    },
    {
      title: "My Orders",
      items: [
        { name: "returns", label: "My Returns", href: "/account/returns" },
        { name: "cancellations", label: "My Cancellations", href: "/account/cancellations" },
      ],
    },
    {
      title: "My Wishlist",
      items: [{ name: "wishlist", label: "My Wishlist", href: "/account/wishlist" }],
    },
  ]

  return (
    <aside className="w-full md:w-64 mb-8 md:mb-0">
      <nav className="space-y-8">
        {menuItems.map((section) => (
          <div key={section.title} className="space-y-3">
            <h3 className="font-medium text-lg text-gray-900">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-1 px-2 text-gray-600 hover:text-red-500 transition-colors",
                      activePage === item.name && "text-red-500 font-medium",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
