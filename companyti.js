const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.json());

const userHợpLệ = {
  username: 'john.doe@companyti.com',
  password: 'SecureP@ssw0rd2025'
};


app.post('/api/thanh-toan', (req, res) => {
  const { username, password, soTien } = req.body;


  if (username === userHợpLệ.username && password === userHợpLệ.password) {
    if (!soTien || soTien <= 0) {
      return res.status(400).json({ message: 'Số tiền thanh toán không hợp lệ.' });
    }

   
    return res.status(200).json({ message: `Thanh toán thành công! Số tiền: $${soTien}` });
  } else {
    return res.status(401).json({ message: 'Thông tin đăng nhập không hợp lệ.' });
  }
});


app.listen(port, () => {
  console.log(`API thanh toán đang chạy tại http://localhost:${port}`);
});
