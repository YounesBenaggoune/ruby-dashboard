import { FC } from 'react';

type IconProp = {
  className?: string;
  color?: string;
  size?: number;
};

const defaultProps: IconProp = {
  className: 'icon',
  color: '#9a9999',
  size: 20,
};

export const UserProfileIcon: FC<IconProp> = ({ className, color, size }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.39999 20.5123C2.39999 16.7368 5.55428 13.6761 12 13.6761C18.4457 13.6761 21.6 16.7368 21.6 20.5123C21.6 21.113 21.1618 21.5999 20.6212 21.5999H3.37882C2.83823 21.5999 2.39999 21.113 2.39999 20.5123Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M15.6 5.9999C15.6 7.98813 13.9882 9.5999 12 9.5999C10.0118 9.5999 8.39999 7.98813 8.39999 5.9999C8.39999 4.01168 10.0118 2.3999 12 2.3999C13.9882 2.3999 15.6 4.01168 15.6 5.9999Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

UserProfileIcon.defaultProps = defaultProps;
