import type { LoginFields } from "@/schemas/login.ts";
import type { LoginResponse } from "@/services/api.login.ts";
import type { UserSignupFields, UserReadOnly } from "@/schemas/users.ts";
import { DEMO_USERS, getNextUserId } from "./demoData.ts";

const delay = () => new Promise(resolve => setTimeout(resolve, 300));

function createDemoJWT(username: string, role: string, userId: number): string {
  const header = {
    alg: "HS256",
    typ: "JWT"
  };
  
  const payload = {
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": userId.toString(),
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": username,
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": role,
    exp: Math.floor(Date.now() / 1000) + 86400,
    iat: Math.floor(Date.now() / 1000)
  };
  
  const base64UrlEncode = (obj: object) => {
    const json = JSON.stringify(obj);
    return btoa(json)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  };
  
  const encodedHeader = base64UrlEncode(header);
  const encodedPayload = base64UrlEncode(payload);
  const fakeSignature = "demo-signature";
  
  return `${encodedHeader}.${encodedPayload}.${fakeSignature}`;
}

export async function login(fields: LoginFields): Promise<LoginResponse> {
  await delay();
  
  const { username } = fields;
  
  let role = "User";
  if (username.toLowerCase().includes("superadmin")) {
    role = "SuperAdmin";
  } else if (username.toLowerCase().includes("admin")) {
    role = "Admin";
  }
  
  const userId = Math.floor(Math.random() * 10000);
  const token = createDemoJWT(username, role, userId);
  
  return {
    username,
    role,
    token,
    expiresAt: new Date(Date.now() + 86400000).toISOString(),
  };
}

export async function register(userData: UserSignupFields): Promise<UserReadOnly> {
  await delay();
  
  const newUser: UserReadOnly = {
    id: getNextUserId(),
    username: userData.username,
    email: userData.email,
    firstname: userData.firstname,
    lastname: userData.lastname,
    userRole: "User",
  };
  
  DEMO_USERS.push(newUser);
  
  return newUser;
}
