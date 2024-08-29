import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <main className="max-w-[1150px] mx-auto w-full">{children}</main>;
}
