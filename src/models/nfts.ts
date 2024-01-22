import mongoose from 'mongoose';

const NFTSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUri: {
      type: String,
      required: true,
    },
    tokenId: {
      type: Number,
      required: true,
      unique: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    voteCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const NFT = mongoose.model('NFT', NFTSchema);

export default NFT;
