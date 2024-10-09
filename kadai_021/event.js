const Btn  = document.getElementById('btn');
const Text = document.getElementById('text');

Btn.addEventListener('click', () => {
  setTimeout(() => {
    document.getElementById('text').textContent = "ボタンをクリックしました";
	}, 2000);
});




