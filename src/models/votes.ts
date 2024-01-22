import mongoose from 'mongoose';

const VoteSchema = new mongoose.Schema(
  {
    nftId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NFT',
    },
    voter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const Vote = mongoose.model('Vote', VoteSchema);

export default Vote;
