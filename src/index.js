import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./config/app.js";

dotenv.config({
    path: "./.env"
});

const startserver = async () => {
    try {
        await connectDB();
        app.on("error", (error) => {
            console.error("Express server error:", error);
        });

        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};

startserver();