import React from 'react';
import { Table } from 'reactstrap';

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

export default class Example extends React.Component {
  render() {
    const {datas} = this.props
    
    if (isEmpty(datas)) {
      return <div>Loading</div>
    }else {
    return (
      <Table responsive hover bordered className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Email</th>
            <th>No Telepon</th>
            <th>Domisili</th>
            <th>Tanggal | Jam</th>
          </tr>
        </thead>
        <tbody>
        {datas.map((data,index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{data.nama}</td>
            <td>{data.email}</td>
            <td>{data.noTlp}</td>
            <td>{data.areaDomisili}</td>
            <td>{data.tanggal}</td>
            </tr>
        ))}
        </tbody>
      </Table>
    );}
  }
}