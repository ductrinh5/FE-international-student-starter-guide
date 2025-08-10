import "./legalPage.css";

const LegalPage = () => {
  return (
    <div className="legalPage">
      {/* Header Section */}
      <div className="legal-header">
        <h1 className="page-title">Quản lý Hướng dẫn pháp lý</h1>
        <button className="add-button">
          <span className="plus-icon">+</span>
          Thêm thủ tục mới
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Tìm kiếm thủ tục..."
            className="search-input"
          />
        </div>
        <div className="filter-container">
          <select className="status-filter">
            <option value="all">Tất cả trạng thái</option>
            <option value="visible">Hiển thị</option>
            <option value="hidden">Ẩn</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Mã thủ tục</th>
              <th>Tên thủ tục</th>
              <th>Số giấy tờ</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TT001</td>
              <td>Gia hạn visa</td>
              <td>5</td>
              <td>
                <span className="status-badge visible">Hiển thị</span>
              </td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>TT002</td>
              <td>Mở tài khoản ngân hàng</td>
              <td>3</td>
              <td>
                <span className="status-badge visible">Hiển thị</span>
              </td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>TT003</td>
              <td>Đăng ký sim</td>
              <td>4</td>
              <td>
                <span className="status-badge hidden">Ẩn</span>
              </td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>TT004</td>
              <td>Đăng ký tạm trú</td>
              <td>6</td>
              <td>
                <span className="status-badge visible">Hiển thị</span>
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
          Hiển thị 1-4 trong tổng số 15 thủ tục
        </div>
        <div className="pagination-controls">
          <button className="pagination-btn">Trước</button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">Sau</button>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
