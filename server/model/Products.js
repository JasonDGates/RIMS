import mongoose from 'mongoose';

const { Schema } = mongoose;

const productsSchema = new Schema({
  sku: {
    type: Number,
    require: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

export default mongoose.model('Product', productsSchema);
