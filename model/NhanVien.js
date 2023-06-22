
// Tạo lớp đối tượng NhanVien, dùng để lưu thông tin user nhập vào:

function NhanVien (_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLam) {
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;

    this.tongLuong = function () {
        if (this.chucVu === 'Giám đốc') return this.luongCoBan * 3;
        else if (this.chucVu === 'Trưởng phòng') return this.luongCoBan * 2;
        else if (this.chucVu === 'Nhân viên') return this.luongCoBan;
    }

    this.xepLoai = function () {
        if (this.gioLam >= 192) return 'Nhân viên xuất sắc';
        else if (this.gioLam >= 176) return 'Nhân viên giỏi';
        else if (this.gioLam >= 160) return 'Nhân viên khá';
        else return 'Nhân viên trung bình';
    }

}