import mongoose from "mongoose";

const filmeSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    anoLancamento : { type: Number }
}, { versionKey: false });

const filme = mongoose.model("filmes", filmeSchema);

export default filme;