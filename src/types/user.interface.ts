import { UserRole } from "@/lib/auth-untils";

export interface UserInfo{
    name: string;
    email: string;
    role: UserRole;
  
}