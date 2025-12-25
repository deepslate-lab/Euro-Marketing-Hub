import { db } from "./db";
import { brands, branches, contactMessages, type InsertBrand, type InsertBranch, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getBrands(): Promise<any[]>;
  getBranches(): Promise<any[]>;
  createContactMessage(msg: InsertContactMessage): Promise<any>;
  seedBrands(brandsList: InsertBrand[]): Promise<void>;
  seedBranches(branchesList: InsertBranch[]): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getBrands(): Promise<any[]> {
    return await db.select().from(brands);
  }

  async getBranches(): Promise<any[]> {
    return await db.select().from(branches);
  }

  async createContactMessage(msg: InsertContactMessage): Promise<any> {
    const [message] = await db.insert(contactMessages).values(msg).returning();
    return message;
  }

  async seedBrands(brandsList: InsertBrand[]): Promise<void> {
    const count = await db.select().from(brands);
    if (count.length === 0) {
      await db.insert(brands).values(brandsList);
    }
  }

  async seedBranches(branchesList: InsertBranch[]): Promise<void> {
    const count = await db.select().from(branches);
    if (count.length === 0) {
      await db.insert(branches).values(branchesList);
    }
  }
}

export const storage = new DatabaseStorage();
