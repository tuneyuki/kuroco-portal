import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  label: string;
};
export default function SectionHeading({ icon, label }: Props) {
  return (
    <h2 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
      {icon}
      {label}
    </h2>
  );
}
