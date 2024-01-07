import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-8 offset-md-2">
          <h3 className="text-center">Data Peminjam Buku</h3>
          <div className="card-body">
            <table>
              <tbody>
              <tr>
                  <th>Id</th>
                  <td>{this.state.user.id}</td>
                </tr>
                <tr>
                  <th>Judul Buku</th>
                  <td>{this.state.user.judul_buku}</td>
                </tr>
                <tr>
                  <th>Jumlah</th>
                  <td>{this.state.user.jumlah}</td>
                </tr>
                <tr>
                  <th>Nama Peminjam</th>
                  <td>{this.state.user.nama_peminjam}</td>
                </tr>
                <tr>
                  <th>Alamat Peminjam</th>
                  <td>{this.state.user.alamat_peminjam}</td>
                </tr>
                <tr>
                  <th>No Hp Peminjam</th>
                  <td>{this.state.user.noHp_peminjam}</td>
                </tr>
                <tr>
                  <th>Tanggal Pinjam</th>
                  <td>{this.state.user.tanggal_pinjam}</td>
                </tr>
                <tr>
                  <th>Tanggal Pengembalian</th>
                  <td>{this.state.user.tanggal_pengembalian}</td>
                </tr>
                <tr>
                  <th>Lama Pinjam</th>
                  <td>{this.state.user.lama_pinjam}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
