import { MongoClient, WithId } from "mongodb";
import { Tower } from "./components/Tower";

class TowerRepository {
  private client: MongoClient;

  private constructor(client: MongoClient) {
    this.client = client;
  }

  public static async create(): Promise<TowerRepository> {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();
    console.info("DB connected");

    return new TowerRepository(client);
  }

  public getTowers(): Promise<WithId<Tower>[]> {
    return this.client
      .db("london")
      .collection<Tower>("tower")
      .find({})
      .toArray();
  }

  public async addTowers(towers: Tower[]): Promise<void> {
    await this.client
      .db("london")
      .collection<Tower>("tower")
      .insertMany(towers);
  }
}

export default TowerRepository;
