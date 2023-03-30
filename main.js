	var passwordLength = 8; // default password length
	var difficulty = 'low'; // default difficulty setting

	document.getElementById('length').addEventListener('input', function() {
		passwordLength = this.value;
	});

	document.querySelectorAll('.difficulty-option').forEach(function(option) {
		option.addEventListener('click', function() {
			difficulty = this.getAttribute('data-value');
			document.querySelectorAll('.difficulty-option').forEach(function(option) {
				option.classList.remove('selected-difficulty-option');
			});
			this.classList.add('selected-difficulty-option');
		});
	});

	function generatePassword() {
		var characters = '';
		var password = '';

		if (difficulty === 'low') {
			characters = 'abcdefghijklmnopqrstuvwxyz';
		} else if (difficulty === 'medium') {
			characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		} else if (difficulty === 'high') {
characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
}

		for (var i = 0; i < passwordLength; i++) {
			password += characters.charAt(Math.floor(Math.random() * characters.length));
		}

		document.getElementById('password').value = password;
	}
