import { MongoClient, WithId } from "mongodb";
import { Tower } from "./components/Tower";

const collectionName = "london";

class TowerRepository {
  private client: MongoClient;

  private constructor(client: MongoClient) {
    this.client = client;
  }

  public static async create(): Promise<TowerRepository> {
    const host = process.env.DB_HOST ?? "localhost";
    const port = process.env.DB_PORT ?? 27017;
    const db = process.env.DB_NAME ?? "";

    const uri = `mongodb://${host}:${port}/${db}`;
    const auth = {
      username: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD,
    };

    const client = new MongoClient(uri, {
      auth,
    });
    await client.connect();
    console.info("DB connected");

    return new TowerRepository(client);
  }

  public getTowers(): Promise<WithId<Tower>[]> {
    return this.client
      .db()
      .collection<Tower>(collectionName)
      .find({})
      .toArray();
  }

  public async addTowers(towers: Tower[]): Promise<void> {
    await this.client.db().collection<Tower>(collectionName).insertMany(towers);
  }
}

export default TowerRepository;
