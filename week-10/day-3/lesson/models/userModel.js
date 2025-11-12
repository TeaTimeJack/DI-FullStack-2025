import {dbneon} from "../config/db.js";
import bcrypt from "bcrypt";

export const registerUser = async (email, password) => {
    const trx = await dbneon.transaction();
    try {
        const hashPassword = await bcrypt.hash(password + "", 10);

        const [user] = await trx("users_a").insert(
            {
                email: email.toLowerCase(),
                password: hashPassword,
            },
            ["email","id"]
        );

        await trx.commit();

    } catch (err) {
        await trx.rollback();
        console.log("the error=", err);
        throw err
        
    }
}


export const getUserByEmail = async (email) =>{
    try {
        const user = await dbneon('users_a').select('id','email','password')
        .where({email: email.toLowerCase()})
        .first();
        return user
        
    } catch (error) {
        throw error
    }
}

