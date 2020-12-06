const mongoose = require("mongoose");
let RoomSchema = mongoose.Schema(
  {
    type: Object,
    UserID: { type: String, required: true },
    properties: {
      Size: {
        type: String,
        required: true,
      },
      NumberRoom: {
        type: String,
        required: true,
      },
      NumberPeople: {
        type: String,
        required: true,
      },
      address: {
        type: "object",
        required: [],
        properties: {
          location: {
            type: Array,
            items: {
              type: Number,
            },
          },
          country: {
            type: String,
          },
          City: {
            type: String,
          },
          xa: {
            type: String,
          },
          address: {
            type: String,
          },
        },
      },
      roomtype: {
        type: String,
        required: true,
      },
      feature: {
        type: Array,
        items: {
          type: Object,
          required: [],
          properties: {
            id: {
              type: Number,
            },
            name: {
              type: String,
            },
          },
        },
      },
      genderRules: {
        type: String,
        required: true,
      },
      describe: {
        type: String,
        required: true,
      },
      firstprice: {
        type: String,
        required: true,
      },
      prices: {
        type: String,
        required: true,
      },
      image: {
        type: Array,
        properties: {
          id: {
            type: Number,
          },
          name: {
            type: String,
          },
        },
      },
      date: { type: Date, default: Date.now },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = RoomSchema = mongoose.model("Room", RoomSchema);
