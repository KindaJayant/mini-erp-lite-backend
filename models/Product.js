import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  supplier: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
