import type { UserReadOnly, UserUpdateFields, PaginatedResult, UserSignupFields } from "@/schemas/users.ts";
import { DEMO_USERS } from "./demoData.ts";

const delay = () => new Promise(resolve => setTimeout(resolve, 300));

export async function getAllUsers(
  pageNumber: number = 1,
  pageSize: number = 10,
  username?: string,
  email?: string,
  userRole?: string
): Promise<PaginatedResult<UserReadOnly>> {
  await delay();
  
  let filtered = [...DEMO_USERS];
  
  if (username) {
    filtered = filtered.filter(u => 
      u.username.toLowerCase().includes(username.toLowerCase())
    );
  }
  
  if (email) {
    filtered = filtered.filter(u => 
      u.email.toLowerCase().includes(email.toLowerCase())
    );
  }
  
  if (userRole) {
    filtered = filtered.filter(u => u.userRole === userRole);
  }
  
  const totalRecords = filtered.length;
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const data = filtered.slice(startIndex, endIndex);
  
  return {
    data,
    totalRecords,
    pageNumber,
    pageSize,
  };
}

export async function getUserById(id: number): Promise<UserReadOnly> {
  await delay();
  const user = DEMO_USERS.find(u => u.id === id);
  if (!user) {
    throw new Error("User not found");
  }
  return { ...user };
}

export async function getUserByUsername(username: string): Promise<UserReadOnly> {
  await delay();
  const user = DEMO_USERS.find(u => u.username === username);
  if (!user) {
    throw new Error("User not found");
  }
  return { ...user };
}

export async function register(userData: UserSignupFields): Promise<UserReadOnly> {
  await delay();
  
  if (DEMO_USERS.find(u => u.username === userData.username)) {
    throw new Error("Username already exists");
  }
  
  if (DEMO_USERS.find(u => u.email === userData.email)) {
    throw new Error("Email already exists");
  }
  
  const newUser: UserReadOnly = {
    id: Math.max(...DEMO_USERS.map(u => u.id), 0) + 1,
    username: userData.username,
    email: userData.email,
    firstname: userData.firstname,
    lastname: userData.lastname,
    userRole: "User",
  };
  
  DEMO_USERS.push(newUser);
  
  return { ...newUser };
}

export async function updateUser(id: number, userData: UserUpdateFields): Promise<UserReadOnly> {
  await delay();
  
  const index = DEMO_USERS.findIndex(u => u.id === id);
  if (index === -1) {
    throw new Error("User not found");
  }
  
  DEMO_USERS[index] = {
    ...DEMO_USERS[index],
    ...(userData.username && { username: userData.username }),
    ...(userData.email && { email: userData.email }),
    ...(userData.firstname && { firstname: userData.firstname }),
    ...(userData.lastname && { lastname: userData.lastname }),
    ...(userData.userRole && { userRole: userData.userRole }),
  };
  
  return { ...DEMO_USERS[index] };
}

export async function deleteUser(id: number): Promise<void> {
  await delay();
  
  const index = DEMO_USERS.findIndex(u => u.id === id);
  if (index === -1) {
    throw new Error("User not found");
  }
  
  DEMO_USERS.splice(index, 1);
}

export async function promoteToAdmin(id: number): Promise<UserReadOnly> {
  await delay();
  
  const index = DEMO_USERS.findIndex(u => u.id === id);
  if (index === -1) {
    throw new Error("User not found");
  }
  
  if (DEMO_USERS[index].userRole === "User") {
    DEMO_USERS[index].userRole = "Admin";
  } else if (DEMO_USERS[index].userRole === "Admin") {
    DEMO_USERS[index].userRole = "SuperAdmin";
  }
  
  return { ...DEMO_USERS[index] };
}

export async function demoteToUser(id: number): Promise<UserReadOnly> {
  await delay();
  
  const index = DEMO_USERS.findIndex(u => u.id === id);
  if (index === -1) {
    throw new Error("User not found");
  }
  
  if (DEMO_USERS[index].userRole === "SuperAdmin") {
    DEMO_USERS[index].userRole = "Admin";
  } else if (DEMO_USERS[index].userRole === "Admin") {
    DEMO_USERS[index].userRole = "User";
  }
  
  return { ...DEMO_USERS[index] };
}
