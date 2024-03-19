import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("65f921c125b21818de0a");

export const account = new Account(client);

//Database

export const databases = new Databases(client, "65f9224c0b94a45cfe26");
