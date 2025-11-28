"use client"

import { logoutUser } from "@/services/auth/logout"
import { Button } from "../ui/button"

const LogoutButton = () => {
    const handleLogout = async () => {
        await logoutUser()
    }
  return (
    <div><Button variant={"destructive"} onClick={handleLogout}>Logout</Button></div>
  )
}
export default LogoutButton