import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

const brandsData = [
  { name: "McVitie's", url: "http://www.mcvities.co.uk", category: "Biscuits" },
  { name: "Ülker", url: "http://www.ulker.com", category: "Biscuits" },
  { name: "Cirio", url: "http://www.cirio.it", category: "Canned Food" },
  { name: "Rognoni", url: "http://www.rognoniformaggi.it", category: "Cheese" },
  { name: "Kinder", url: "http://www.kinder.com", category: "Chocolate" },
  { name: "Lindt", url: "http://www.chocolate.lindt.com", category: "Chocolate" },
  { name: "Milka", url: "http://www.mondelezinternational.com", category: "Chocolate" },
  { name: "Toblerone", url: "http://www.mondelezinternational.com", category: "Chocolate" },
  { name: "Cadbury", url: "http://www.mondelezinternational.com", category: "Chocolate" },
  { name: "Cocio", url: "http://www.cocio.com", category: "Chocolate Milk" },
  { name: "Ferrero", url: "http://www.ferrero.com", category: "Chocolate" },
  { name: "Lavazza", url: "http://www.lavazza.com", category: "Coffee" },
  { name: "Melitta", url: "http://www.melitta.com", category: "Coffee" },
  { name: "ISAS", url: "http://www.isas.it", category: "Coffee" },
  { name: "Puck", url: "http://www.arla.com", category: "Cheese" },
  { name: "Arla", url: "http://www.arla.com", category: "Dairy" },
  { name: "Dano", url: "http://www.arla.com", category: "Dairy" },
  { name: "Red Bull", url: "http://www.redbull.com", category: "Energy Drink" },
  { name: "Salomon", url: "http://www.salomon-foodworld.com", category: "Frozen Food" },
  { name: "Orogel", url: "http://www.orogel.com", category: "Frozen Food" },
  { name: "Granini", url: "http://www.granini.com", category: "Juice" },
  { name: "Réa", url: "http://www.rea.fr", category: "Juice" },
  { name: "Haribo", url: "http://www.haribo.com", category: "Candy" },
  { name: "Nutella", url: "http://www.nutella.com", category: "Spread" },
  { name: "Langnese", url: "http://www.langnese-honey.com", category: "Honey" },
  { name: "Kalfany", url: "http://www.kalfany.de", category: "Candy" },
  { name: "Carpigiani", url: "http://www.carpigiani.com", category: "Machines" },
  { name: "Hero", url: "http://www.hero-group.ch", category: "Jam" },
  { name: "Schwartau", url: "http://www.schwartau.de", category: "Jam" },
  { name: "Biadgi", url: "http://www.biadgi.com", category: "Spices" },
  { name: "Monbana", url: "http://www.monbana.com", category: "Chocolate" },
  { name: "Tic Tac", url: "http://www.tictac.com", category: "Candy" },
  { name: "Powermints", url: "http://www.powermints.de", category: "Candy" },
  { name: "1883", url: "http://www.1883.com", category: "Syrups" },
  { name: "Fabbri", url: "http://www.en.fabbri1905.com", category: "Syrups" },
  { name: "Nature's Harvest", url: "http://www.facebook.com/mynaturesharvest/", category: "Fruits" },
  { name: "FIJI Water", url: "http://www.fijiwater.com", category: "Water" },
  { name: "BRITA", url: "http://www.brita.com", category: "Water Filters" },
  { name: "Jacobs", url: "http://www.jacobscoffee.ge", category: "Coffee" },
  { name: "Rummo", url: "http://www.pastarummo.com", category: "Pasta" },
  { name: "Caffarel", url: "http://www.caffarel.com", category: "Chocolate" },
  { name: "Kokola", url: "http://www.kokolabiscuit.com", category: "Biscuits" },
  { name: "Costa d'Oro", url: "http://www.oliocostadoro.com", category: "Olive Oil" },
  { name: "Ristoris", url: "http://www.ristoris.it", category: "Coffee" },
  { name: "Siafa", url: "http://www.siafadates.com", category: "Dates" },
  { name: "Bahlsen", url: "http://www.bahlsen.com", category: "Biscuits" },
  { name: "Loacker", url: "http://www.loacker.com", category: "Wafers" },
  { name: "Corny", url: "http://www.corny.de", category: "Energy Bar" },
  { name: "Lorenz", url: "http://www.lorenz-snacks.com", category: "Snacks" },
  { name: "Molini Fagioli", url: "http://www.molinifagioli.it", category: "Flour" },
  { name: "Lurpak", url: "http://www.lurpak.com", category: "Butter" },
  { name: "Gaggia", url: "http://www.gaggia.com/", category: "Machines" },
  { name: "Motta", url: "http://www.motta-usa.com", category: "Cured Meats" },
  { name: "Be Fresh", url: "http://www.befreshproduce.com", category: "Fruits" },
  { name: "MTR", url: "https://www.mtrfoods.com/", category: "Indian Food" }
];

const branchesData = [
  { name: "Head Office", address: "Maafannu, Male', Maldives", phone: "+960 332 0000", location: "Male" },
  { name: "Euro Store 1", address: "Majeedhee Magu, Male'", phone: "+960 333 1111", location: "Male" },
  { name: "Euro Store 2", address: "Orchid Magu, Male'", phone: "+960 333 2222", location: "Male" },
  { name: "Hulhumale Branch", address: "Nirolhu Magu, Hulhumale'", phone: "+960 335 3333", location: "Hulhumale" },
  { name: "Addu Branch", address: "Link Road, Hithadhoo", phone: "+960 688 4444", location: "Addu" },
  { name: "Fuvahmulah Branch", address: "Main Road", phone: "+960 686 5555", location: "Fuvahmulah" },
  { name: "Kulhudhuffushi Branch", address: "Ameenee Magu", phone: "+960 652 6666", location: "Kulhudhuffushi" },
  { name: "Thinadhoo Branch", address: "Main Road", phone: "+960 684 7777", location: "Thinadhoo" },
  { name: "Naifaru Branch", address: "Bodu Magu", phone: "+960 662 8888", location: "Naifaru" },
  { name: "Dhidhdhoo Branch", address: "Main Street", phone: "+960 650 9999", location: "Dhidhdhoo" },
  { name: "Eydhafushi Branch", address: "Beach Road", phone: "+960 660 0000", location: "Eydhafushi" }
];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  await storage.seedBrands(brandsData);
  await storage.seedBranches(branchesData);

  app.get(api.brands.list.path, async (req, res) => {
    const brands = await storage.getBrands();
    res.json(brands);
  });

  app.get(api.branches.list.path, async (req, res) => {
    const branches = await storage.getBranches();
    res.json(branches);
  });

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
