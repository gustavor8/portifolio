export default interface NavListProps {
  title: string;
  icon: React.ReactNode;
  links?: { href: string; label: string }[];
  linkItem?: string;
}
