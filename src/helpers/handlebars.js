module.exports = {
  autoIncrease: function (a) {
    return ++a;
  },
  sortable: (field, sort) => {
    //Check if the icon being render is in the right field
    //response => column, if match => the right column
    const sortType = field === sort.column ? sort.type : "default";

    const icons = {
      default: "fas fa-arrows-alt-v",
      asc: "fas fa-arrow-up",
      desc: "fas fa-arrow-down",
    };

    const types = {
      default: "desc",
      desc: "asc",
      asc: "desc",
    };

    const icon = icons[sortType];
    const type = types[sortType];

    //Column here represent the name of the column, while the
    //{field} represent the data type in the database which show in the column
    return `<a href="?_sort&column=${field}&type=${type}">
              <i class="${icon}"></i>
            </a>`;
  },
};
