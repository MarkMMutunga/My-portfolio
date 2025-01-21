const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const messagesDiv = document.getElementById('messages');

    // Display user message
    messagesDiv.innerHTML += `<div>User: ${userInput}</div>`;
    document.getElementById('userInput').value = '';

    // Simulate a bot response (you can replace this with an API call)
    const botResponse = `You said: ${userInput}`; // Replace with actual bot response
    messagesDiv.innerHTML += `<div>Bot: ${botResponse}</div>`;
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
});