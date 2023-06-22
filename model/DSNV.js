
// Tạo lớp đối tượng DSNV dùng để quản lý danh sách nhân viên sau khi nhập:

function DSNV () {

    // Tạo mảng rỗng để lưu danh sách nhân viên:
    this.arrNV = [];

    // Tạo phương thức THÊM NHÂN VIÊN:
    this.themNV = function (nhanVien) {
        this.arrNV.push(nhanVien);
    }

    // Tạo phương thức tìm index nhân viên:
    this.timNV = function (taiKhoan) {
        for (var i=0; i < this.arrNV.length; i++) {
            var tk = this.arrNV[i].taiKhoan;
            if (taiKhoan === tk) {
                return i;
            }
        }
        return -1;
    }

    // Tạo phương thức xóa nhân viên:
    this.xoaNV = function (taiKhoan) {
        var index = this.timNV(taiKhoan);
        if (index !== -1) {
            this.arrNV.splice(index,1);
        }
    }

    // Tạo phương thức cập nhật nhân viên:
    this.capNhatNV = function (nhanVien) {
        var index = this.timNV(nhanVien.taiKhoan);
        if (index !== -1) {
            this.arrNV[index] = nhanVien;
        }
    }
}