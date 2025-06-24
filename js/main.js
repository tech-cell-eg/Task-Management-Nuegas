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