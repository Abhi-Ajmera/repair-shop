const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Header/> */}
      <div>{children}</div>
      {/* <Footer/> */}
    </>
  );
};
export default MainLayout;
