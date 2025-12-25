import { db } from "./db";
import { type InsertBrand, type InsertBranch, type InsertContactMessage } from "@shared/schema";
import { brands, branches, contactMessages } from "@shared/schema";

export interface IStorage {
  getBrands(): Promise<any[]>;
  getBranches(): Promise<any[]>;
  createContactMessage(msg: InsertContactMessage): Promise<any>;
  seedBrands(brandsList: InsertBrand[]): Promise<void>;
  seedBranches(branchesList: InsertBranch[]): Promise<void>;
}

// In-memory storage for demo mode (when no database)
export class MemStorage implements IStorage {
  private brandsData: any[] = [];
  private branchesData: any[] = [];
  private messagesData: any[] = [];

  async getBrands(): Promise<any[]> {
    return this.brandsData;
  }

  async getBranches(): Promise<any[]> {
    return this.branchesData;
  }

  async createContactMessage(msg: InsertContactMessage): Promise<any> {
    const message = { id: this.messagesData.length + 1, ...msg };
    this.messagesData.push(message);
    return message;
  }

  async seedBrands(brandsList: InsertBrand[]): Promise<void> {
    this.brandsData = brandsList.map((b, i) => ({ id: i + 1, ...b }));
  }

  async seedBranches(branchesList: InsertBranch[]): Promise<void> {
    this.branchesData = branchesList.map((b, i) => ({ id: i + 1, ...b }));
  }
}

// Database storage for production
export class DatabaseStorage implements IStorage {
  async getBrands(): Promise<any[]> {
    if (!db) throw new Error("Database not configured");
    return await db.select().from(brands);
  }

  async getBranches(): Promise<any[]> {
    if (!db) throw new Error("Database not configured");
    return await db.select().from(branches);
  }

  async createContactMessage(msg: InsertContactMessage): Promise<any> {
    if (!db) throw new Error("Database not configured");
    const [message] = await db.insert(contactMessages).values(msg).returning();
    return message;
  }

  async seedBrands(brandsList: InsertBrand[]): Promise<void> {
    if (!db) throw new Error("Database not configured");
    const count = await db.select().from(brands);
    if (count.length === 0) {
      await db.insert(brands).values(brandsList);
    }
  }

  async seedBranches(branchesList: InsertBranch[]): Promise<void> {
    if (!db) throw new Error("Database not configured");
    const count = await db.select().from(branches);
    if (count.length === 0) {
      await db.insert(branches).values(branchesList);
    }
  }
}

// Use in-memory storage if no database, otherwise use database storage
export const storage = db ? new DatabaseStorage() : new MemStorage();
