import connectionPromise from "./connetion.js";

export const getItem = async (id_cake) => {
    let connection = await connectionPromise;
    let results = await connection.get(
        `SELECT *
         FROM Cake
         WHERE id_cake = ?
        `,
        [id_cake]
    );
    return results;
}