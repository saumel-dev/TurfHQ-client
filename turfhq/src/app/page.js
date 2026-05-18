export default function Home() {
  return (
    <div className="relative mb-5">
      <div className="h-120 w-full bg-[url('https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>
        <div>
          <h1 className="text-white text-5xl left-1/2 -translate-x-1/2 top-1/2 font-bold absolute">Hello</h1>
        </div>
      </div>
    </div>
  );
}