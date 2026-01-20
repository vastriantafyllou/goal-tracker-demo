import type { LoginFields } from "@/schemas/login.ts";
import type { LoginResponse } from "@/services/api.login.ts";
import type { UserSignupFields, UserReadOnly } from "@/schemas/users.ts";
import { DEMO_USERS, getNextUserId, type DemoUser } from "./demoData.ts";

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
  
  const { username, password } = fields;
  
  const user = DEMO_USERS.find(
    (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );
  
  if (!user) {
    throw new Error("Invalid username or password");
  }
  
  const token = createDemoJWT(user.username, user.userRole, user.id);
  
  return {
    username: user.username,
    role: user.userRole,
    token,
    expiresAt: new Date(Date.now() + 86400000).toISOString(),
  };
}

export async function register(userData: UserSignupFields): Promise<UserReadOnly> {
  await delay();
  
  const existingUser = DEMO_USERS.find(
    (u) => u.username.toLowerCase() === userData.username.toLowerCase() ||
           u.email.toLowerCase() === userData.email.toLowerCase()
  );
  
  if (existingUser) {
    throw new Error("Username or email already exists");
  }
  
  const newUser: DemoUser = {
    id: getNextUserId(),
    username: userData.username,
    email: userData.email,
    firstname: userData.firstname,
    lastname: userData.lastname,
    userRole: "User",
    password: userData.password,
  };
  
  DEMO_USERS.push(newUser);
  
  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
}

// Demo password recovery - simulates sending email (always succeeds in demo mode)
export async function sendRecoveryEmail(
  email: string,
  _captchaToken?: string
): Promise<{ message: string }> {
  await delay();
  
  // In demo mode, we just simulate success
  // We don't reveal if the email exists for security reasons (same as real API)
  console.log(`[DEMO] Password recovery email would be sent to: ${email}`);
  
  return {
    message: "If an account exists with that email, a recovery link has been sent."
  };
}

export async function validateResetToken(
  _token: string
): Promise<{ isValid: boolean; message: string }> {
  await delay();
  
  // In demo mode, always return valid for any token
  return {
    isValid: true,
    message: "Token is valid"
  };
}

export async function resetPassword(
  _token: string,
  newPassword: string
): Promise<{ message: string }> {
  await delay();
  
  // In demo mode, we can't actually reset password without knowing which user
  // Just simulate success
  console.log(`[DEMO] Password would be reset to: ${newPassword}`);
  
  return {
    message: "Password has been reset successfully"
  };
}
