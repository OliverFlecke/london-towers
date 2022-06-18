import { MongoClient, WithId } from "mongodb";
import { Tower } from "./components/Tower";

class TowerRepository {
  private client: MongoClient;

  private constructor(client: MongoClient) {
    this.client = client;
  }

  public static async create(): Promise<TowerRepository> {
    const host = process.env.DB_HOST ?? "localhost";
    const port = process.env.DB_PORT ?? 27017;
    const db = process.env.DB_NAME;

    const uri = `mongodb://${host}:${port}/${db}`;
    console.log(uri);
    const client = new MongoClient(uri);
    await client.connect();
    console.info("DB connected");

    return new TowerRepository(client);
  }

  public getTowers(): Promise<WithId<Tower>[]> {
    return this.client.db().collection<Tower>("tower").find({}).toArray();
  }

  public async addTowers(towers: Tower[]): Promise<void> {
    await this.client.db().collection<Tower>("tower").insertMany(towers);
  }
}

export default TowerRepository;
