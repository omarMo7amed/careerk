function DeleteButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-error border border-error hover:border-error/20 hover:bg-error/10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 px-4 py-2">
      {children}
    </button>
  );
}

export default DeleteButton;
