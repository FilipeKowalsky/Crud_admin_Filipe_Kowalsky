import client from "./configuration";

const startDatabase = async (): Promise<void> => {
  await client.connect();
  console.log("Database started.");
};

export default startDatabase;
