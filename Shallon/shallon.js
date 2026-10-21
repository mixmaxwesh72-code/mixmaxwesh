// Handle Pre-Order Form Submission
document.getElementById('preorder-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const setChoice = document.getElementById('set-choice').value;
    const sizeChoice = document.getElementById('size-choice').value;

    if(name && setChoice && sizeChoice) {
        alert(`Thank you, ${name}! Your pre-order for the ${setChoice} Set (Size: ${sizeChoice}) has been received successfully. We will contact you shortly to finalize details.`);
        document.getElementById('preorder-form').reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});