//1) Hozzon létre egy kollekciót "Helsinki" néven. MongoDB segítségével, Atlas felhőszolgáltatásba!
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://juhaszadam5:1234jelszó@cluster0.xkxgjbu.mongodb.net/"

async function KollekcioLetrehozas() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        await db.createCollection("Helsinki");
        console.log("A Helsinki kollekció a T14 adatbázisban létrejött.");
        client.close();
    }
    catch (err) {
        console.error("Hiba történt a kollekció létrehozása közben:", err);
    }
}
KollekcioLetrehozas();