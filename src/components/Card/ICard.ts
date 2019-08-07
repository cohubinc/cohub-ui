export default interface ICard {
  title: string;
  subtitle?: string;
  meta?: React.ReactNode;
  actions?: Array<{ name: string; action: any }>;
  imageUrl?: string;
  avatar?: boolean;
}
