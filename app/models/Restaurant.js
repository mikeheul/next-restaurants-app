import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const restaurantSchema = new Schema(
    {
        nom: String,
        adresse: String,
        code_postal: String,
        ville: String,
        superficie: Number,
        telephone: String,
        website: String
    },
)

const Restaurant = mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;