import { useEffect, useState } from 'react';
import { getComplaint } from '../api/getcomplaint';
import { ComplaintCard } from './complaintCard';

interface ComplaintITF {
  title: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  dateSubmitted: Date;
  _id: string;
}

function Home() {
  const [complaint, setComplaint] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getComplaint();
      if (result.status === 200) {
        setComplaint(result.data.data);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id: string) => {
    setComplaint((prevComplaints) =>
      //@ts-ignore
      prevComplaints.filter((complaint) => complaint._id !== id)
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-semibold text-[rgb(113,113,122)]">
            <span className="text-[rgb(22,173,204)]">Complaints</span> List
          </h1>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complaint.map((item: ComplaintITF) => {
            return (
              <ComplaintCard
                title={item.title}
                description={item.description}
                priority={item.priority}
                status={item.status}
                date={item.dateSubmitted}
                category={item.category}
                key={item._id}
                id={item._id}
                onDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
