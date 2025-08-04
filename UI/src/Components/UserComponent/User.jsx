
import "./User.css";

const User = () => {
  return (
    <div className="user-panel">
     

      <main className="main-content">
        <header>
          <h1>Welcome, To user panel Vishnu 👋</h1>
        </header>
        <section className="cards">
          <div className="card">
            <h3>Account Info</h3>
            <p>View your details</p>
          </div>
          <div className="card">
            <h3>Notifications</h3>
            <p>Check your messages</p>
          </div>
          <div className="card">
            <h3>Activity</h3>
            <p>Recent activity logs</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default User;
