var mongoose = require("mongoose");
var slug = require('mongoose-slug-updater');
    mongoose.plugin(slug),
    Schema = mongoose.Schema,
     
 RoomSchema = new Schema(
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
      title: {
        type: String,
        required: true,
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
      status:{type:Number,default:0},
      date: { type: Date, default: Date.now },
      slug: { type: String, slug:"title", unique: true }
    },
  },
  {
    timestamps: true,
  }
);

module.exports = RoomSchema = mongoose.model("Room", RoomSchema);
