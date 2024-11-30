document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('complaintForm');
    const fullName = document.getElementById('full-name');
    const contactInfo = document.getElementById('contact-info');
    const category = document.getElementById('category');
    const description = document.getElementById('description');
    const successModal = document.getElementById('success-modal');
    
    // Show tooltips on input focus
    const inputs = document.querySelectorAll('.complaint-form input, .complaint-form select, .complaint-form textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const tooltip = input.nextElementSibling;
            if (tooltip && tooltip.classList.contains('tooltip')) {
                tooltip.style.display = 'inline-block';
            }
        });
        input.addEventListener('blur', () => {
            const tooltip = input.nextElementSibling;
            if (tooltip && tooltip.classList.contains('tooltip')) {
                tooltip.style.display = 'none';
            }
        });
    });

    // Form submission validation
    form.addEventListener('submit', function(event) {
        let valid = true;

        // Full Name validation
        if (fullName.value.trim() === "") {
            valid = false;
            document.getElementById('name-error').style.visibility = "visible";
        } else {
            document.getElementById('name-error').style.visibility = "hidden";
        }

        // Contact Info validation (email or phone)
        const contactRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$|^\d{10}$/;
        if (!contactRegex.test(contactInfo.value.trim())) {
            valid = false;
            document.getElementById('contact-error').style.visibility = "visible";
        } else {
            document.getElementById('contact-error').style.visibility = "hidden";
        }

        // Category validation
        if (category.value === "") {
            valid = false;
            document.getElementById('category-error').style.visibility = "visible";
        } else {
            document.getElementById('category-error').style.visibility = "hidden";
        }

        // Description validation
        if (description.value.trim() === "") {
            valid = false;
            document.getElementById('desc-error').style.visibility = "visible";
        } else {
            document.getElementById('desc-error').style.visibility = "hidden";
        }

        if (valid) {
            // Display success modal
            event.preventDefault();
            successModal.style.display = "flex";
        } else {
            event.preventDefault();
        }
    });
});

// Close the success modal
function closeModal() {
    document.getElementById('success-modal').style.display = "none";
}
