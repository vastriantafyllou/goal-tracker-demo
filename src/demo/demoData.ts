import type { Goal } from "@/schemas/goal.ts";
import type { Category } from "@/schemas/category.ts";
import type { UserReadOnly } from "@/schemas/users.ts";

export interface DemoUser extends UserReadOnly {
  password: string;
}

export let DEMO_GOALS: Goal[] = [
  {
    id: 1,
    title: "Complete React Project",
    description: "Build a full-stack goal tracker application",
    status: "InProgress",
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    createdDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    goalCategoryId: 1,
    categoryName: "Development",
  },
  {
    id: 2,
    title: "Learn TypeScript",
    description: "Master TypeScript fundamentals and advanced patterns",
    status: "InProgress",
    dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    createdDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    goalCategoryId: 1,
    categoryName: "Development",
  },
  {
    id: 3,
    title: "Exercise Daily",
    description: "30 minutes of cardio every morning",
    status: "InProgress",
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    goalCategoryId: 2,
    categoryName: "Health",
  },
  {
    id: 4,
    title: "Read 12 Books This Year",
    description: "One book per month challenge",
    status: "InProgress",
    dueDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
    createdDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    goalCategoryId: 3,
    categoryName: "Personal",
  },
  {
    id: 5,
    title: "Launch Side Project",
    description: "Deploy SaaS application to production",
    status: "Completed",
    dueDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    createdDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
    goalCategoryId: 1,
    categoryName: "Development",
  },
];

export let DEMO_CATEGORIES: Category[] = [
  { id: 1, name: "Development", goalCount: 3 },
  { id: 2, name: "Health", goalCount: 1 },
  { id: 3, name: "Personal", goalCount: 1 },
  { id: 4, name: "Finance", goalCount: 0 },
  { id: 5, name: "Education", goalCount: 0 },
];

export let DEMO_USERS: DemoUser[] = [
  {
    id: 1,
    username: "demo-user",
    email: "user@demo.com",
    firstname: "Demo",
    lastname: "User",
    userRole: "User",
    password: "Demo123!",
  },
  {
    id: 2,
    username: "demo-admin",
    email: "admin@demo.com",
    firstname: "Demo",
    lastname: "Admin",
    userRole: "Admin",
    password: "Demo123!",
  },
  {
    id: 3,
    username: "superadmin",
    email: "superadmin@demo.com",
    firstname: "Super",
    lastname: "Admin",
    userRole: "SuperAdmin",
    password: "SuperAdmin123!",
  },
  {
    id: 4,
    username: "john-doe",
    email: "john@demo.com",
    firstname: "John",
    lastname: "Doe",
    userRole: "User",
    password: "Demo123!",
  },
  {
    id: 5,
    username: "jane-smith",
    email: "jane@demo.com",
    firstname: "Jane",
    lastname: "Smith",
    userRole: "User",
    password: "Demo123!",
  },
];

export const SUPERADMIN_CREDENTIALS = {
  username: "superadmin",
  password: "SuperAdmin123!",
};

let nextGoalId = 6;
let nextCategoryId = 6;
let nextUserId = 6;

export function getNextGoalId(): number {
  return nextGoalId++;
}

export function getNextCategoryId(): number {
  return nextCategoryId++;
}

export function getNextUserId(): number {
  return nextUserId++;
}
