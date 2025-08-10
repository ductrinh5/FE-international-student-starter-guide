import "./statPage.css";

const StatPage = () => {
  return (
    <div className="statPage">
      <div className="main-title">Tổng quan hệ thống</div>
      <div className="main-description">
        Thống kê và phân tích hoạt động của hệ thống
      </div>
      <div className="container">
        <div className="total-stats">
          <div className="info">
            <div className="title">Tổng số người dùng </div>
            <div className="number">100</div>
            <div className="change">+12% so với tháng trước</div>
          </div>
          <div className="icon">
            <div className="icon-container">
              <img src="/general/totaluser.svg" alt="totaluser" />
            </div>
          </div>
        </div>
        <div className="total-stats">
          <div className="info">
            <div className="title">Tổng số hướng dẫn pháp lý </div>
            <div className="number">100</div>
            <div className="change">+3 thủ tục mới</div>
          </div>
          <div className="icon">
            <div className="icon-container">
              <img src="/general/totalguide.svg" alt="totaluser" />
            </div>
          </div>
        </div>
        <div className="total-stats">
          <div className="info">
            <div className="title">Tổng số địa điểm </div>
            <div className="number">100</div>
            <div className="change">+8 địa điểm mới</div>
          </div>
          <div className="icon">
            <div className="icon-container">
              <img src="/general/totalplace.svg" alt="totaluser" />
            </div>
          </div>
        </div>
        <div className="total-stats">
          <div className="info">
            <div className="title">Số lượt truy cập </div>
            <div className="number">100</div>
            <div className="change">+18% so với hôm qua</div>
          </div>
          <div className="icon">
            <div className="icon-container">
              <img src="/general/totalaccess.svg" alt="totaluser" />
            </div>
          </div>
        </div>
        <div className="most-searched-guides">
          <div className="card-title">Thủ tục được tra cứu nhiều nhất</div>
          <div className="guide-list">
            <div className="guide-item">
              <span className="guide-name">Gia hạn visa</span>
              <div className="progress-container">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <span className="progress-value">847</span>
              </div>
            </div>
            <div className="guide-item">
              <span className="guide-name">Đăng ký sim</span>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "73%" }}></div>
                </div>
                <span className="progress-value">623</span>
              </div>
            </div>
            <div className="guide-item">
              <span className="guide-name">Mở tài khoản ngân hàng</span>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "54%" }}></div>
                </div>
                <span className="progress-value">456</span>
              </div>
            </div>
            <div className="guide-item">
              <span className="guide-name">Cấp hộ chiếu</span>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "46%" }}></div>
                </div>
                <span className="progress-value">389</span>
              </div>
            </div>
          </div>
        </div>
        <div className="most-searched-places">
          <div className="card-title">Địa điểm được lưu nhiều nhất</div>
          <div className="place-list">
            <div className="place-item">
              <span className="place-name">Bệnh viện Bạch Mai</span>
              <div className="progress-container">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <span className="progress-value">234</span>
              </div>
            </div>
            <div className="place-item">
              <span className="place-name">UBND Quận Hoàn Kiếm</span>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "85%" }}></div>
                </div>
                <span className="progress-value">198</span>
              </div>
            </div>
            <div className="place-item">
              <span className="place-name">Cửa hàng in ấn ABC</span>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "67%" }}></div>
                </div>
                <span className="progress-value">156</span>
              </div>
            </div>
            <div className="place-item">
              <span className="place-name">Quán ăn Phố Cổ</span>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "53%" }}></div>
                </div>
                <span className="progress-value">123</span>
              </div>
            </div>
          </div>
        </div>
        <div className="recent-activities">
          <div className="card-title">Hoạt động gần đây</div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon user-icon">👤+</div>
              <div className="activity-content">
                <div className="activity-text">
                  Người dùng mới đăng ký: nguyenvana@email.com
                </div>
                <div className="activity-time">2 phút trước</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon guide-icon">❓</div>
              <div className="activity-content">
                <div className="activity-text">
                  Thủ tục mới được thêm: "Đăng ký kinh doanh"
                </div>
                <div className="activity-time">15 phút trước</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon place-icon">📍</div>
              <div className="activity-content">
                <div className="activity-text">
                  Địa điểm mới: "Bệnh viện Đại học Y Hà Nội"
                </div>
                <div className="activity-time">1 giờ trước</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatPage;
