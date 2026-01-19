import type { Goal, GoalCreateFields, GoalUpdateFields } from "@/schemas/goal.ts";
import { DEMO_GOALS, DEMO_CATEGORIES, getNextGoalId } from "./demoData.ts";

const delay = () => new Promise(resolve => setTimeout(resolve, 300));

export async function getGoals(): Promise<Goal[]> {
  await delay();
  return [...DEMO_GOALS];
}

export async function getGoal(id: number): Promise<Goal> {
  await delay();
  const goal = DEMO_GOALS.find(g => g.id === id);
  if (!goal) {
    throw new Error("Goal not found");
  }
  return { ...goal };
}

export async function createGoal(data: GoalCreateFields): Promise<Goal> {
  await delay();
  
  const category = data.goalCategoryId 
    ? DEMO_CATEGORIES.find(c => c.id === data.goalCategoryId)
    : null;
  
  const newGoal: Goal = {
    id: getNextGoalId(),
    title: data.title,
    description: data.description || null,
    status: "InProgress",
    dueDate: data.dueDate || null,
    createdDate: new Date().toISOString(),
    goalCategoryId: data.goalCategoryId || null,
    categoryName: category?.name || null,
  };
  
  DEMO_GOALS.push(newGoal);
  
  if (category) {
    category.goalCount = (category.goalCount || 0) + 1;
  }
  
  return newGoal;
}

export async function updateGoal(id: number, data: GoalUpdateFields): Promise<void> {
  await delay();
  
  const index = DEMO_GOALS.findIndex(g => g.id === id);
  if (index === -1) {
    throw new Error("Goal not found");
  }
  
  const oldCategoryId = DEMO_GOALS[index].goalCategoryId;
  const newCategoryId = data.goalCategoryId;
  
  const category = newCategoryId 
    ? DEMO_CATEGORIES.find(c => c.id === newCategoryId)
    : null;
  
  DEMO_GOALS[index] = {
    ...DEMO_GOALS[index],
    title: data.title,
    description: data.description || null,
    status: data.status,
    dueDate: data.dueDate || null,
    goalCategoryId: newCategoryId || null,
    categoryName: category?.name || null,
  };
  
  if (oldCategoryId !== newCategoryId) {
    if (oldCategoryId) {
      const oldCategory = DEMO_CATEGORIES.find(c => c.id === oldCategoryId);
      if (oldCategory && oldCategory.goalCount) {
        oldCategory.goalCount--;
      }
    }
    if (newCategoryId && category) {
      category.goalCount = (category.goalCount || 0) + 1;
    }
  }
}

export async function deleteGoal(id: number): Promise<void> {
  await delay();
  
  const index = DEMO_GOALS.findIndex(g => g.id === id);
  if (index === -1) {
    throw new Error("Goal not found");
  }
  
  const categoryId = DEMO_GOALS[index].goalCategoryId;
  if (categoryId) {
    const category = DEMO_CATEGORIES.find(c => c.id === categoryId);
    if (category && category.goalCount) {
      category.goalCount--;
    }
  }
  
  DEMO_GOALS.splice(index, 1);
}
