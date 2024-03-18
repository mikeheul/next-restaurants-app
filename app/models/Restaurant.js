// Import Mongoose and Schema from mongoose package
import mongoose, { Schema } from "mongoose";

// Connect to MongoDB using the provided URI in the environment variable MONGODB_URI
mongoose.connect(process.env.MONGODB_URI);

// Set Mongoose promises to use the global Promise object
mongoose.Promise = global.Promise;

// Define a schema for the Restaurant model
const restaurantSchema = new Schema(
    {
        // Define schema fields for restaurant document
        nom: String, // Name of the restaurant
        adresse: String, // Address of the restaurant
        code_postal: String, // Postal code of the restaurant
        ville: String, // City of the restaurant
        superficie: Number, // Size of the restaurant (in square units)
        telephone: String, // Phone number of the restaurant
        website: String // Website of the restaurant
    },
)

// Define the Restaurant model using the schema
// If the model already exists, use it; otherwise, create a new one
const Restaurant = mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);

// Export the Restaurant model for use in other files
export default Restaurant;
