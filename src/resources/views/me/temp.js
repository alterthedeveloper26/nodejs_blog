document.addEventListener("DOMContentLoaded", function (event) {
  var courseId;
  var actionForm = document.forms["delete-form"];
  var btnDelete = document.getElementById("btn-delete-course");
  var cbSelectAll = $("#cb-select-all");
  var cbCourseItems = $('input[name="courseIds[]"]');
  var btnPerform = $("#btn-perform");

  $("#deleteModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget);
    courseId = button.data("id");
  });

  btnDelete.onclick = function () {
    actionForm.action = "/courses/" + courseId + "?_method=DELETE";
    actionForm.submit();
  };

  cbSelectAll.change(function () {
    var isChecked = $(this).prop("checked");
    cbCourseItems.prop("checked", isChecked);
    renderPerformButton();
  });

  cbCourseItems.change(function () {
    var isCheckedAll =
      cbCourseItems.length === $('input[name="courseIds[]"]:checked').length;
    cbSelectAll.prop("checked", isCheckedAll);
    renderPerformButton();
  });

  function renderPerformButton() {
    var checkedCount = $('input[name="courseIds[]"]:checked').length;
    if (checkedCount) {
      btnPerform.removeClass("disabled");
    } else {
      btnPerform.addClass("disabled");
    }
  }

  btnPerform.click(function (e) {
    e.preventDefault();
    console.log("Oat do heo?");
  });
});
