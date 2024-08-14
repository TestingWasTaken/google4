document.getElementById('commandInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        executeCommand();
    }
});

function executeCommand() {
    const input = document.getElementById('commandInput').value.trim();
    if (input) {
        const output = document.getElementById('output');
        output.textContent += `$ ${input}\n`;

        if (input.toLowerCase() === 'hack') {
            output.textContent += 'Hacking in progress...\n';
            setTimeout(() => {
                output.textContent += 'Access granted! You have successfully hacked the system.\n';
                document.getElementById('commandInput').value = '';
            }, 2000);
        } else {
            output.textContent += `Unknown command: ${input}\n`;
        }

        document.getElementById('commandInput').value = '';
        output.scrollTop = output.scrollHeight;
    }
}

function clearOutput() {
    document.getElementById('output').textContent = '';
}
