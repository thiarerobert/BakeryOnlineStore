import sqlite3 from "sqlite3";
import { open } from "sqlite";

const connectionPromise = open({
    filename: process.env.DB_FILE,
    driver: sqlite3.Database  
})

connectionPromise.then((connection) => {
    connection.exec(
        `
            CREATE TABLE IF NOT EXISTS Cake(
                id_cake INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                picture TEXT NOT NULL,
                price INT NOT NULL,
                components TEXT NOT NULL 
            );

            INSERT INTO Cake(name, picture, price, components)
            VALUES
            ('Biscuit au pépite de chocolat', '/img/biscuitCake.jpg', 7, 'Sugar blé crème'),
            ('Gâteau ordinaire', '/img/ordinaryCake.jpg', 10, 'Sugar blé crème'),
            ('Gâteau personalisé', '/img/personalizeCake.jpg', 20, 'Sugar blé crème'),
            ('Gâteau rose', '/img/pinkCake.jpg', 15, 'Sugar blé crème'),
            ('Gâteau rouge', '/img/redCake.jpg', 15, 'Sugar blé crème'),
            ('Gâteau à la fraise', '/img/strawberryCake.jpg', 17, 'Sugar blé crème');
        `
    );
})

export default connectionPromise;