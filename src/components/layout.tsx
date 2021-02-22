import React from 'react';

export default function Layout({
  children,
}: {
  children?: JSX.Element | string;
}) {
  return <div>{children}</div>;
}
