import React, { useState, useEffect } from 'react';
import '../components/Project.css';

function Project () {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket] = useState(null);

  const assignTicket = (ticketId, agentId) => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === ticketId ? { ...ticket, assignedTo: agentId } : ticket
    );
    setTickets(updatedTickets);
  };

  const changeTicketStatus = (ticketId, newStatus) => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
    );
    setTickets(updatedTickets);
  };

  const generateReport = () => {
    // code to generate a report based on the current ticket data
  };

  useEffect(() => {
    // code to fetch initial ticket data and populate the tickets state variable
    const initialTickets = [
      { id: 1, subject: 'Ticket 1', status: 'Open', assignedTo: null },
      { id: 2, subject: 'Ticket 2', status: 'Open', assignedTo: null },
      { id: 3, subject: 'Ticket 3', status: 'Open', assignedTo: null },
    ];
    setTickets(initialTickets);
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Assigned To</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.status}</td>
              <td>{ticket.assignedTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => assignTicket(selectedTicket, 'agent123')}>Assign Ticket</button>
      <button onClick={() => changeTicketStatus(selectedTicket, 'resolved')}>Resolve Ticket</button>
      <button onClick={generateReport}>Generate Report</button>
    </div>
  );
};

export default Project;
