import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper type to add a className prop to a component
export type PropsWithClassName<Props = unknown> = {
  className?: string;
} & Props;

// Helper fn to merge tailwind classes with a className prop
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
