export default interface Message {
  id: string;
  text: string;
  userId: string;
  user: string;
  avatar?: string;
  editedAt?: Date | string;
  createdAt: Date | string;
  likes?: number;
  timeShow?: string;
}
