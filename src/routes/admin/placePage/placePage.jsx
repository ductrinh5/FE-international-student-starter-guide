import "./placePage.css";

const PlacePage = () => {
  return (
    <div className="placePage">
      {/* Header Section */}
      <div className="place-header">
        <h1 className="page-title">Quản lý Địa điểm</h1>
        <button className="add-button">
          <span className="plus-icon">+</span>
          Thêm địa điểm mới
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Tìm kiếm địa điểm..."
            className="search-input"
          />
        </div>
        <div className="filter-container">
          <select className="category-filter">
            <option value="all">Tất cả danh mục</option>
            <option value="hospital">Bệnh viện</option>
            <option value="government">Cơ quan nhà nước</option>
            <option value="bank">Ngân hàng</option>
            <option value="restaurant">Nhà hàng</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên địa điểm</th>
              <th>Danh mục</th>
              <th>Địa chỉ</th>
              <th>Điện thoại</th>
              <th>Đánh giá</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bệnh viện Bạch Mai</td>
              <td>Bệnh viện</td>
              <td>78 Giải Phóng, Đống Đa, Hà Nội</td>
              <td>024 3869 3731</td>
              <td>
                <div className="rating-info">
                  <span className="rating-score">4.5</span>
                  <span className="rating-count">(234)</span>
                </div>
              </td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>UBND Quận Hoàn Kiếm</td>
              <td>Cơ quan nhà nước</td>
              <td>12 Lý Thái Tổ, Hoàn Kiếm, Hà Nội</td>
              <td>024 3825 2010</td>
              <td>
                <div className="rating-info">
                  <span className="rating-score">4.2</span>
                  <span className="rating-count">(198)</span>
                </div>
              </td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Vietcombank Chi nhánh Hoàn Kiếm</td>
              <td>Ngân hàng</td>
              <td>198 Trần Quang Khải, Hoàn Kiếm, Hà Nội</td>
              <td>024 3824 0000</td>
              <td>
                <div className="rating-info">
                  <span className="rating-score">4.0</span>
                  <span className="rating-count">(156)</span>
                </div>
              </td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Quán ăn Phố Cổ</td>
              <td>Nhà hàng</td>
              <td>32 Hàng Bạc, Hoàn Kiếm, Hà Nội</td>
              <td>024 3828 1234</td>
              <td>
                <div className="rating-info">
                  <span className="rating-score">4.3</span>
                  <span className="rating-count">(123)</span>
                </div>
              </td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Bệnh viện Đại học Y Hà Nội</td>
              <td>Bệnh viện</td>
              <td>1 Tôn Thất Tùng, Đống Đa, Hà Nội</td>
              <td>024 3574 7788</td>
              <td>
                <div className="rating-info">
                  <span className="rating-score">4.1</span>
                  <span className="rating-count">(89)</span>
                </div>
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
          Hiển thị 1-5 trong tổng số 25 địa điểm
        </div>
        <div className="pagination-controls">
          <button className="pagination-btn">Trước</button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">4</button>
          <button className="pagination-btn">5</button>
          <button className="pagination-btn">Sau</button>
        </div>
      </div>
    </div>
  );
};

export default PlacePage;
