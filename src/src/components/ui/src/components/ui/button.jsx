export function Button({ children, className, asChild }) {
  if (asChild) return children;
  return <button className={className}>{children}</button>;
}
