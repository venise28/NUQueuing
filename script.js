// queue student
function registerStudent() {
    var studentId = document.getElementById("studentId").value;
    var office = document.getElementById("modalTitle1").innerText;

    $.ajax({
        type: "POST",
        url: "process.php",
        data: { studentId: studentId, office: office },
        dataType: "json",
        success: function (response) {
            if (response.success) {
                var queueNumber = response.queue_number;
                // Set the queue number in the modal
                document.getElementById("queueNumber").innerText = queueNumber;
                // Show the third modal
                $('#thirdModal').modal('show');
            } else {
                alert("Error: " + response.message);
            }
        },
        error: function () {
            alert("An error occurred.");
        }
    });
}


// Function to update the modal titles
function updateModalTitle(modalId, title) {
    $(modalId).find(".modal-title").text(title);
}

// Event listener for button clicks

$(".btn").click(function() {
    var modalTitle = $(this).data("title");

    // Update the titles of all modals, including admissionModal
    updateModalTitle("#firstModal", modalTitle);
    updateModalTitle("#secondModal", modalTitle);
    updateModalTitle("#thirdModal", modalTitle);
    updateModalTitle("#admissionModal", modalTitle);
});
