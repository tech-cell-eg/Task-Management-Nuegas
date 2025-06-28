    const ctx = document.getElementById('myLineChart').getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
          label: 'عدد المهام',
          data: [1, 2, 1, 2.5, 1.5, 2, 2],
          borderColor: 'rgb(20, 21, 34,1)',
          borderWidth: 2,
          fill: false,
          tension: 0.6,

          // نشيل كل الدواير باستخدام pointRadius وندّي واحدة لـ M فقط
          pointRadius: function(context) {
            return context.dataIndex === 1 ? 6 : 0; // M فقط
          },
          pointBorderWidth: function(context) {
            return context.dataIndex === 1 ? 4 : 0; // border للدائرة عند M
          },
          pointBorderColor: '#546fff',
          pointBackgroundColor: function(context) {
            return context.dataIndex === 1 ? '#fff' : 'transparent';
          }
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        },
       scales: {
  y: {
    beginAtZero: false,
    min: 1,
    max: 3,
    ticks: {
      stepSize: 0.5,
      callback: function(value) {
        // نعرض فقط 1 أو 2 أو 3
        if (value === 1 || value === 2 || value === 3) {
          return value;
        }
        return ''; // القيم 1.5 و 2.5 مش هتتكتب
      }
    }
  }
}

      },
plugins: [{
  id: 'messageBubble',
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    const meta = chart.getDatasetMeta(0);
    const point = meta.data[1]; // نقطة M فقط

    if (point) {
      const text = '2 task';
      const paddingX = 18; // padding يمين وشمال
      const paddingY = 10;  // padding فوق وتحت

      ctx.save();
      ctx.font = 'bold 12px Arial';
      const textWidth = ctx.measureText(text).width;
      const boxWidth = textWidth + paddingX * 2;
      const boxHeight = 28;

      const boxX = point.x - boxWidth / 2;
      const boxY = point.y - 55;

      const tailHeight = 6;
      const tailWidth = 6;

      // 🟧 رسم المستطيل (البالونة)
      ctx.beginPath();
      ctx.fillStyle = '#000';
      const radius = 6;

      ctx.moveTo(boxX + radius, boxY);
      ctx.lineTo(boxX + boxWidth - radius, boxY);
      ctx.quadraticCurveTo(boxX + boxWidth, boxY, boxX + boxWidth, boxY + radius);
      ctx.lineTo(boxX + boxWidth, boxY + boxHeight - radius);
      ctx.quadraticCurveTo(boxX + boxWidth, boxY + boxHeight, boxX + boxWidth - radius, boxY + boxHeight);
      ctx.lineTo(point.x + tailWidth, boxY + boxHeight);

      // 🟨 مثلث الذيل (قصير وواضح)
      ctx.lineTo(point.x, boxY + boxHeight + tailHeight);  // رأس المثلث
      ctx.lineTo(point.x - tailWidth, boxY + boxHeight);

      ctx.lineTo(boxX + radius, boxY + boxHeight);
      ctx.quadraticCurveTo(boxX, boxY + boxHeight, boxX, boxY + boxHeight - radius);
      ctx.lineTo(boxX, boxY + radius);
      ctx.quadraticCurveTo(boxX, boxY, boxX + radius, boxY);
      ctx.closePath();
      ctx.fill();

      // 📝 النص داخل الرسالة
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, point.x, boxY + boxHeight / 2);
      ctx.restore();
    }
  }
}]
    });
    //nav bar
  
 const links = document.querySelectorAll('.nav-menu a');
const pages = document.querySelectorAll('#home, #message, #setting, #task, #mentors');
const calendar = document.getElementById('calendar-column');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.dataset.target;
 
    pages.forEach(page => page.style.display = 'none');

   
    const target = document.getElementById(targetId);
    if (target) target.style.display = 'block';
 
    calendar.style.display = (targetId === 'home') ? 'block' : 'none';
 
    document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
    this.parentElement.classList.add('active');
  });
});


function addMessage({ name, photo, time, content }) {
    const container = document.getElementById("messages-container");

     
    const messageDiv = document.createElement("div");
    messageDiv.className = "message rounded-1 p-1 bg-white shadow-sm d-flex justify-content-between align-items-center w-100 my-3";
    messageDiv.setAttribute("data-name", name.toLowerCase()); 

    
    messageDiv.innerHTML = `
        <div class="d-flex align-items-center w-100">
            <div class="image me-3">
                <img
                    src="${photo}"
                    alt="Profile"
                    class="rounded-circle"
                    style="width: 50px; height: 50px; object-fit: cover;"
                >
            </div>
            <div class="text w-100">
                <div class="d-flex align-items-center justify-content-between">
                    <h6 class="mb-0 fw-bold">${name}</h6>
                    <span class="text-muted ms-5 ps-5" style="font-size: 0.5rem;">${time}</span>
                </div>
                <small class="text-black fw-lighter" style="font-size: 10px;">${content}</small>
            </div>
        </div>
    `;

    container.appendChild(messageDiv);
}

// Messages
const messages = [
    {
        name: "Alia Hassan",
        photo: "images/photo.png",
        time: "1m ago",
        content: "Thank you very much. I'm glad to hear that!"
    },
    {
        name: "John Doe",
        photo: "images/Profil.png",
        time: "3m ago",
        content: "Can you check the document I sent earlier?"
    },
    {
        name: "Maya Amr",
        photo: "images/Photo 4.png",
        time: "5m ago",
        content: "Meeting moved to 2:30 PM."
    },
    {
        name: "Aya Omar",
        photo: "images/Photo 5.png",
        time: "10m ago",
        content: "Can we reschedule the call to tomorrow?"
    },
    {
        name: "Marwa Nabil",
        photo: "images/Photo 2.png",
        time: "12m ago",
        content: "Don’t forget to submit the form."
    },
    {
        name: "Hala Said",
        photo: "images/Photo 3.png",
        time: "15m ago",
        content: "Thanks for your support, much appreciated."
    },
    {
        name: "Lina Hafez",
        photo: "images/Photo 1.png",
        time: "18m ago",
        content: "I’ll join the meeting a bit late."
    }
];


messages.forEach(addMessage);

 
document.getElementById("search-msg").addEventListener("input", function (e) {
    const searchValue = e.target.value.toLowerCase();
    const allMessages = document.querySelectorAll("#messages-container .message");

    allMessages.forEach(msg => {
        const name = msg.getAttribute("data-name");
        if (name.includes(searchValue)) {
            msg.style.display = "flex";
        } else {
            msg.style.display = "none";
        }
    });
});


