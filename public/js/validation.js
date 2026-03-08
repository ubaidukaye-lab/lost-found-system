// validation.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("itemForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Simple client-side validation
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value.trim();
        const category = document.getElementById("category").value;
        const location = document.getElementById("location").value.trim();
        const contact = document.getElementById("contact").value.trim();

        if (!title || !description || !category || !location || !contact) {
            alert("Please fill in all fields!");
            return;
        }

        // Optional: validate contact (email/phone)
        const contactPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!contactPattern.test(contact)) {
            alert("Please enter a valid email address");
            return;
        }

        // Send POST request to server
        try {
            const response = await fetch("/items", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description, category, location, contact }),
            });

            const data = await response.json();
            alert("Item submitted successfully!");
            form.reset();
        } catch (err) {
            console.error(err);
            alert("Error submitting item. Try again.");
        }
    });
});