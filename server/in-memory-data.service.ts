import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      {
        id: 41,
        item: "Fish",
        quntity: "12",
        unitPrice: "10",
        country: "Canada"
      },
      {
        id: 40,
        item: "Milk",
        quntity: "22",
        unitPrice: "90",
        country: "Canada"
      },
      {
        id: 42,
        item: "Sally",
        quntity: "45",
        unitPrice: "14",
        country: "Canada"
      },
      {
        id: 39,
        item: "Kat",
        quntity: "676",
        unitPrice: "15",
        country: "United States"
      },
      {
        id: 34,
        item: "mount",
        quntity: "9",
        unitPrice: "12",
        country: "United States"
      },
      {
        id: 43,
        item: "butter",
        quntity: "6",
        unitPrice: "1",
        country: "United States"
      },
      {
        id: 44,
        item: "Elena",
        quntity: "34",
        unitPrice: "34",
        country: "United States"
      },
      {
        id: 45,
        item: "cheese",
        quntity: "54",
        unitPrice: "34",
        country: "United States"
      },
      {
        id: 46,
        item: "Kathya",
        quntity: "67",
        unitPrice: "76",
        country: "United States"
      },
      {
        id: 47,
        item: "biscut",
        quntity: "23",
        unitPrice: "89",
        country: "United States"
      }
    ];
    return { members };
  }
}
