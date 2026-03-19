export function Button({
  children,
  className = "",
  asChild = false,
  ...props
}) {
  if (asChild) {
    return children;
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
