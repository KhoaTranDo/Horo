
// 1 CamLe
import img1 from "./images/camle.jpg";
// 2 HaiChau
import img2 from "./images/haichau.jpg"; 
// 3 LienChieu
import img3 from "./images/lienchieu.jpg";
// 4 NguHanhSon
import img4 from "./images/nguhanhson.jpg";
// 5 SonTra
import img5 from "./images/sontra.jpg";
// 6 ThanhKhe
import img6 from "./images/thanhkhe.jpg"



export default [
  {

      sys: {
        id: "1"
      },
      fields: {
        name: "Q.Hải Châu",
        slug: "hai-chau",
        price: 5000000,
        featured: true,
        description:
          "",
        extras: [
          
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
                //url: room2
              }
            }
          },
          {
            fields: {
              file: {
               // url: room3
              }
            }
          },
          {
            fields: {
              file: {
               // url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "2"
      },
      fields: {
        name: "Q.Thanh Khê",
        slug: "thanh-khe",
        price: 4000000,
        featured: true,
        description:
          "",
        extras: [
          
        ],
        images: [
          {
            fields: {
              file: {
                url: img6
              }
            }
          },
          {
            fields: {
              file: {
                //url: room2
              }
            }
          },
          {
            fields: {
              file: {
               // url: room3
              }
            }
          },
          {
            fields: {
              file: {
               // url: room4
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
        name: "Q.Sơn Trà",
        slug: "son-tra",
        price: 3000000,
        featured: true,
        description:
          "",
        extras: [
          
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
                //url: room2
              }
            }
          },
          {
            fields: {
              file: {
               // url: room3
              }
            }
          },
          {
            fields: {
              file: {
               // url: room4
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
      name: "Q.Cẩm Lệ",
      slug: "cam-le",
      price: 3000000 ,
      featured: true,
      description:
        "",
      extras: [
    
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
            //  url: room2
            }
          }
        },
        {
          fields: {
            file: {
             // url: room3
            }
          }
        },
        {
          fields: {
            file: {
             // url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Q.Liên Chiểu",
      slug: "lien-chieu",
      price: 2000000 ,
      featured: true,
      description:
        "",
      extras: [
        
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
             // url: room2
            }
          }
        },
        {
          fields: {
            file: {
             // url: room3
            }
          }
        },
        {
          fields: {
            file: {
              //url: room4
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
      name: "Q.Ngũ Hành Sơn",
      slug: "ngu-hanhson",
      price: 2000000,
      featured: true,
      description:
        "",
      extras: [
        
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
              //url: room2
            }
          }
        },
        {
          fields: {
            file: {
             // url: room3
            }
          }
        },
        {
          fields: {
            file: {
             // url: room4
            }
          }
        }
      ]
    }
  }
];

