function addMessage({ name, photo, time, content }) {
    const container = document.getElementById("messages-container");

    const messageDiv = document.createElement("div");
    messageDiv.className = "message rounded-1 p-2 bg-white shadow-sm d-flex justify-content-between align-items-center w-100 my-2";
    messageDiv.setAttribute("data-name", name.toLowerCase()); 

    messageDiv.innerHTML = `
        <div class="d-flex align-items-center w-100 overflow-hidden">
            <div class="image me-2 me-md-3 flex-shrink-0">
                <img
                    src="${photo}"
                    alt="Profile"
                    class="rounded-circle"
                    style="width: 40px; height: 40px; object-fit: cover;"
                >
            </div>
            <div class="text w-100 overflow-hidden">
                <div class="d-flex justify-content-between align-items-baseline w-100">
                    <h6 class="mb-0 fw-bold text-truncate pe-2" style="font-size: 0.9rem;">${name}</h6>
                    <span class="text-muted flex-shrink-0 text-nowrap" style="font-size: 0.5rem;">${time}</span>
                </div>
                <small class="text-black fw-lighter d-block text-truncate w-100" style="font-size: 0.7rem;">${content}</small>
            </div>
        </div>
    `;

    container.appendChild(messageDiv);
}
// Messages
const messages = [
    {
        name: "Alia Hassan",
        photo: "../images/photo.png",
        time: "1m ago",
        content: "Thank you very much. I'm glad to hear that!"
    },
    {
        name: "John Doe",
        photo: "../images/Profil.png",
        time: "3m ago",
        content: "Can you check the document I sent earlier?"
    },
    {
        name: "Maya Amr",
        photo: "../images/Photo 4.png",
        time: "5m ago",
        content: "Meeting moved to 2:30 PM."
    },
    {
        name: "Aya Omar",
        photo: "../images/Photo 5.png",
        time: "10m ago",
        content: "Can we reschedule the call to tomorrow?"
    },
    {
        name: "Marwa Nabil",
        photo: "../images/Photo 2.png",
        time: "12m ago",
        content: "Don’t forget to submit the form."
    },
    {
        name: "Hala Said",
        photo: "../images/Photo 3.png",
        time: "15m ago",
        content: "Thanks for your support, much appreciated."
    },
    {
        name: "Lina Hafez",
        photo: "../images/Photo 1.png",
        time: "18m ago",
        content: "I’ll join the meeting a bit late."
    }
];


messages.forEach(addMessage);

document.addEventListener('DOMContentLoaded', function() {
    
    const searchInput = document.getElementById("search-msg");
    
 if (searchInput) {
    searchInput.addEventListener("input", function(e) {
        const searchValue = e.target.value.toLowerCase();
        const allMessages = document.querySelectorAll("#messages-container .message");
      
        
        
         
        const filteredMessages = messages.filter(item => 
            item.name.toLowerCase().includes(searchValue)
        );
        
        document.getElementById("messages-container").innerHTML = '';
        
        filteredMessages.forEach(addMessage);
        
    });
}
});