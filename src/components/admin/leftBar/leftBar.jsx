import "./leftBar.css";
import { useNavigate } from "react-router";

const LeftBar = () => {
  const navigate = useNavigate();

  const handleStatClick = () => navigate("/");
  const handleLegalClick = () => navigate("/legal");
  const handlePlaceClick = () => navigate("/place");
  const handleDocumentClick = () => navigate("/doc");
  const handleUserClick = () => navigate("/user");

  return (
    <div className="leftBar">
      <div className="stat" onClick={handleStatClick}>
        <span className="stat-icon">
          <img src="/general/stat.svg" alt="stat" />
        </span>
        <span className="stat-text">Thống kê</span>
      </div>
      <div className="legal" onClick={handleLegalClick}>
        <span className="legal-icon">
          <img src="/general/legal.svg" alt="legal" />
        </span>
        <span className="legal-text">Quản lý hướng dẫn pháp lý</span>
      </div>
      <div className="place" onClick={handlePlaceClick}>
        <span className="place-icon">
          <img src="/general/place.svg" alt="place" />
        </span>
        <span className="place-text">Quản lý địa điểm hữu ích</span>
      </div>
      <div className="document" onClick={handleDocumentClick}>
        <span className="document-icon">
          <img src="/general/document.svg" alt="document" />
        </span>
        <span className="document-text">Quản lý giấy tờ cần thiết</span>
      </div>
      <div className="user" onClick={handleUserClick}>
        <span className="user-icon">
          <img src="/general/user.svg" alt="user" />
        </span>
        <span className="user-text">Quản lý người dùng</span>
      </div>
    </div>
  );
};

export default LeftBar;
