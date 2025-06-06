import "./agentsPage.scss";

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Property Consultant",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    experience: "10+ years",
    specialization: "Luxury Properties",
    email: "sarah.j@lamaestate.com",
    phone: "+44 123 456 7891"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Commercial Property Specialist",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    experience: "8+ years",
    specialization: "Commercial Real Estate",
    email: "michael.c@lamaestate.com",
    phone: "+44 123 456 7892"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Residential Sales Manager",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
    experience: "12+ years",
    specialization: "Residential Properties",
    email: "emma.t@lamaestate.com",
    phone: "+44 123 456 7893"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Property Investment Advisor",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    experience: "15+ years",
    specialization: "Investment Properties",
    email: "james.w@lamaestate.com",
    phone: "+44 123 456 7894"
  }
];

function AgentsPage() {
  return (
    <div className="agentsPage">
      <div className="header">
        <h1>Meet Our Expert Agents</h1>
        <p>Our team of experienced professionals is here to help you find your perfect property</p>
      </div>
      
      <div className="agentsGrid">
        {agents.map(agent => (
          <div className="agentCard\" key={agent.id}>
            <div className="imageContainer">
              <img src={agent.image} alt={agent.name} />
            </div>
            <div className="info">
              <h2>{agent.name}</h2>
              <h3>{agent.role}</h3>
              <div className="details">
                <p><strong>Experience:</strong> {agent.experience}</p>
                <p><strong>Specialization:</strong> {agent.specialization}</p>
                <p><strong>Email:</strong> {agent.email}</p>
                <p><strong>Phone:</strong> {agent.phone}</p>
              </div>
              <button className="contactButton">Contact Agent</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentsPage;