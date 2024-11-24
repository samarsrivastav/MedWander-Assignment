import ComplaintForm from "./Form";

export const Home = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/";
    
  };

  return (
    <div className="h-screen p-5">
      <div className="title text-center text-3xl text-[rgb(113,113,122)] font-bold my-5 ">
        <div>
          Register Your <span className="text-[rgb(22,173,204)]">Complaint</span>
        </div>
      </div>
      <ComplaintForm />
      <div className="flex justify-center">
        <button
          type="button"
          className="w-sm bg-[red] text-white font-medium my-5 py-2 px-4 rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
