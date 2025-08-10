import "./userPage.css";

const UserPage = () => {
  return (
    <div className="userPage">
      {/* Header Section */}
      <div className="user-header">
        <h1 className="page-title">Quản lý Người dùng</h1>
        <button className="add-button">
          <span className="plus-icon">+</span>
          Thêm người dùng mới
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Tìm kiếm người dùng..."
            className="search-input"
          />
        </div>
        <div className="filter-container">
          <select className="role-filter">
            <option value="all">Tất cả vai trò</option>
            <option value="student">Sinh viên</option>
            <option value="admin">Quản trị viên</option>
            <option value="moderator">Điều hành viên</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Họ và tên</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Trạng thái</th>
              <th>Ngày tham gia</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="user-info">
                  <img
                    src="/public/general/noAvatar.png"
                    alt="Avatar"
                    className="user-avatar"
                  />
                  <span>Nguyễn Văn An</span>
                </div>
              </td>
              <td>nguyenvanan@email.com</td>
              <td>
                <span className="role-badge student">Sinh viên</span>
              </td>
              <td>
                <span className="status-badge active">Hoạt động</span>
              </td>
              <td>15/01/2024</td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <div className="user-info">
                  <img
                    src="/public/general/noAvatar.png"
                    alt="Avatar"
                    className="user-avatar"
                  />
                  <span>Trần Thị Bình</span>
                </div>
              </td>
              <td>tranthibinh@email.com</td>
              <td>
                <span className="role-badge admin">Quản trị viên</span>
              </td>
              <td>
                <span className="status-badge active">Hoạt động</span>
              </td>
              <td>10/01/2024</td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <div className="user-info">
                  <img
                    src="/public/general/noAvatar.png"
                    alt="Avatar"
                    className="user-avatar"
                  />
                  <span>Lê Văn Cường</span>
                </div>
              </td>
              <td>levancuong@email.com</td>
              <td>
                <span className="role-badge student">Sinh viên</span>
              </td>
              <td>
                <span className="status-badge inactive">Không hoạt động</span>
              </td>
              <td>20/01/2024</td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <div className="user-info">
                  <img
                    src="/public/general/noAvatar.png"
                    alt="Avatar"
                    className="user-avatar"
                  />
                  <span>Phạm Thị Dung</span>
                </div>
              </td>
              <td>phamthidung@email.com</td>
              <td>
                <span className="role-badge moderator">Điều hành viên</span>
              </td>
              <td>
                <span className="status-badge active">Hoạt động</span>
              </td>
              <td>18/01/2024</td>
              <td className="action-buttons">
                <button className="action-btn edit-btn">✏️ Sửa</button>
                <button className="action-btn delete-btn">🗑️ Xoá</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <div className="user-info">
                  <img
                    src="/public/general/noAvatar.png"
                    alt="Avatar"
                    className="user-avatar"
                  />
                  <span>Hoàng Văn Em</span>
                </div>
              </td>
              <td>hoangvanem@email.com</td>
              <td>
                <span className="role-badge student">Sinh viên</span>
              </td>
              <td>
                <span className="status-badge active">Hoạt động</span>
              </td>
              <td>22/01/2024</td>
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
          Hiển thị 1-5 trong tổng số 28 người dùng
        </div>
        <div className="pagination-controls">
          <button className="pagination-btn">Trước</button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">4</button>
          <button className="pagination-btn">5</button>
          <button className="pagination-btn">6</button>
          <button className="pagination-btn">Sau</button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
