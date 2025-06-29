project-root/
├── configs/
│   ├── shared/
│   │   └── config.json               # Cấu hình chung (BACKEND_URL, màu sắc, logo)
│   ├── web/
│   │   └── config.js                 # Cấu hình SDK cho web
│   ├── android/
│   │   └── config_sdk.json           # Cấu hình SDK cho Android
│   ├── ios/
│   │   └── SelectVersionViewController.swift # Cấu hình/controller cho iOS
│   └── assets/
│       ├── logo.svg                  # Logo dùng chung
│       ├── bg-vnpt.svg               # Hình nền SVG
│       ├── english-tutorial.mp4      # Video hướng dẫn tiếng Anh
│       ├── vietnamese-tutorial.mp4   # Video hướng dẫn tiếng Việt
│       ├── mobile-oval.json          # JSON cho giao diện mobile
│       └── web-oval.json             # JSON cho giao diện web
├── web/
│   ├── src/
│   │   ├── css/
│   │   │   └── styles.css           # Màu sắc và kiểu dáng
│   │   ├── js/
│   │   │   ├── main.js              # Logic JavaScript chính
│   │   │   ├── face-api.min.js       # Thư viện nhận diện khuôn mặt
│   │   │   ├── jquery-3.6.0.min.js   # Thư viện jQuery
│   │   │   ├── jsQR.js              # Thư viện mã QR
│   │   │   ├── lottie.min.js        # Thư viện Lottie
│   │   │   ├── popper.min.js        # Thư viện Popper
│   │   │   └── env.js               # Cấu hình môi trường
│   │   └── models/
│   │       ├── face_expression_model-shard1
│   │       ├── face_expression_model-weights_manifest.json
│   │       ├── face_landmark_68_model-shard1
│   │       ├── face_landmark_68_model-weights_manifest.json
│   │       ├── tiny_face_detector_model-shard1
│   │       └── tiny_face_detector_model-weights_manifest.json
│   ├── lib/
│   │   ├── VNPTBrowserSDKAppV2.3.3.js
│   │   ├── VNPTBrowserSDKAppV4.0.0.js
│   │   ├── VNPTQRBrowserApp.js
│   │   ├── VNPTQRUpload.js
│   │   ├── web-sdk-version-3.1.0.0.js
│   │   ├── web-sdk-version-3.1.0.0.js.LICENSE.txt
│   │   ├── web-sdk-version-3.2.0.0.js
│   │   └── web-sdk-version-3.2.0.0.js.LICENSE.txt
│   ├── dist/
│   │   ├── main-es2015.73eeebfd2aa6f3da1a29.js
│   │   ├── main-es5.73eeebfd2aa6f3da1a29.js
│   │   ├── polyfills-es2015.c40805d07191d74ba0a7.js
│   │   ├── polyfills-es5.bc04c5e468ed27c65eb2.js
│   │   ├── runtime-es2015.1480c209bd7e17546df7.js
│   │   ├── runtime-es5.1480c209bd7e17546df7.js
│   │   ├── scripts.d6f9b7ba4f64aa12f244.js
│   │   └── ekyc-web-sdk-2.1.4.7.js
│   ├── assets/
│   │   ├── favicon.png              # Favicon
│   │   └── animation.json           # Hoạt ảnh Lottie
│   └── index.html
├── android/
│   └── (các tệp Android khác, nếu có)
├── ios/
│   └── (các tệp iOS khác, nếu có)
├── .gitignore                        # Bỏ qua tệp không cần thiết
├── README.md                         # Mô tả dự án
└── package.json                      # Quản lý phụ thuộc (nếu dùng Node.js)