import "dotenv/config";

export const config = {
    // Agregar todas las variables de entorno
    PORT: process.env.PORT || 3008,
    provider: process.env.provider,
    // Meta
    jwtToken: process.env.jwtToken,
    numberId: process.env.numberId,
    verifyToken: process.env.verifyToken,
    version: "v20.0",
};
