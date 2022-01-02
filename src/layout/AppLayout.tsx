import TopNav from "../core/TopNav";

export default function AppLayout({ children }: IProps) {
  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <TopNav />
      {children}
    </div>
  );
}
