module.exports = {
  multipleObjectConvert: (mongooses) =>
    mongooses.map((mongoose) => mongoose.toObject()),

  singleObjectConvert: (mongoose) =>
    mongoose ? mongoose.toObject() : mongoose,
};
