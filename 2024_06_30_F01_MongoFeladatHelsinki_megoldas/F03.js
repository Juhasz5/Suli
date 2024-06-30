//3) Listázza ki az azokat a sportágakat, amik torna vagy úszás sportágból vannak. A megjelenített adatokból, csak a sportág neve és a versenyszám neve látszódjon.
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://juhaszadam5:1234jelszó@cluster0.xkxgjbu.mongodb.net/"

async function Lekerdezes() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        const collection = db.collection("Helsinki");

        const eredmeny = await collection.find({
            $or: [
                {
                    sportAg: "torna"
                },
                {
                    sportAg: "uszas"
                }]
        }, { projection: { _id: 0, versenySzam: 1, sportAg: 1 } }).toArray();

        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba a művelet végrehajtása közben:", err);
    }
}

Lekerdezes();