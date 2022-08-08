import connectionPromise from "./connetion.js";

export const getMenu = async () => {
    let connection = await connectionPromise;
    let results = await connection.all(
        `
            SELECT *
            FROM Cake
        `
    );

    return results
}