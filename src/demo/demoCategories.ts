import type { Category, CategoryCreateFields, CategoryUpdateFields } from "@/schemas/category.ts";
import { DEMO_CATEGORIES, DEMO_GOALS, getNextCategoryId } from "./demoData.ts";

const delay = () => new Promise(resolve => setTimeout(resolve, 300));

export async function getAllCategories(): Promise<Category[]> {
  await delay();
  return [...DEMO_CATEGORIES];
}

export async function getCategory(id: number): Promise<Category> {
  await delay();
  const category = DEMO_CATEGORIES.find(c => c.id === id);
  if (!category) {
    throw new Error("Category not found");
  }
  return { ...category };
}

export async function createCategory(data: CategoryCreateFields): Promise<Category> {
  await delay();
  
  const newCategory: Category = {
    id: getNextCategoryId(),
    name: data.name,
    goalCount: 0,
  };
  
  DEMO_CATEGORIES.push(newCategory);
  return newCategory;
}

export async function updateCategory(id: number, data: CategoryUpdateFields): Promise<void> {
  await delay();
  
  const index = DEMO_CATEGORIES.findIndex(c => c.id === id);
  if (index === -1) {
    throw new Error("Category not found");
  }
  
  DEMO_CATEGORIES[index] = {
    ...DEMO_CATEGORIES[index],
    name: data.name,
  };
  
  DEMO_GOALS.forEach(goal => {
    if (goal.goalCategoryId === id) {
      goal.categoryName = data.name;
    }
  });
}

export async function deleteCategory(id: number): Promise<void> {
  await delay();
  
  const index = DEMO_CATEGORIES.findIndex(c => c.id === id);
  if (index === -1) {
    throw new Error("Category not found");
  }
  
  DEMO_GOALS.forEach(goal => {
    if (goal.goalCategoryId === id) {
      goal.goalCategoryId = null;
      goal.categoryName = null;
    }
  });
  
  DEMO_CATEGORIES.splice(index, 1);
}
