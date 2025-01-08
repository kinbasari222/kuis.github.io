function select(option) {
  const allOptions = option.parentElement.querySelectorAll('.option');
  allOptions.forEach(opt => opt.classList.remove('selected'));
  option.classList.add('selected');
  }
function calculateScore() {
 const questions = document.querySelectorAll('.question');
 let score = 0.
 questions.forEach(question => {
  const selected = question.querySelector('.option.selected');
  if (selected && selected.getAttribute('jwb') === '1') {
          score += 1;
     }
  });
    var namauser = prompt("Masukan Nama Kamu");
    if (!namauser) {
    alert("Nama tidak boleh kosong. Hasil tidak akan ditampilkan.");
    return;
  }
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Selamat ${namauser} kamu telah berhasil menjawab ${score} pertanyaan dengan benar dari ${questions.length} soal `;
    }
            
