"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function CheckoutForm() {
  const [saveInfo, setSaveInfo] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-3xl font-bold mb-8">Billing Details</h1>

      <form className="space-y-4">
        <div>
          <Input
            type="text"
            id="firstName"
            placeholder="First name"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div>
          <Input
            type="text"
            id="lastName"
            placeholder="Last name"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div>
          <Input
            type="text"
            id="streetAddress"
            placeholder="Street address"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div>
          <Input
            type="text"
            id="apartment"
            placeholder="Apartment, floor, etc. (optional)"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div>
          <Input
            type="text"
            id="townCity"
            placeholder="Town/City"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div>
          <Input
            type="tel"
            id="phone"
            placeholder="Phone number"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div>
          <Input
            type="email"
            id="email"
            placeholder="Email address"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div className="flex items-center space-x-2 pt-2">
          <Checkbox
            id="saveInfo"
            checked={saveInfo}
            onCheckedChange={(checked) => setSaveInfo(checked as boolean)}
            className="h-5 w-5 border-2 border-red-500 text-red-500 rounded"
          />
          <Label
            htmlFor="saveInfo"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Save this information for faster check-out next time
          </Label>
        </div>
      </form>
    </div>
  )
}
