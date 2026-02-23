import React from "react";
import type { Contact } from "../schemas/Contact";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

function ContactTable({ contacts, onClick }: Props) {
  //codigo emet    table.table.table-striped.table-hover>thead>tr>th*3
  // codigo emet tbody>tr>td*3
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr
            onClick={() => onClick(contact.id)}
            style={{ cursor: "pointer" }}
            key={contact.id}
          >
            <td>{contact.name}</td>
            <td>{contact.lastname}</td>
            <td>{contact.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;
