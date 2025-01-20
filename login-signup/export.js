// 1. שלוף את הנתונים מ-localStorage
const data = localStorage.getItem('register_data');

// 2. בדוק אם יש נתונים
if (data) {
  // 3. צור קובץ והורד אותו
  const blob = new Blob([data], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'register_data.json'; // שם הקובץ
  link.click();
} else {
  console.log('No data found in localStorage for "register_data".');
}
