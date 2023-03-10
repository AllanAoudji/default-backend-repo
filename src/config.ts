import dotenv from "dotenv";

const NODE_ENV = process.env.NODE_ENV ?? "development";

const path = `.env.${NODE_ENV}`;

dotenv.config({ path });

// --------------------------------------
// --------------------------------------
// Export more environment variables here

const PORT = process.env.PORT ?? "8000";

export { NODE_ENV, PORT };
