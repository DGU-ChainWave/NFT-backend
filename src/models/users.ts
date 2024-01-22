import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    walletAddress: {
      type: String,
      required: true,
      unique: true,
    },
  },
  // 생성일(createdAt)과 수정일(updatedAt)을 자동으로 관리
  { timestamps: true },
);

const User = mongoose.model('User', UserSchema);

export default User;
