
import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpeg";
import img3 from "./images/room-3.jpeg";
import img4 from "./images/room-4.jpeg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpeg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-11.jpeg";
import img12 from "./images/room-12.jpeg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Phòng cho thuê",
      slug: "phong-thue",
      type: "Phòng cho thuê",
      price: 1000000,
      size: 20,
      capacity: 1,
      MayLanh: true,
      TiVi: false,
      MayGiat: false,
      ChoDeXe: false,
      CuaSo: false,
      BanCong: false,
      MayLocNuoc: false,
      LoViSong: false,
      BepGa: false,
      GacLung: false,
      TuLanh: false,
      featured: false,
      properties: {
        description:
          "<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
      },
      geometry: {
        type: "Point",
        coordinates: [108.21613173490391, 16.069499620008415],
      },
      description:[
        "GIÁ PHÒNG 1000000 đồng ",
        "ĐẶT CỌC 10000000 đồng",
        "SỨC CHỨA 1 NGƯỜI",
        "WIFI MIỄN PHÍ",
        "ĐỊA CHỈ K43/16 LÊ HỮU TRÁC, AN HẢI ĐÔNG, SƠN TRÀ, ĐÀ NẴNG"
        ],
      extras: [
      "K43/16 LÊ HỮU TRÁC, AN HẢI ĐÔNG, SƠN TRÀ, ĐÀ NẴNG",
      "Cách chợ 200m ",
      "Trang bị đầy đủ máy nước nóng, giường, bàn ghế, tủ đồ",
      "**********************************",
      "HORO - TIỆN NGHI & THÂN THIỆN",
      "Hotline: 0905 424 331"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ],

    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Phòng ở ghép",
      slug: "phong-ghep",
      type: "Phòng ở ghép",
      price: 2000000,
      size: 30,
      capacity: 2,
      MayLanh: true,
      TiVi: true,
      MayGiat: true,
      ChoDeXe: false,
      CuaSo: false,
      BanCong: false,
      MayLocNuoc: false,
      LoViSong: false,
      BepGa: false,
      GacLung: false,
      TuLanh: false,
      featured: false,
      properties: {
        description:
          "<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a Mad Men Season Five Finale Watch Party, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>",
      },
      geometry: {
        type: "Point",
        coordinates: [108.21673254972154, 16.066984055747994],
      },
      description:[
        "GIÁ PHÒNG 2000000 đồng ",
        "ĐẶT CỌC 20000000 đồng",
        "SỨC CHỨA 2 NGƯỜI",
        "WIFI MIỄN PHÍ",
        "ĐỊA CHỈ K43/16 LÊ HỮU TRÁC, AN HẢI ĐÔNG, SƠN TRÀ, ĐÀ NẴNG"
        ],
      extras: [
      "K43/16 LÊ HỮU TRÁC, AN HẢI ĐÔNG, SƠN TRÀ, ĐÀ NẴNG",
      "Cách chợ 300m ",
      "Trang bị đầy đủ máy nước nóng, giường, bàn ghế, tủ đồ",
      "**********************************",
      "HORO - TIỆN NGHI & THÂN THIỆN",
      "Hotline: 0905 424 331"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Kí túc xá",
      slug: "tuc-xa",
      type: "Kí túc xá",
      price: 3000000,
      size: 30,
      capacity: 2,
      MayLanh: true,
      TiVi: true,
      MayGiat: true,
      ChoDeXe: false,
      CuaSo: false,
      BanCong: false,
      MayLocNuoc: false,
      LoViSong: false,
      BepGa: false,
      GacLung: true,
      TuLanh: false,
      featured: false,
      properties: {
        description:
          "<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a Big Backyard Beach Bash and Wine Fest on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.</p>",
      },
      geometry: {
        type: "Point",
        coordinates: [108.22102408414531, 16.06745830390261],
      },
      description:[
        "GIÁ PHÒNG 2,000,000 đồng ",
        "ĐẶT CỌC 2,000,0000 đồng",
        "SỨC CHỨA 2 NGƯỜI",
        "WIFI MIỄN PHÍ",
        "ĐỊA CHỈ K43/16 LÊ HỮU TRÁC, AN HẢI ĐÔNG, SƠN TRÀ, ĐÀ NẴNG"
        ],
      extras: [
      "K43/16 LÊ HỮU TRÁC, AN HẢI ĐÔNG, SƠN TRÀ, ĐÀ NẴNG",
      "Cách chợ 300m ",
      "Trang bị đầy đủ máy nước nóng, giường, bàn ghế, tủ đồ",
      "**********************************",
      "HORO - TIỆN NGHI & THÂN THIỆN",
      "Hotline: 0905 424 331"
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Nhà nguyên căn",
      slug: "nguyen-can",
      type: "Nhà nguyên căn",
      price: 3000000,
      size: 40,
      capacity: 2,
      MayLanh: true,
      TiVi: true,
      MayGiat: true,
      ChoDeXe: false,
      CuaSo: false,
      BanCong: false,
      MayLocNuoc: false,
      LoViSong: false,
      BepGa: false,
      GacLung: true,
      TuLanh: false,
      featured: false,
      properties: {
        description:
          "<strong>Ballston Arts & Crafts Market</strong><p>The Ballston Arts & Crafts Market sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>",
      },
      geometry: {
        type: "Point",
        coordinates: [108.2223544598184, 16.07127286750054],
      },
      description:[
        "GIÁ PHÒNG 2000000 đồng ",
        "ĐẶT CỌC 20000000 đồng",
        "SỨC CHỨA 2 NGƯỜI",
        "WIFI MIỄN PHÍ",
        "ĐỊA CHỈ K42342/16 LÊ HỮU TRÁC, AN HẢI ĐÔNG, SƠN TRÀ, ĐÀ NẴNG"
        ],
      extras: [
      "K43/16 LÊ HỮU TRÁC, AN HẢI ĐÔNG, SƠN TRÀ, ĐÀ NẴNG",
      "Cách chợ 300m ",
      "Trang bị đầy đủ máy nước nóng, giường, bàn ghế, tủ đồ",
      "**********************************",
      "HORO - TIỆN NGHI & THÂN THIỆN",
      "Hotline: 0905 424 331"
      ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "Căn hộ",
      slug: "can-ho",
      type: "Căn hộ",
      price: 2000000,
      size: 30,
      capacity: 2,
      MayLanh: true,
      TiVi: true,
      MayGiat: true,
      ChoDeXe: false,
      CuaSo: false,
      BanCong: false,
      MayLocNuoc: false,
      LoViSong: true,
      BepGa: false,
      GacLung: true,
      TuLanh: false,
      featured: false,
      properties: {
        description:
          "<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year's Seersucker Social bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>",
      },
      geometry: {
        type: "Point",
        coordinates: [108.21892123227894, 16.0728399102653],
      },
      description:[
        "GIÁ PHÒNG 2,000,000 đồng ",
        "ĐẶT CỌC 20,00,0000 đồng",
        "SỨC CHỨA 2 NGƯỜI",
        "WIFI MIỄN PHÍ",
        "ĐỊA CHỈ K42343/16 LÊ HỮU TRÁC, AN HẢI ĐÔNG, SƠN TRÀ, ĐÀ NẴNG"
        ],
      extras: [
      "K431231/16 LÊ HỮU TRÁC, AN HẢI ĐÔNG, SƠN TRÀ, ĐÀ NẴNG",
      "Cách chợ 300m ",
      "Trang bị đầy đủ máy nước nóng, giường, bàn ghế, tủ đồ",
      "**********************************",
      "HORO - TIỆN NGHI & THÂN THIỆN",
      "Hotline: 0905 424 331"
      ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  }
];

