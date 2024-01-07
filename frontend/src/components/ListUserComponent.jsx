import React, { Component } from 'react';
import UserService from '../services/UserService';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'; 



class ListUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            searchTerm: '',
        };

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.viewUser = this.viewUser.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

//   delete user
    deleteUser(id) {
        window.Swal.fire({
            title: 'Penghapusan Data!',
            text: 'Apakah kamu yakin ingin menghapusnya?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Tidak, batalkan!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                UserService.deleteUser(id).then((res) => {
                    if (res.status === 200) {
                        this.setState({
                            users: this.state.users.filter((user) => user.id !== id),
                        });
                        window.Swal.fire('Dihapus!', 'Data pengguna telah dihapus.', 'success');
                    } else {
                        window.Swal.fire('Error', 'Gagal menghapus pengguna.', 'error');
                    }
                });
            } else if (result.dismiss) {
                window.Swal.fire('Dibatalkan', 'Penghapusan data dibatalkan! :)', 'error');
            }
        });
    }

    // halaman tampilan peminjam buku
    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }

    // edit pengguna/ peminjam
    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    // Metode yang dipanggil setelah komponen di-mount
    componentDidMount() {
        UserService.getUsers().then((res) => {
            if (res.data == null || res.data.length === 0) {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ users: res.data });
        });
    }

    // menambahkan peminjam dan ke halaman peminjam
    addUser() {
        this.props.history.push('/add-user/_add');
    }

    // mencari data
    handleSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    // Metode untuk mendapatkan pengguna yang telah difilter berdasarkan pencarian
    getFilteredUsers() {
        const { users, searchTerm } = this.state;

        return users.filter(
            (user) =>
                user.judul_buku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.nama_peminjam.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Metode untuk merender tampilan komponen
    render() {
        const judulStyle = {
            color: '#2d2d2d',
        };
        return (
            <div>
                <h2 className="text-center" style={{ marginTop: '50px', ...judulStyle }}>
                    Peminjaman Buku
                </h2>
                <div className="search-container" style={{ marginTop: '80px' }}>
                    <div className="row">
                        <div className="col-md-6" style={{ marginTop: '-50px' }}>
                            <button
                                className="btn btn-primary"
                                onClick={this.addUser}
                                style={{
                                    backgroundColor: '#88AB8E',
                                    color: '#2d2d2d',
                                    border: '1px solid #88AB8E',
                                }}
                            >
                                Add Data Peminjam Buku
                            </button>
                        </div>
                        <div className="offset-md-4" style={{ marginTop: '-50px', border: '1px solid #88AB8E', borderRadius: '5px', padding: '5px', transition: 'border 0.3s ease' }}>
                            <input
                                type="text"
                                placeholder="name or description..."
                                value={this.state.searchTerm}
                                title="search by receiver or description"
                                onChange={this.handleSearchChange}
                                style={{ fontStyle: 'italic', border: 'none', outline: 'none', width: '100%' }}
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <table className="table table-striped table-bordered" style={{ marginTop: '-20px' }}>
                        <thead>
                            <tr>
                                <th>Judul Buku</th>
                                <th>Jumlah</th>
                                <th>Nama Peminjam</th>
                                <th>Alamat Peminjam</th>
                                <th>No Hp Peminjam</th>
                                <th>Tanggal Pinjam</th>
                                <th>Tanggal Pengembalian</th>
                                <th>Lama Pinjam</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getFilteredUsers().map((user) => (
                                <tr key={user.id}>
                                    <td>{user.judul_buku}</td>
                                    <td>{user.jumlah}</td>
                                    <td>{user.nama_peminjam}</td>
                                    <td>{user.alamat_peminjam}</td>
                                    <td>{user.noHp_peminjam}</td>
                                    <td>{user.tanggal_pinjam}</td>
                                    <td>{user.tanggal_pengembalian}</td>
                                    <td>{user.lama_pinjam}</td>
                                    <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <button onClick={() => this.editUser(user.id)} className="btn btn-info">
                                            <FontAwesomeIcon icon={faEdit} /> Update
                                        </button>
                                        <button onClick={() => this.deleteUser(user.id)} className="btn btn-danger">
                                            <FontAwesomeIcon icon={faTrash} /> Delete
                                        </button>
                                        <button onClick={() => this.viewUser(user.id)} className="btn btn-info">
                                            <FontAwesomeIcon icon={faEye} /> View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUserComponent;
