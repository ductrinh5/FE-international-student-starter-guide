import "./docPage.css";

const DocPage = () => {
  return (
    <div className="docPage">
      {/* Header Section */}
      <div className="doc-header">
        <h1 className="page-title">Quản lý Tài liệu</h1>
        <button className="add-button">
          <span className="plus-icon">+</span>
          Thêm tài liệu mới
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Tìm kiếm tài liệu..."
            className="search-input"
          />
        </div>
        <div className="filter-container">
          <select className="type-filter">
            <option value="all">Tất cả loại tài liệu</option>
            <option value="visa">Visa</option>
            <option value="bank">Ngân hàng</option>
            <option value="sim">SIM</option>
            <option value="residence">Tạm trú</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên tài liệu</th>
              <th>Loại tài liệu</th>
              <th>Mô tả</th>
              <th>Ngày tạo</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Hộ chiếu gốc</td>
              <td>Visa</td>
              <td>Hộ chiếu còn hiệu lực ít nhất 6 tháng</td>
              <td>15/01/2024</td>
              <td>
                <span className="status-badge active">Hoạt động</span>
              </td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Giấy xác nhận sinh viên</td>
              <td>Visa</td>
              <td>Giấy xác nhận sinh viên từ trường đại học</td>
              <td>20/01/2024</td>
              <td>
                <span className="status-badge active">Hoạt động</span>
              </td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>CMND/CCCD</td>
              <td>SIM</td>
              <td>Chứng minh nhân dân hoặc căn cước công dân</td>
              <td>10/01/2024</td>
              <td>
                <span className="status-badge inactive">Không hoạt động</span>
              </td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Sổ hộ khẩu</td>
              <td>Tạm trú</td>
              <td>Sổ hộ khẩu hoặc giấy xác nhận tạm trú</td>
              <td>25/01/2024</td>
              <td>
                <span className="status-badge active">Hoạt động</span>
              </td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Giấy xác nhận thu nhập</td>
              <td>Ngân hàng</td>
              <td>Giấy xác nhận thu nhập từ công ty hoặc trường học</td>
              <td>18/01/2024</td>
              <td>
                <span className="status-badge active">Hoạt động</span>
              </td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="pagination-container">
        <div className="pagination-info">
          Hiển thị 1-5 trong tổng số 18 tài liệu
        </div>
        <div className="pagination-controls">
          <button className="pagination-btn">Trước</button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">4</button>
          <button className="pagination-btn">Sau</button>
        </div>
      </div>
    </div>
  );
};

export default DocPage;
