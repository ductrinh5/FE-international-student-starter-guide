import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBar-left">
        <span className="cms-title-icon">
          <img src="/general/cms.svg" alt="cms" />
        </span>
        <span className="cms-title-text">Bảng điều khiển quản trị</span>
      </div>
      <div className="topBar-right">
        <span className="role">Quản trị viên</span>
        <span className="logout"> Đăng xuất</span>
      </div>
    </div>
  );
};

export default TopBar;
