/** Una Interface es un contrato donde establecemos las reglas que debe cumplir un nuevo tipo de dato */
export interface User {
    name: string;
    username: string;
    password?: string;
    _id?: string;
    role?: string;
    userId?: string;
    updatedAt?: string;
    createdAt?: string;
}
