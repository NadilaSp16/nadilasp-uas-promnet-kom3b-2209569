import React, { Component } from "react"
import UserService from "../services/UserService"
import Swal from 'sweetalert2';


class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      judul_buku: "",
      jumlah: "",
      nama_peminjam: "",
      alamat_peminjam: "",
      noHp_peminjam: "",
      tanggal_pinjam: "",
      tanggal_pengembalian: "",
      lama_pinjam: "",
    };
    this.changeJudulBuku = this.changeJudulBuku.bind(this);
    this.changeJumlah = this.changeJumlah.bind(this);
    this.changeNamaPeminjam = this.changeNamaPeminjam.bind(this);
    this.changeAlamatPeminjam = this.changeAlamatPeminjam.bind(this);
    this.changeNoHpPeminjam = this.changeNoHpPeminjam.bind(this);
    this.changeTanggalPinjam = this.changeTanggalPinjam.bind(this);
    this.changeTanggalPengembalian = this.changeTanggalPengembalian.bind(this);
    this.changeLamaPinjam = this.changeLamaPinjam.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
            judul_buku: user.judul_buku,
            jumlah: user.jumlah,
            nama_peminjam: user.nama_peminjam,
            alamat_peminjam: user.alamat_peminjam,
            noHp_peminjam: user.noHp_peminjam,
            tanggal_pinjam: user.tanggal_pinjam,
            tanggal_pengembalian: user.tanggal_pengembalian,
            lama_pinjam: user.lama_pinjam,
        });
      });
    }
  }
  saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = {
        judul_buku: this.state.judul_buku,
        jumlah: this.state.jumlah,
        nama_peminjam: this.state.nama_peminjam,
        alamat_peminjam: this.state.alamat_peminjam,
        noHp_peminjam: this.state.noHp_peminjam,
        tanggal_pinjam: this.state.tanggal_pinjam,
        tanggal_pengembalian: this.state.tanggal_pengembalian,
        lama_pinjam: this.state.lama_pinjam,
    };
    console.log("user => " + JSON.stringify(user));

    // step 5
    if (this.state.id === "_add") {
      UserService.createUser(user).then((res) => {
        this.props.history.push("/users");
        window.Swal.fire({
          title: "Good job!",
          text: "Added success!",
          icon: "success",
        });
        
        
      });
    } else {
      UserService.updateUser(user, this.state.id).then((res) => {
        this.props.history.push("/users");
        window.Swal.fire({
          title: "Good job!",
          text: "Updated success!",
          icon: "success",
        });
        
        
     
      });
    }
  };


  changeJudulBuku = (event) => {
    this.setState({ judul_buku: event.target.value });
  };

  changeJumlah = (event) => {
    this.setState({ jumlah: event.target.value });
  };

  changeNamaPeminjam = (event) => {
    this.setState({ nama_peminjam: event.target.value });
  };

  changeAlamatPeminjam = (event) => {
    this.setState({ alamat_peminjam: event.target.value });
  };

  changeNoHpPeminjam = (event) => {
    console.log(event.target.value);
    this.setState({ noHp_peminjam: event.target.value });
  };

  changeTanggalPinjam = (event) => {
    this.setState({ tanggal_pinjam: event.target.value });
  };

  changeTanggalPengembalian = (event) => {
    this.setState({ tanggal_pengembalian: event.target.value });
  };

  changeLamaPinjam = (event) => {
    this.setState({ lama_pinjam: event.target.value });
  };

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Peminjaman Buku</h3>;
    } else {
      return <h3 className="text-center">Update Data Peminjam Buku</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Judul Buku: </label>
                    <input
                      placeholder="Judul Buku"
                      name="judul_buku"
                      className="form-control"
                      value={this.state.judul_buku}
                      onChange={this.changeJudulBuku}
                    />
                  </div>
                  <div className="form-group">
                    <label> Jumlah: </label>
                    <input
                      placeholder="Jumlah"
                      name="jumlah"
                      className="form-control"
                      value={this.state.jumlah}
                      onChange={this.changeJumlah}
                    />
                  </div>
                  <div className="form-group">
                    <label> Nama Peminjam: </label>
                    <input
                      placeholder="Nama Peminjam"
                      name="nama_peminjam"
                      className="form-control"
                      value={this.state.nama_peminjam}
                      onChange={this.changeNamaPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label> Alamat Peminjam: </label>
                    <input
                      placeholder="Alamat Peminjam"
                      name="alamat_peminjam"
                      className="form-control"
                      value={this.state.alamat_peminjam}
                      onChange={this.changeAlamatPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label> No Hp Peminjam: </label>
                    <input
                      placeholder="No Hp Peminjam"
                      name="noHp_peminjam"
                      className="form-control"
                      value={this.state.noHp_peminjam}
                      onChange={this.changeNoHpPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label> Tanggal Pinjam: </label>
                    <input
                      type="date"
                      placeholder="Tanggal Pinjam"
                      name="tanggal_pinjam"
                      className="form-control"
                    value={this.state.tanggal_pinjam}
                      onChange={this.changeTanggalPinjam}
                    />
                  </div>
                  <div className="form-group">
                    <label> Tanggal Pengembalian: </label>
                    <input
                      type="date"
                      placeholder="Tanggal Pengembalian"
                      name="tanggal_pengembalian"
                      className="form-control"
                    value={this.state.tanggal_pengembalian}
                      onChange={this.changeTanggalPengembalian}
                    />
                  </div>
                  <div className="form-group">
                    <label> Lama Pinjam: </label>
                    <input
                      placeholder="Lama Pinjam"
                      name="lama_pinjam"
                      className="form-control"
                      value={this.state.lama_pinjam}
                      onChange={this.changeLamaPinjam}
                    />
                  </div>
                  
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateUser}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;
