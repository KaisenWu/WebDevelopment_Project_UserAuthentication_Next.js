import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Kaisen:Kaisen@nextcluster.omgf0nw.mongodb.net/credentials?retryWrites=true&w=majority"
  );
  return client;
}
